import { store, isBookmarked, toggleBookmark } from './store.js';
import { Player, RECITERS, reciterById } from './audio.js';
import * as P from './prayer.js';

const $ = (s, r = document) => r.querySelector(s);
const view = $('#view');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const icon = (id, cls = 'ic') => `<svg class="${cls}"><use href="#i-${id}"/></svg>`;
const BG_MONTHS = ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември'];
const BG_DAYS = ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'];
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

// ---------- данни ----------
let META = null;
const surahCache = new Map();
async function loadMeta() { if (!META) META = await (await fetch('data/meta.json')).json(); return META; }
async function loadSurah(n) {
  if (!surahCache.has(n)) surahCache.set(n, fetch(`data/s/${n}.json`).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }).catch(e => { surahCache.delete(n); throw e; }));
  return surahCache.get(n);
}
const S = n => META.surahs[n - 1];
const BISM = 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ';

// ---------- тема и размери ----------
function applyPrefs() {
  const t = store.get('theme');
  if (t === 'auto') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = t;
  document.documentElement.style.setProperty('--ar', store.get('arSize') + 'px');
  document.documentElement.style.setProperty('--trs', store.get('trSize') + 'px');
  const meta = document.querySelectorAll('meta[name=theme-color]');
  const bg = getComputedStyle(document.body).getPropertyValue('--bg').trim();
  if (t !== 'auto' && bg) meta.forEach(m => m.setAttribute('content', bg));
}

// ---------- toast и sheet ----------
let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2400);
}
let sheetClose = null;
function openSheet(html, onClose) {
  $('#sheetBody').innerHTML = html;
  $('#sheet').hidden = false; $('#scrim').hidden = false;
  document.body.style.overflow = 'hidden';
  sheetClose = onClose || null;
  return $('#sheetBody');
}
function closeSheet() {
  if ($('#sheet').hidden) return;
  $('#sheet').hidden = true; $('#scrim').hidden = true; document.body.style.overflow = '';
  const f = sheetClose; sheetClose = null; f && f();
}
$('#scrim').addEventListener('click', closeSheet);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });
// плъзгане надолу затваря листа на телефон
(() => {
  const sh = $('#sheet'); let y0 = null, dy = 0;
  sh.addEventListener('touchstart', e => { if ($('#sheetBody').scrollTop <= 0) { y0 = e.touches[0].clientY; dy = 0; } }, { passive: true });
  sh.addEventListener('touchmove', e => { if (y0 == null) return; dy = e.touches[0].clientY - y0; if (dy > 0) sh.style.transform = `translateY(${dy}px)`; }, { passive: true });
  sh.addEventListener('touchend', () => { if (y0 == null) return; sh.style.transform = ''; if (dy > 90) closeSheet(); y0 = null; });
})();

// ---------- плейър ----------
const player = new Player(s => S(s).ayahs);
player.meta = S;
window.qkPlayer = player; // за проверка от конзолата
player.reciter = store.get('reciter');
player.setRate(store.get('rate'));
player.mode = store.get('play');
player.repeatN = store.get('repeatN');
player.autoNext = store.get('autoNext');
const MODES = { single: 'Само айета', continue: 'Поредно', repeat: 'Повтори' };

function syncPlayer() {
  const c = player.cur;
  $('#player').hidden = !c;
  document.body.classList.toggle('playing', !!c);
  document.querySelectorAll('.cur').forEach(e => e.classList.remove('cur'));
  document.querySelectorAll('[data-act=play].on').forEach(b => { b.classList.remove('on'); b.innerHTML = icon('play'); });
  if (!c) return;
  if (route.name === 'surah' && route.s === c.s && player.playing) {
    const b = document.querySelector(`#a-${c.a} [data-act=play]`);
    if (b) { b.classList.add('on'); b.innerHTML = icon('pause'); }
  }
  const m = S(c.s);
  $('#plTitle').textContent = c.bism ? `${m.name} · Бисмиллях` : `${m.name} · айет ${c.a}`;
  $('#plSub').textContent = reciterById(player.reciter).name + (player.mode === 'repeat' ? ` · ${player.rep}/${player.repeatN}` : '');
  $('#plPlay').innerHTML = icon(player.playing ? 'pause' : 'play') + '<span class="spin"></span>';
  $('#plPlay').classList.toggle('loading', player.loading && player.playing !== false && !player.el.paused);
  $('#plMode').innerHTML = icon('repeat') + MODES[player.mode] + (player.mode === 'repeat' ? ` ×${player.repeatN}` : '');
  $('#plRate').textContent = player.rate + '×';
  $('#plReciter span').textContent = reciterById(player.reciter).name.split(' ').slice(-1)[0];
  if (route.name === 'surah' && route.s === c.s && !c.bism) {
    const el = document.getElementById('a-' + c.a);
    if (el) {
      el.classList.add('cur');
      if (store.get('follow') && player.playing && lastFollowed !== c.s + ':' + c.a) {
        lastFollowed = c.s + ':' + c.a;
        el.scrollIntoView({ behavior: 'smooth', block: store.get('mode') === 'mushaf' ? 'center' : 'start' });
      }
    }
  }
  document.querySelectorAll('.surah-play').forEach(b => { b.innerHTML = icon(player.playing && player.cur.s === +b.dataset.s ? 'pause' : 'play') + (player.playing && player.cur.s === +b.dataset.s ? 'Пауза' : 'Слушай'); });
}
let lastFollowed = '';
player.addEventListener('state', syncPlayer);
player.addEventListener('time', e => { $('#plProg').style.width = (e.detail * 100).toFixed(1) + '%'; });
player.addEventListener('fail', () => toast('Аудиото не се зареди. Проверете интернет връзката.'));
player.addEventListener('end', () => { if (player.cur && route.name === 'surah' && route.s !== player.cur.s && store.get('follow')) go(`#/s/${player.cur.s}`); });
$('#plPlay').onclick = () => player.toggle();
$('#plPrev').onclick = () => player.step(-1);
$('#plNext').onclick = () => player.step(1);
$('#plClose').onclick = () => player.stop();
$('#plInfo').onclick = () => { const c = player.cur; if (c) go(`#/s/${c.s}/${c.a}`); };
$('#plRate').onclick = () => {
  const R = [0.75, 1, 1.25, 1.5];
  const r = R[(R.indexOf(player.rate) + 1) % R.length];
  player.setRate(r); store.set('rate', r); syncPlayer();
};
$('#plMode').onclick = () => modeSheet();
$('#plReciter').onclick = () => reciterSheet();

function modeSheet() {
  const b = openSheet(`<h3>Как да се чете</h3>
    <div class="opt-list">
      ${Object.entries({ single: ['Само избрания айет', 'Спира след края на айета'], continue: ['Поредно', 'Продължава айет след айет' + (store.get('autoNext') ? ' и със следващата сура' : '')], repeat: ['Повтаряй айета', 'За заучаване наизуст'] })
        .map(([k, [t, d]]) => `<button class="opt ${player.mode === k ? 'on' : ''}" data-m="${k}"><span class="mid"><b>${t}</b><small>${d}</small></span>${player.mode === k ? icon('check') : ''}</button>`).join('')}
    </div>
    <div class="sub">Брой повторения</div>
    <div class="seg" id="repN">${[2, 3, 5, 7, 10].map(n => `<button class="${player.repeatN === n ? 'on' : ''}" data-n="${n}">${n}×</button>`).join('')}</div>`);
  b.querySelectorAll('[data-m]').forEach(x => x.onclick = () => { player.mode = x.dataset.m; store.set('play', player.mode); player.preloadNext(); syncPlayer(); closeSheet(); });
  b.querySelectorAll('[data-n]').forEach(x => x.onclick = () => { player.repeatN = +x.dataset.n; store.set('repeatN', player.repeatN); player.mode = 'repeat'; store.set('play', 'repeat'); syncPlayer(); closeSheet(); });
}
function reciterSheet(after) {
  const b = openSheet(`<h3>Рецитатор</h3><div class="opt-list">${RECITERS.map(r => `<button class="opt ${r.id === player.reciter ? 'on' : ''}" data-r="${r.id}">${icon('mic')}<span class="mid"><b>${esc(r.name)}</b><small>${esc(r.note)}</small></span>${r.id === player.reciter ? icon('check') : ''}</button>`).join('')}</div>`);
  b.querySelectorAll('[data-r]').forEach(x => x.onclick = () => { player.setReciter(x.dataset.r); store.set('reciter', x.dataset.r); syncPlayer(); closeSheet(); toast(reciterById(x.dataset.r).name); after && after(); });
  b.querySelector('.opt.on')?.scrollIntoView({ block: 'center' });
}

// ---------- рутер ----------
let route = { name: 'home' };
function parse() {
  const h = location.hash.replace(/^#\/?/, '').split('/');
  if (h[0] === 's' && +h[1] >= 1 && +h[1] <= 114) return { name: 'surah', s: +h[1], a: +h[2] || 0 };
  if (['prayer', 'bookmarks', 'settings', 'search'].includes(h[0])) return { name: h[0], q: decodeURIComponent(h[1] || '') };
  return { name: 'home' };
}
function go(h) { if (location.hash === h) render(); else location.hash = h; }
window.addEventListener('hashchange', render);

let cleanup = [];
async function render() {
  const prev = route;
  route = parse();
  cleanup.forEach(f => f()); cleanup = [];
  closeSheet();
  document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === (route.name === 'surah' || route.name === 'search' ? 'home' : route.name)));
  await loadMeta();
  if (route.name === 'surah' && prev.name === 'surah' && prev.s === route.s && route.a) { jumpTo(route.a); return; }
  const r = { home: renderHome, surah: renderSurah, prayer: renderPrayer, bookmarks: renderBookmarks, settings: renderSettings, search: renderSearch }[route.name];
  await r();
  if (route.name !== 'surah') window.scrollTo(0, 0);
  syncPlayer();
  stickyBar();
}
function stickyBar() {
  const tb = $('.topbar'); if (!tb) return;
  const f = () => tb.classList.toggle('stuck', window.scrollY > 8);
  f(); window.addEventListener('scroll', f, { passive: true }); cleanup.push(() => window.removeEventListener('scroll', f));
}

// ---------- начало ----------
let homeTab = 'surah';
async function renderHome() {
  const now = new Date();
  const last = store.get('last');
  view.innerHTML = `<div class="fade-in">
    <header class="hero">
      <div class="hero-head">
        <h1 class="hero-title">Куран-и Керим<span>القرآن الكريم</span></h1>
        <div class="hero-date"><b>${now.getDate()} ${BG_MONTHS[now.getMonth()]}</b>${BG_DAYS[now.getDay()]}<br><span style="color:var(--gold)">${P.hijri(now)}</span></div>
      </div>
      <a class="next-card" href="#/prayer" id="nextCard"><div class="lbl">${icon('clock')} Времена за намаз</div><div class="row"><span class="nm">Изберете населено място</span></div><div class="cd">Всеки град и село в България</div></a>
      ${last ? `<a class="card continue" href="#/s/${last.s}/${last.a}"><span class="ic-wrap">${icon('book')}</span><div><small>Продължете четенето</small><b>${esc(S(last.s).name)}</b> <span class="muted">· айет ${last.a}</span></div>${icon('chev-r')}</a>` : ''}
      <label class="search">${icon('search')}<input id="q" type="search" placeholder="Сура, номер или 2:255, дума от превода…" autocomplete="off" enterkeyhint="search"></label>
    </header>
    <div class="list-head">
      <h2 id="listTitle">Сури</h2>
      <div class="seg" role="tablist"><button data-t="surah" class="${homeTab === 'surah' ? 'on' : ''}">Сури</button><button data-t="juz" class="${homeTab === 'juz' ? 'on' : ''}">Джузове</button></div>
    </div>
    <div class="grid" id="list"></div>
    <div id="searchMore"></div>
  </div>`;
  const list = $('#list');
  const drawSurahs = (q = '') => {
    const nq = q.trim().toLowerCase();
    const items = META.surahs.filter(s => !nq || String(s.n) === nq || [s.name, s.mean, s.tr, s.ar].some(x => x.toLowerCase().includes(nq)) || P.translit(s.name).includes(P.translit(nq)));
    list.innerHTML = items.map(s => `<a class="srow" href="#/s/${s.n}">
      <span class="num-badge">${s.n}</span>
      <span class="mid"><b>${esc(s.name)}</b><small>${s.mean !== s.name ? esc(s.mean) + ' · ' : ''}${s.place} · ${plural(s.ayahs, 'айет', 'айета')}</small></span>
      <span class="ar-name">${s.ar}</span></a>`).join('') || `<div class="empty">Няма сура с това име.</div>`;
    $('#searchMore').innerHTML = nq.length >= 3 && !/^\d/.test(nq) ? `<button class="btn ghost" style="margin-top:14px;width:100%" id="ftBtn">${icon('search')} Търси „${esc(q.trim())}“ в превода</button>` : '';
    $('#ftBtn') && ($('#ftBtn').onclick = () => go('#/search/' + encodeURIComponent(q.trim())));
  };
  const drawJuz = () => {
    list.innerHTML = META.juz.map(([s, a], i) => `<a class="srow" href="#/s/${s}/${a}">
      <span class="num-badge">${i + 1}</span>
      <span class="mid"><b>Джуз ${i + 1}</b><small>Започва: ${esc(S(s).name)} ${s}:${a}</small></span>
      <span class="ar-name">الجزء ${(i + 1).toLocaleString('ar-EG')}</span></a>`).join('');
    $('#searchMore').innerHTML = '';
  };
  const draw = () => { $('#listTitle').textContent = homeTab === 'surah' ? 'Сури' : 'Джузове'; homeTab === 'surah' ? drawSurahs($('#q').value) : drawJuz(); };
  view.querySelectorAll('[data-t]').forEach(b => b.onclick = () => { homeTab = b.dataset.t; view.querySelectorAll('[data-t]').forEach(x => x.classList.toggle('on', x === b)); draw(); });
  $('#q').addEventListener('input', e => { if (homeTab !== 'surah') { homeTab = 'surah'; view.querySelectorAll('[data-t]').forEach(x => x.classList.toggle('on', x.dataset.t === 'surah')); } drawSurahs(e.target.value); });
  $('#q').addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const v = e.target.value.trim();
    const m = v.match(/^(\d{1,3})\s*[:.\s]\s*(\d{1,3})$/);
    if (m && +m[1] >= 1 && +m[1] <= 114) { const s = +m[1], a = Math.min(+m[2], S(s).ayahs) || 1; go(`#/s/${s}/${a}`); return; }
    if (/^\d{1,3}$/.test(v) && +v >= 1 && +v <= 114) { go(`#/s/${+v}`); return; }
    if (v.length >= 3) go('#/search/' + encodeURIComponent(v));
  });
  draw();
  homePrayer();
}
async function homePrayer() {
  const place = store.get('place');
  if (!place) return;
  await P.loadPrayer();
  const tick = () => {
    const card = $('#nextCard'); if (!card) return;
    const np = P.nextPrayer(place, store.get('villageMode'));
    card.innerHTML = `<div class="lbl">${icon('pin')} ${esc(P.placeLabel(place))}</div>
      <div class="row"><span class="nm">${P.PRAYERS[np.i].bg} <small style="font:500 14px var(--ui);opacity:.75">${P.PRAYERS[np.i].tr}</small></span><span class="tm">${P.fmt(np.at)}</span></div>
      <div class="cd">след ${countdown(np.secsLeft, true)}</div>
      <div class="mini">${P.PRAYERS.map((p, i) => `<div class="${i === np.i ? 'now' : ''}">${p.bg}<b>${P.fmt(np.today[i])}</b></div>`).join('')}</div>`;
  };
  tick(); const t = setInterval(tick, 1000); cleanup.push(() => clearInterval(t));
}
function countdown(sec, words) {
  sec = Math.max(0, Math.round(sec));
  const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60;
  if (words) return h ? `${h} ч ${m} мин` : m ? `${m} мин ${s} сек` : `${s} сек`;
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ---------- сура ----------
async function renderSurah() {
  const n = route.s, m = S(n);
  view.innerHTML = `<div class="topbar"><button class="ib" onclick="history.length>1?history.back():location.hash='#/'" aria-label="Назад">${icon('chev-l')}</button><h1>${esc(m.name)}<small>${n}</small></h1>
    <button class="ib" id="tSize" aria-label="Размер на шрифта">${icon('text')}</button>
    <button class="ib" id="tView" aria-label="Изглед">${icon('book')}</button></div><div class="loader"></div>`;
  let ayahs;
  try { ayahs = await loadSurah(n); } catch (e) { view.querySelector('.loader').outerHTML = `<div class="empty">Не успях да заредя сурата. Проверете връзката и опитайте отново.<br><br><button class="btn" onclick="location.reload()">Опитай пак</button></div>`; return; }
  if (route.name !== 'surah' || route.s !== n) return;
  const mode = store.get('mode');
  const showTr = store.get('showTr');
  const head = `<section class="card surah-head fade-in">
      <div class="ar">سُورَةُ ${m.ar}</div>
      <h2>${esc(m.name)}</h2>
      <p>${m.mean !== m.name ? esc(m.mean) + ' · ' : ''}${m.place} · ${plural(m.ayahs, 'айет', 'айета')} · джуз ${m.juz}</p>
      <div class="acts">
        <button class="btn surah-play" data-s="${n}">${icon('play')}Слушай</button>
        <button class="btn ghost" id="recBtn">${icon('mic')}<span>${esc(reciterById(player.reciter).name)}</span></button>
      </div>
    </section>
    ${n !== 1 && n !== 9 ? `<p class="bism">${BISM}</p>` : ''}`;
  let body;
  if (mode === 'mushaf') {
    let pg = 0;
    body = `<div class="card mushaf">${ayahs.map((a, i) => {
      const mark = a[2] !== pg ? (pg = a[2], i ? `<span class="pg-mark">стр. ${a[2]}</span>` : '') : '';
      return `${mark}<span class="ma" id="a-${i + 1}" data-a="${i + 1}">${a[0]}</span> `;
    }).join('')}</div>`;
  } else {
    body = `<div class="${showTr ? '' : 'hide-tr'}">${ayahs.map((a, i) => `<article class="ayah" id="a-${i + 1}" data-a="${i + 1}">
      <div class="ayah-top"><span class="ayah-key">${n}:${i + 1}</span>
        <button class="ib" data-act="play" aria-label="Чети айета">${icon('play')}</button>
        <button class="ib ${isBookmarked(n, i + 1) ? 'bm' : ''}" data-act="bm" aria-label="Отметка">${icon(isBookmarked(n, i + 1) ? 'bookmark-fill' : 'bookmark')}</button>
        <button class="ib" data-act="more" aria-label="Още">${icon('more')}</button></div>
      <p class="ar-text" lang="ar">${a[0]}</p>
      <p class="tr-text">${esc(a[1])}</p></article>`).join('')}</div>`;
  }
  const prev = n > 1 ? S(n - 1) : null, next = n < 114 ? S(n + 1) : null;
  const nav = `<nav class="surah-nav">${prev ? `<a class="card" href="#/s/${n - 1}"><small>← Предишна</small><b>${esc(prev.name)}</b></a>` : '<span></span>'}${next ? `<a class="card" href="#/s/${n + 1}"><small>Следваща →</small><b>${esc(next.name)}</b></a>` : '<span></span>'}</nav>`;
  view.querySelector('.loader').outerHTML = head + body + nav;

  view.querySelector('.surah-play').onclick = () => {
    if (player.cur && player.cur.s === n) { player.toggle(); return; }
    player.play(n, 1, player.mode === 'continue' ? 'continue' : 'continue'); store.set('play', 'continue');
  };
  $('#recBtn').onclick = () => reciterSheet(() => { $('#recBtn span').textContent = reciterById(player.reciter).name; });
  $('#tSize').onclick = sizeSheet;
  $('#tView').onclick = viewSheet;
  view.addEventListener('click', ayahClick);
  cleanup.push(() => view.removeEventListener('click', ayahClick));

  // запомняме докъде е стигнал читателят
  const io = new IntersectionObserver(es => {
    const vis = es.filter(e => e.isIntersecting).map(e => +e.target.dataset.a);
    if (vis.length) { const a = Math.min(...vis); clearTimeout(saveT); saveT = setTimeout(() => store.set('last', { s: n, a }), 600); }
  }, { rootMargin: '-80px 0px -55% 0px' });
  view.querySelectorAll('[data-a]').forEach(e => io.observe(e));
  cleanup.push(() => io.disconnect());

  if (route.a) requestAnimationFrame(() => jumpTo(route.a, true));
  else window.scrollTo(0, 0);
}
let saveT;
function jumpTo(a, instant) {
  const el = document.getElementById('a-' + a);
  if (!el) return;
  el.scrollIntoView({ behavior: instant ? 'auto' : 'smooth', block: store.get('mode') === 'mushaf' ? 'center' : 'start' });
  // content-visibility може да промени височините — коригираме още веднъж
  if (instant) setTimeout(() => el.scrollIntoView({ block: store.get('mode') === 'mushaf' ? 'center' : 'start' }), 120);
  el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
}
function ayahClick(e) {
  const t = e.target.closest('[data-act], .ma');
  if (!t) return;
  const host = t.closest('[data-a]');
  const a = +host.dataset.a, s = route.s;
  const act = t.classList.contains('ma') ? 'more' : t.dataset.act;
  if (act === 'play') {
    if (player.cur && player.cur.s === s && player.cur.a === a && !player.cur.bism) { player.toggle(); return; }
    player.play(s, a, player.mode);
  } else if (act === 'bm') {
    const on = toggleBookmark(s, a);
    t.classList.toggle('bm', on); t.innerHTML = icon(on ? 'bookmark-fill' : 'bookmark');
    toast(on ? 'Добавено в отметките' : 'Премахнато от отметките');
  } else ayahSheet(s, a);
}
async function ayahSheet(s, a) {
  const ay = (await loadSurah(s))[a - 1];
  const bm = isBookmarked(s, a);
  const b = openSheet(`<h3>${esc(S(s).name)} ${s}:${a}</h3>
    <p class="sheet-ar" lang="ar">${ay[0]}</p>
    <p class="sheet-tr">${esc(ay[1])}</p>
    <div class="acts-grid">
      <button class="act" data-x="one">${icon('play')}Чети само този</button>
      <button class="act" data-x="from">${icon('next')}Чети от тук нататък</button>
      <button class="act" data-x="rep">${icon('repeat')}Повтаряй ×${player.repeatN}</button>
      <button class="act" data-x="bm">${icon(bm ? 'bookmark-fill' : 'bookmark')}${bm ? 'Махни отметката' : 'Отметка'}</button>
      <button class="act" data-x="copy">${icon('copy')}Копирай</button>
      <button class="act" data-x="share">${icon('share')}Сподели</button>
      <button class="act wide" data-x="rec">${icon('mic')}Рецитатор: ${esc(reciterById(player.reciter).name)}</button>
    </div>`);
  b.onclick = async e => {
    const x = e.target.closest('[data-x]')?.dataset.x; if (!x) return;
    const text = `${ay[0]}\n\n${ay[1]}\n\n— Коран, ${S(s).name} ${s}:${a}`;
    if (x === 'one' || x === 'from' || x === 'rep') {
      const mode = { one: 'single', from: 'continue', rep: 'repeat' }[x];
      store.set('play', mode); closeSheet(); player.play(s, a, mode);
    } else if (x === 'bm') {
      const on = toggleBookmark(s, a); closeSheet(); toast(on ? 'Добавено в отметките' : 'Премахнато от отметките');
      const btn = document.querySelector(`#a-${a} [data-act=bm]`); if (btn) { btn.classList.toggle('bm', on); btn.innerHTML = icon(on ? 'bookmark-fill' : 'bookmark'); }
    } else if (x === 'copy') {
      try { await navigator.clipboard.writeText(text); toast('Копирано'); } catch (err) { toast('Не успях да копирам'); }
      closeSheet();
    } else if (x === 'share') {
      const url = `${location.origin}${location.pathname}#/s/${s}/${a}`;
      if (navigator.share) { try { await navigator.share({ title: `${S(s).name} ${s}:${a}`, text, url }); } catch (err) {} }
      else { try { await navigator.clipboard.writeText(text + '\n' + url); toast('Копирано за споделяне'); } catch (err) {} }
      closeSheet();
    } else if (x === 'rec') reciterSheet();
  };
}
function sizeSheet() {
  const b = openSheet(`<h3>Размер на текста</h3>
    <p class="preview-ar" lang="ar">${BISM}</p>
    <div class="set-row" style="padding:10px 0"><div class="mid"><b>Арабски текст</b><small id="arV">${store.get('arSize')} px</small></div><input class="range" id="arR" type="range" min="22" max="64" step="1" value="${store.get('arSize')}"></div>
    <p class="preview-tr">В името на Аллах, Всемилостивия, Милосърдния!</p>
    <div class="set-row" style="padding:10px 0;border:0"><div class="mid"><b>Превод</b><small id="trV">${store.get('trSize')} px</small></div><input class="range" id="trR" type="range" min="13" max="28" step="1" value="${store.get('trSize')}"></div>`);
  b.querySelector('#arR').oninput = e => { store.set('arSize', +e.target.value); b.querySelector('#arV').textContent = e.target.value + ' px'; applyPrefs(); };
  b.querySelector('#trR').oninput = e => { store.set('trSize', +e.target.value); b.querySelector('#trV').textContent = e.target.value + ' px'; applyPrefs(); };
}
function viewSheet() {
  const mode = store.get('mode'), tr = store.get('showTr');
  const b = openSheet(`<h3>Изглед</h3><div class="opt-list">
    <button class="opt ${mode === 'ayah' && tr ? 'on' : ''}" data-v="ayah-tr">${icon('book')}<span class="mid"><b>Айет по айет с превод</b><small>Арабски текст и превод на български</small></span></button>
    <button class="opt ${mode === 'ayah' && !tr ? 'on' : ''}" data-v="ayah">${icon('text')}<span class="mid"><b>Айет по айет, само арабски</b><small>С бутони за слушане на всеки айет</small></span></button>
    <button class="opt ${mode === 'mushaf' ? 'on' : ''}" data-v="mushaf">${icon('bookmark')}<span class="mid"><b>Мусхаф</b><small>Непрекъснат текст като в книгата. Докоснете айет за превод и слушане.</small></span></button>
  </div>`);
  b.querySelectorAll('[data-v]').forEach(x => x.onclick = () => {
    const v = x.dataset.v;
    store.set('mode', v === 'mushaf' ? 'mushaf' : 'ayah');
    if (v !== 'mushaf') store.set('showTr', v === 'ayah-tr');
    const keep = store.get('last');
    closeSheet();
    route = { name: 'x' };
    if (keep && keep.s === parse().s) history.replaceState(null, '', `#/s/${keep.s}/${keep.a}`);
    render();
  });
}

// ---------- търсене в превода ----------
async function renderSearch() {
  const q = route.q;
  view.innerHTML = `<div class="topbar"><button class="ib" onclick="history.back()" aria-label="Назад">${icon('chev-l')}</button><h1>Търсене<small>„${esc(q)}“</small></h1></div><div class="loader"></div>`;
  const all = await Promise.all(META.surahs.map(s => loadSurah(s.n)));
  if (route.name !== 'search') return;
  const nq = q.toLowerCase();
  const res = [];
  all.forEach((ays, i) => ays.forEach((a, j) => { if (a[1].toLowerCase().includes(nq)) res.push([i + 1, j + 1, a[1]]); }));
  const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  view.querySelector('.loader').outerHTML = `<p class="muted" style="margin:14px 2px">${plural(res.length, 'резултат', 'резултата')}${res.length > 300 ? ' (показани първите 300)' : ''}</p>` +
    (res.slice(0, 300).map(([s, a, t]) => `<a class="card res-item" href="#/s/${s}/${a}"><span class="ayah-key">${esc(S(s).name)} ${s}:${a}</span><p>${esc(t).replace(re, m => `<mark>${m}</mark>`)}</p></a>`).join('') || `<div class="empty">Няма намерени айети.</div>`);
}

// ---------- отметки ----------
async function renderBookmarks() {
  const bms = store.get('bookmarks');
  view.innerHTML = `<div class="topbar"><h1>Отметки</h1></div><div id="bmList"><div class="loader"></div></div>`;
  if (!bms.length) { $('#bmList').innerHTML = `<div class="empty">${icon('bookmark')}<p>Още нямате отметки.<br>Докоснете ${'⋯'} до айет и изберете „Отметка“.</p></div>`; return; }
  const items = await Promise.all(bms.map(async b => ({ ...b, ay: (await loadSurah(b.s))[b.a - 1] })));
  $('#bmList').innerHTML = items.map(b => `<div class="card bm-item fade-in"><div class="top"><a class="ayah-key" href="#/s/${b.s}/${b.a}">${esc(S(b.s).name)} ${b.s}:${b.a}</a>
      <span><button class="ib" data-p="${b.s}:${b.a}" aria-label="Слушай">${icon('play')}</button><button class="ib" data-r="${b.s}:${b.a}" aria-label="Премахни">${icon('x')}</button></span></div>
      <a href="#/s/${b.s}/${b.a}"><p class="ar-text" lang="ar">${b.ay[0]}</p><p class="tr-text" style="font-size:15px">${esc(b.ay[1])}</p></a></div>`).join('');
  $('#bmList').onclick = e => {
    const p = e.target.closest('[data-p]'), r = e.target.closest('[data-r]');
    if (p) { const [s, a] = p.dataset.p.split(':').map(Number); player.play(s, a, 'single'); }
    if (r) { const [s, a] = r.dataset.r.split(':').map(Number); toggleBookmark(s, a); renderBookmarks(); }
  };
}

// ---------- намаз ----------
let pDay = 0, showMonth = false;
async function renderPrayer() {
  view.innerHTML = `<div class="topbar"><h1>Времена за намаз</h1><button class="ib" id="locBtn" aria-label="Намери ме">${icon('locate')}</button></div><div class="loader"></div>`;
  await P.loadPrayer();
  $('#locBtn').onclick = locate;
  if (route.q) { // връзка за споделяне: #/prayer/Рибново
    await P.loadPlaces();
    const p = P.searchPlaces(route.q, 1)[0];
    if (p) store.set('place', { name: p.name, type: p.type, lat: p.lat, lon: p.lon, obl: p.obl, obs: p.obs });
    history.replaceState(null, '', '#/prayer'); route.q = '';
  }
  const place = store.get('place');
  if (!place) {
    view.querySelector('.loader').outerHTML = `<div class="card empty fade-in" style="margin-top:10px">${icon('pin')}<h3 style="font:700 22px var(--serif);color:var(--text);margin:6px 0">Къде се намирате?</h3>
      <p>Времената се изчисляват по официалния календар на Главно мюфтийство за всеки град и село в България.</p>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px"><button class="btn" id="gl">${icon('locate')}Намери ме</button><button class="btn ghost" id="pick">${icon('search')}Избери от списъка</button></div></div>`;
    $('#gl').onclick = locate; $('#pick').onclick = placeSheet;
    return;
  }
  const vm = store.get('villageMode');
  const n = P.nowBG();
  const base = new Date(Date.UTC(n.y, n.m - 1, n.d + pDay));
  const y = base.getUTCFullYear(), m = base.getUTCMonth() + 1, d = base.getUTCDate();
  const r = P.timesFor(place, y, m, d, vm);
  const isToday = pDay === 0;
  view.querySelector('.loader').outerHTML = `<div class="fade-in">
    <button class="card place-bar" id="placeBtn" style="width:100%;text-align:left"><span class="ic-wrap">${icon('pin')}</span><span class="mid"><b>${esc(P.placeLabel(place))}</b><small>${esc(P.placeSub(place))}</small></span><span class="chip">Промени</span></button>
    <div class="next-card big-next" id="bigNext"></div>
    <div class="day-nav"><button class="ib" id="dPrev" aria-label="Предишен ден">${icon('chev-l')}</button>
      <div style="text-align:center"><b>${isToday ? 'Днес, ' : ''}${d} ${BG_MONTHS[m - 1]} ${y}</b><small>${BG_DAYS[base.getUTCDay()]} · ${P.hijri(new Date(Date.UTC(y, m - 1, d, 12)))}</small></div>
      <button class="ib" id="dNext" aria-label="Следващ ден">${icon('chev-r')}</button></div>
    <div class="card times" id="times"></div>
    <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap">
      ${!isToday ? `<button class="btn ghost" id="today">${icon('calendar')}Днес</button>` : ''}
      <button class="btn ghost" id="monthBtn" style="flex:1">${icon('calendar')}${showMonth ? 'Скрий' : 'Покажи'} календара за ${BG_MONTHS[m - 1]}</button>
    </div>
    <div id="month"></div>
    <div class="card note">${sourceNote(place, r)}</div>
  </div>`;
  $('#placeBtn').onclick = placeSheet;
  $('#dPrev').onclick = () => { pDay--; renderPrayer(); };
  $('#dNext').onclick = () => { pDay++; renderPrayer(); };
  $('#today') && ($('#today').onclick = () => { pDay = 0; renderPrayer(); });
  $('#monthBtn').onclick = () => { showMonth = !showMonth; renderPrayer(); };
  if (showMonth) drawMonth(place, y, m, vm);
  const tick = () => {
    if (!$('#times')) return;
    const np = P.nextPrayer(place, vm);
    const nowMin = P.nowBG().sec / 60;
    $('#bigNext').innerHTML = `<div class="lbl">Следва</div><div class="nm">${P.PRAYERS[np.i].bg} · ${P.PRAYERS[np.i].tr}</div><div class="cd">${countdown(np.secsLeft)}</div><div class="at">в ${P.fmt(np.at)} ч.</div>`;
    const curI = isToday ? r.times.filter(t => t <= nowMin).length - 1 : -1;
    $('#times').innerHTML = P.PRAYERS.map((p, i) => `<div class="trow ${i === curI ? 'now' : i < curI ? 'past' : ''}"><span class="tic">${p.ic}</span><span class="mid"><b>${p.bg}</b><small>${p.tr}</small></span><span class="t">${P.fmt(r.times[i])}</span></div>`).join('');
  };
  tick(); const t = setInterval(tick, 1000); cleanup.push(() => clearInterval(t));
}
function sourceNote(place, r) {
  const src = `<a href="https://www.grandmufti.bg/bg/home/vremena-za-namaz.html" target="_blank" rel="noopener" style="color:var(--accent)">Главно мюфтийство</a>`;
  if (r.official) return `Официални времена за <b>${esc(place.name)}</b> по календара на ${src}.`;
  const town = r.ref.t.name, ex = r.extra;
  if (store.get('villageMode') === 'town' || ex === 0)
    return `Мюфтийството публикува календар за 48 града. За <b>${esc(place.name)}</b> са показани времената на най-близкия град — <b>${esc(town)}</b> (${Math.round(r.ref.km)} км)${ex === 0 && store.get('villageMode') !== 'town' ? '; разликата по географска дължина е под половин минута' : ''}. Източник: ${src}.`;
  return `Мюфтийството публикува календар за 48 града, изчислен като таблицата за София плюс разлика в минути според географската дължина. За <b>${esc(place.name)}</b> е взет най-близкият град — <b>${esc(town)}</b> (${Math.round(r.ref.km)} км) — и са ${ex > 0 ? 'добавени' : 'извадени'} <b>${Math.abs(ex)} мин.</b> по същото правило. Източник: ${src}. В Настройки можете да изберете да се показват точно времената на ${esc(town)}.`;
}
function drawMonth(place, y, m, vm) {
  const n = P.nowBG();
  const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
  let rows = '';
  for (let d = 1; d <= days; d++) {
    const t = P.timesFor(place, y, m, d, vm).times;
    const wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
    rows += `<tr class="${y === n.y && m === n.m && d === n.d ? 'today' : ''} ${wd === 5 ? 'fri' : ''}"><td>${d} ${['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'][wd]}</td>${t.map(v => `<td>${P.fmt(v)}</td>`).join('')}</tr>`;
  }
  $('#month').innerHTML = `<div class="card month-wrap"><table class="month"><thead><tr><th>Ден</th>${P.PRAYERS.map(p => `<th>${p.bg.replace('Следобяд', 'Следоб.')}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>`;
}
async function placeSheet() {
  const b = openSheet(`<h3>Населено място</h3>
    <label class="search" style="box-shadow:none">${icon('search')}<input id="pq" type="search" placeholder="Град или село (напр. Рибново)" autocomplete="off"></label>
    <button class="act wide" id="pLoc" style="width:100%;margin:10px 0 4px">${icon('locate')}Намери ме по местоположение</button>
    <div id="pRes" class="opt-list" style="margin-top:8px"><div class="loader"></div></div>`);
  await P.loadPlaces(); await P.loadPrayer();
  const res = b.querySelector('#pRes');
  const choose = p => { store.set('place', { name: p.name, type: p.type, lat: p.lat, lon: p.lon, obl: p.obl, obs: p.obs }); pDay = 0; closeSheet(); toast(P.placeLabel(p)); if (route.name === 'prayer') renderPrayer(); else render(); };
  const draw = q => {
    const items = q ? P.searchPlaces(q) : P.officialPlaces();
    res.innerHTML = (q ? '' : '<div class="sub">Градове с официален календар — или потърсете село</div>') + (items.map((p, i) => `<button class="opt" data-i="${i}">${icon('pin')}<span class="mid"><b>${esc(P.placeLabel(p))}</b><small>${esc(P.placeSub(p))}</small></span></button>`).join('') || '<div class="empty">Няма такова населено място.</div>');
    res.onclick = e => { const x = e.target.closest('[data-i]'); if (x) choose(items[+x.dataset.i]); };
  };
  b.querySelector('#pq').addEventListener('input', e => draw(e.target.value));
  b.querySelector('#pLoc').onclick = () => { closeSheet(); locate(); };
  draw('');
  if (matchMedia('(min-width: 700px)').matches) b.querySelector('#pq').focus();
}
function locate() {
  if (!navigator.geolocation) { toast('Устройството не поддържа местоположение'); return; }
  toast('Търся местоположението…');
  navigator.geolocation.getCurrentPosition(async pos => {
    await P.loadPlaces(); await P.loadPrayer();
    const { latitude: lat, longitude: lon } = pos.coords;
    const near = P.nearestPlace(lat, lon);
    if (!near || near.km > 30 || lat < 41 || lat > 44.4 || lon < 22.2 || lon > 28.8) { toast('Изглежда сте извън България — изберете място от списъка'); placeSheet(); return; }
    const p = near.p;
    store.set('place', { name: p.name, type: p.type, lat: p.lat, lon: p.lon, obl: p.obl, obs: p.obs });
    toast('Намерено: ' + P.placeLabel(p));
    pDay = 0;
    route.name === 'prayer' ? renderPrayer() : render();
  }, err => toast(err.code === 1 ? 'Няма разрешение за местоположение' : 'Не успях да намеря местоположението'), { enableHighAccuracy: true, timeout: 15000, maximumAge: 300000 });
}

// ---------- настройки ----------
function renderSettings() {
  const sw = (k, on) => `<button class="switch ${on ? 'on' : ''}" data-sw="${k}" role="switch" aria-checked="${on}"></button>`;
  view.innerHTML = `<div class="topbar"><h1>Настройки</h1></div>
  <div class="fade-in">
    <div class="sub">Външен вид</div>
    <div class="card set-group">
      <div class="set-row"><div class="mid"><b>Тема</b></div><div class="seg">${[['auto', 'Авто'], ['light', 'Светла'], ['sepia', 'Сепия'], ['dark', 'Тъмна']].map(([k, t]) => `<button data-theme="${k}" class="${store.get('theme') === k ? 'on' : ''}">${t}</button>`).join('')}</div></div>
      <div class="set-row"><p class="preview-ar" lang="ar">ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ ٢</p><div class="mid"><b>Арабски шрифт</b><small id="arV">${store.get('arSize')} px</small></div><input class="range" id="arR" type="range" min="22" max="64" value="${store.get('arSize')}"></div>
      <div class="set-row"><p class="preview-tr">Хвала на Аллах, Господа на световете,</p><div class="mid"><b>Превод</b><small id="trV">${store.get('trSize')} px</small></div><input class="range" id="trR" type="range" min="13" max="28" value="${store.get('trSize')}"></div>
      <div class="set-row"><div class="mid"><b>Показвай превода</b><small>Превод на Цветан Теофанов</small></div>${sw('showTr', store.get('showTr'))}</div>
    </div>
    <div class="sub">Слушане</div>
    <div class="card set-group">
      <button class="set-row" id="sRec" style="width:100%;text-align:left"><div class="mid"><b>Рецитатор</b><small>${esc(reciterById(store.get('reciter')).name)} · ${esc(reciterById(store.get('reciter')).note)}</small></div>${icon('chev-r')}</button>
      <div class="set-row"><div class="mid"><b>Следи айета, който се чете</b><small>Страницата се превърта сама</small></div>${sw('follow', store.get('follow'))}</div>
      <div class="set-row"><div class="mid"><b>Продължавай със следващата сура</b></div>${sw('autoNext', store.get('autoNext'))}</div>
    </div>
    <div class="sub">Намаз</div>
    <div class="card set-group">
      <button class="set-row" id="sPlace" style="width:100%;text-align:left"><div class="mid"><b>Населено място</b><small>${store.get('place') ? esc(P.placeLabel(store.get('place')) + ' · ' + P.placeSub(store.get('place'))) : 'Не е избрано'}</small></div>${icon('chev-r')}</button>
      <div class="set-row"><div class="mid"><b>Точно време за селото</b><small>Включено: добавя разликата по географска дължина спрямо най-близкия официален град (правилото на Мюфтийството). Изключено: показва времената на самия град.</small></div>${sw('villageMode', store.get('villageMode') === 'corrected')}</div>
    </div>
    <div class="sub">Офлайн</div>
    <div class="card set-group">
      <div class="set-row"><div class="mid"><b>Целият Коран на устройството</b><small id="offS">Проверявам…</small></div><button class="btn ghost" id="offB">${icon('download')}Изтегли</button></div>
    </div>
    <div class="sub">За приложението</div>
    <div class="card about">
      <b>Текст:</b> Мусхаф по рикаят на Хафс от Асим, шрифт KFGQPC Uthmanic Hafs (Комплекс „Крал Фахд“, Медина), чрез <a href="https://quran.com" target="_blank" rel="noopener">Quran.com</a>.<br>
      <b>Превод:</b> Цветан Теофанов — смислов превод на значенията на български.<br>
      <b>Аудио:</b> <a href="https://everyayah.com" target="_blank" rel="noopener">EveryAyah.com</a>.<br>
      <b>Времена за намаз:</b> официалният календар на <a href="https://www.grandmufti.bg/bg/home/vremena-za-namaz.html" target="_blank" rel="noopener">Главно мюфтийство</a>, проверяван автоматично всеки месец.<br>
      <b>Населени места:</b> © участниците в <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> (ODbL).<br><br>
      Преводът предава смисъла и не замества арабския оригинал. Хиджри датата е изчислена (Умм ал-Кура) и може да се различава с ден от обявената от Мюфтийството.
    </div>
  </div>`;
  view.querySelectorAll('[data-theme]').forEach(b => b.onclick = () => { store.set('theme', b.dataset.theme); applyPrefs(); view.querySelectorAll('[data-theme]').forEach(x => x.classList.toggle('on', x === b)); });
  $('#arR').oninput = e => { store.set('arSize', +e.target.value); $('#arV').textContent = e.target.value + ' px'; applyPrefs(); };
  $('#trR').oninput = e => { store.set('trSize', +e.target.value); $('#trV').textContent = e.target.value + ' px'; applyPrefs(); };
  view.querySelectorAll('[data-sw]').forEach(b => b.onclick = () => {
    const k = b.dataset.sw;
    const on = !b.classList.contains('on');
    b.classList.toggle('on', on); b.setAttribute('aria-checked', on);
    if (k === 'villageMode') store.set(k, on ? 'corrected' : 'town');
    else store.set(k, on);
    if (k === 'autoNext') player.autoNext = on;
  });
  $('#sRec').onclick = () => reciterSheet(renderSettings);
  $('#sPlace').onclick = placeSheet;
  offlineStatus();
  $('#offB').onclick = downloadAll;
}
async function offlineStatus() {
  const s = $('#offS'); if (!s) return;
  if (!('caches' in window)) { s.textContent = 'Браузърът не поддържа офлайн режим'; return; }
  const c = await caches.open(DATA_CACHE);
  const keys = await c.keys();
  const have = keys.filter(k => /\/data\/s\/\d+\.json$/.test(k.url)).length;
  s.textContent = have >= 114 ? 'Изтеглен — четенето работи и без интернет (аудиото изисква връзка)' : `Изтеглени ${have} от 114 сури`;
  if (have >= 114) $('#offB').hidden = true;
}
async function downloadAll() {
  const b = $('#offB'); b.disabled = true;
  let done = 0;
  await Promise.all(META.surahs.map(s => loadSurah(s.n).then(() => { done++; if ($('#offS')) $('#offS').textContent = `Изтеглям… ${done}/114`; }).catch(() => {})));
  setTimeout(offlineStatus, 500);
}
const DATA_CACHE = 'qk-data-v1';

// ---------- странична лента: следващ намаз ----------
async function railPrayer() {
  const el = $('#railPrayer');
  if (getComputedStyle($('.rail')).display === 'none') return;
  const place = store.get('place');
  if (!place) { el.innerHTML = ''; return; }
  await P.loadPrayer();
  const np = P.nextPrayer(place, store.get('villageMode'));
  el.innerHTML = `<a class="card" href="#/prayer" style="display:block;padding:14px 16px"><small class="muted" style="font-size:12px">${esc(P.placeLabel(place))}</small><div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:2px"><b style="font:700 19px var(--serif)">${P.PRAYERS[np.i].bg}</b><b style="color:var(--gold);font-variant-numeric:tabular-nums">${P.fmt(np.at)}</b></div><small class="muted" style="font-size:12.5px">след ${countdown(np.secsLeft, true)}</small></a>`;
}
setInterval(railPrayer, 15000);
store.on(k => { if (k === 'place' || k === 'villageMode') railPrayer(); });

// ---------- старт ----------
applyPrefs();
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyPrefs);
render().then(railPrayer);
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
// тихо изтегляне на целия текст за офлайн, когато браузърът е свободен
(window.requestIdleCallback || setTimeout)(() => { if (navigator.connection?.saveData) return; loadMeta().then(() => META.surahs.forEach((s, i) => setTimeout(() => loadSurah(s.n).catch(() => {}), 3000 + i * 60))); }, { timeout: 8000 });
