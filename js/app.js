import { store, isBookmarked, toggleBookmark } from './store.js';
import { Player, RECITERS, reciterById } from './audio.js';
import * as P from './prayer.js';
import * as Q from './qibla.js';
import { runIntro } from './intro.js';

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

// ---------- превод: Цветан Теофанов ----------
// Преводът на всеки айет от сура n: [[{ l, t }], …] (списък — за да може някой ден да се добави и друг език)
async function translations(n) {
  const ayahs = await loadSurah(n);
  return ayahs.map(a => [{ l: 'bg', t: a[1] }]);
}
const trHtml = (list, cls = 'tr-text') => list.map(x => `<p class="${cls}">${esc(x.t)}</p>`).join('');
const trPlain = list => list.map(x => x.t).join('\n\n');
const BISM = 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ';

// ---------- тема и размери ----------
function applyPrefs() {
  const t = store.get('theme');
  if (t === 'auto') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = t;
  document.documentElement.style.setProperty('--ar', store.get('arSize') + 'px');
  document.documentElement.style.setProperty('--trs', store.get('trSize') + 'px');
  // цветът на лентата на браузъра: по избраната тема, а при „Авто“ — първоначалните по системната
  const bg = getComputedStyle(document.body).getPropertyValue('--bg').trim();
  document.querySelectorAll('meta[name=theme-color]').forEach(m => {
    m.dataset.auto ??= m.getAttribute('content');
    m.setAttribute('content', t !== 'auto' && bg ? bg : m.dataset.auto);
  });
}

// ---------- toast и sheet ----------
let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2400);
}
let sheetClose = null, sheetReturn = null;
function openSheet(html, onClose) {
  const sh = $('#sheet'), body = $('#sheetBody');
  body.onclick = null; // обработчикът на предишния лист
  body.innerHTML = html;
  body.scrollTop = 0;
  if (sh.hidden) sheetReturn = document.activeElement; // лист от лист: връщаме се към първоначалния бутон
  sh.hidden = false; $('#scrim').hidden = false;
  sh.setAttribute('aria-label', body.querySelector('h3')?.textContent || '');
  $('.app').inert = true; // фонът не се фокусира и екранните четци го пропускат
  document.body.style.overflow = 'hidden';
  sheetClose = onClose || null;
  sh.focus({ preventScroll: true });
  return body;
}
function closeSheet() {
  if ($('#sheet').hidden) return;
  $('#sheet').hidden = true; $('#scrim').hidden = true; document.body.style.overflow = '';
  $('.app').inert = false;
  const r = sheetReturn; sheetReturn = null;
  if (r && r.isConnected) r.focus({ preventScroll: true });
  const f = sheetClose; sheetClose = null; f && f();
}
$('#scrim').addEventListener('click', closeSheet);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });
// плъзгане надолу затваря листа на телефон (на таблет листът е в средата на екрана)
(() => {
  const sh = $('#sheet'), phone = matchMedia('(max-width: 699px)'); let y0 = null, dy = 0;
  sh.addEventListener('touchstart', e => { if (phone.matches && $('#sheetBody').scrollTop <= 0) { y0 = e.touches[0].clientY; dy = 0; } }, { passive: true });
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
const MODES = { single: 'Само айета', continue: 'Поредно', repeat: 'Повтори', range: 'Откъс' };

function syncPlayer() {
  const c = player.cur;
  $('#player').hidden = !c;
  document.body.classList.toggle('playing', !!c);
  document.querySelectorAll('.cur').forEach(e => e.classList.remove('cur'));
  document.querySelectorAll('[data-act=play].on').forEach(b => { b.classList.remove('on'); b.innerHTML = icon('play'); });
  document.querySelectorAll('.in-range').forEach(e => e.classList.remove('in-range'));
  if (!c) return;
  const R = player.mode === 'range' && player.range;
  if (R && route.name === 'surah' && route.s === R.s) for (let a = R.from; a <= R.to; a++) document.getElementById('a-' + a)?.classList.add('in-range');
  if (route.name === 'surah' && route.s === c.s && player.playing) {
    const b = document.querySelector(`#a-${c.a} [data-act=play]`);
    if (b) { b.classList.add('on'); b.innerHTML = icon('pause'); }
  }
  const m = S(c.s);
  $('#plTitle').textContent = c.bism ? `${m.name} · Бисмиллях` : `${m.name} · айет ${c.a}`;
  // напредъкът при повторение е най-отпред — името на рецитатора е дълго и се отрязва
  const prog = player.mode === 'repeat' ? `Повторение ${player.rep}/${player.repeatN}`
    : R ? (R.each > 1 ? `Повторение ${player.rep}/${R.each} · ` : '') + `Кръг ${player.loop}${R.loops ? '/' + R.loops : ''}` : '';
  $('#plSub').textContent = (prog ? prog + ' · ' : '') + reciterById(player.reciter).name;
  $('#plPlay').innerHTML = icon(player.playing ? 'pause' : 'play') + '<span class="spin"></span>';
  $('#plPlay').classList.toggle('loading', player.loading && player.playing !== false && !player.el.paused);
  $('#plMode').innerHTML = icon('repeat') + (R ? `Откъс ${R.from}–${R.to}` : MODES[player.mode] + (player.mode === 'repeat' ? ` ×${player.repeatN}` : ''));
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
player.addEventListener('end', () => { if (player.mode === 'range') toast('Откъсът е прочетен докрай'); });
// „Следи айета“: когато четенето премине в следващата сура, страницата я отваря —
// само ако читателят гледа сурата, която току-що е свършила
let followS = null;
player.addEventListener('state', () => {
  const c = player.cur;
  if (c && followS && c.s !== followS && store.get('follow') && route.name === 'surah' && route.s === followS) go(`#/s/${c.s}`);
  followS = c ? c.s : null;
});
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
  const R = player.range;
  const b = openSheet(`<h3>Как да се чете</h3>
    <div class="opt-list">
      ${Object.entries({ single: ['Само избрания айет', 'Спира след края на айета'], continue: ['Поредно', 'Продължава айет след айет' + (store.get('autoNext') ? ' и със следващата сура' : '')], repeat: ['Повтаряй айета', 'За заучаване наизуст'],
        range: ['Заучаване на откъс', player.mode === 'range' && R ? `${S(R.s).name} ${R.s}:${R.from}–${R.to}` : 'Няколко айета поред, после отначало'] })
        .map(([k, [t, d]]) => `<button class="opt ${player.mode === k ? 'on' : ''}" data-m="${k}"><span class="mid"><b>${t}</b><small>${d}</small></span>${player.mode === k ? icon('check') : ''}</button>`).join('')}
    </div>
    <div class="sub">Брой повторения</div>
    <div class="seg" id="repN">${[2, 3, 5, 7, 10].map(n => `<button class="${player.repeatN === n ? 'on' : ''}" data-n="${n}">${n}×</button>`).join('')}</div>`);
  b.querySelectorAll('[data-m]').forEach(x => x.onclick = () => {
    if (x.dataset.m === 'range') { hifzSheet(player.cur.s, player.cur.a); return; }
    player.mode = x.dataset.m; store.set('play', player.mode); player.preloadNext(); syncPlayer(); closeSheet(); });
  b.querySelectorAll('[data-n]').forEach(x => x.onclick = () => { player.repeatN = +x.dataset.n; store.set('repeatN', player.repeatN); player.mode = 'repeat'; store.set('play', 'repeat'); syncPlayer(); closeSheet(); });
}
// Заучаване: всеки айет от откъса N пъти, после целият откъс M пъти (или без край)
function hifzSheet(s, a) {
  const cnt = S(s).ayahs;
  const cur = player.range;
  const R = cur && cur.s === s && a >= cur.from && a <= cur.to ? cur : null;
  let { each, loops } = R || store.get('hifz');
  const b = openSheet(`<h3>Заучаване на откъс</h3>
    <p class="sheet-tr">${esc(S(s).name)} · всеки айет се чете няколко пъти, после целият откъс отначало. Повтаряйте след рецитатора.</p>
    <div class="hifz-range">
      <label><small>От айет</small><input class="num-in" id="hFrom" type="number" inputmode="numeric" min="1" max="${cnt}" value="${R ? R.from : a}"></label>
      <span class="dash">—</span>
      <label><small>До айет</small><input class="num-in" id="hTo" type="number" inputmode="numeric" min="1" max="${cnt}" value="${R ? R.to : Math.min(cnt, a + 4)}"></label>
    </div>
    <div class="sub">Всеки айет</div>
    <div class="seg full">${[1, 2, 3, 5, 7, 10].map(n => `<button data-e="${n}" class="${each === n ? 'on' : ''}">${n}×</button>`).join('')}</div>
    <div class="sub">Целият откъс</div>
    <div class="seg full">${[1, 2, 3, 5, 10, 0].map(n => `<button data-l="${n}" class="${loops === n ? 'on' : ''}">${n ? n + '×' : '∞'}</button>`).join('')}</div>
    <p class="hifz-sum" id="hSum"></p>
    <button class="btn" id="hGo" style="width:100%">${icon('play')}Започни</button>`);
  const val = () => {
    let f = Math.max(1, Math.min(cnt, Math.round(+b.querySelector('#hFrom').value) || 1));
    let t = Math.max(1, Math.min(cnt, Math.round(+b.querySelector('#hTo').value) || f));
    return f <= t ? [f, t] : [t, f];
  };
  const sum = () => {
    const [f, t] = val(), n = t - f + 1;
    b.querySelector('#hSum').textContent = `${s}:${f}–${t} · ${plural(n, 'айет', 'айета')} · ` + (loops ? `общо ${plural(n * each * loops, 'прочит', 'прочита')}` : 'без край, докато спрете');
  };
  const pick = (attr, set) => b.querySelectorAll(`[${attr}]`).forEach(x => x.onclick = () => { set(+x.getAttribute(attr)); b.querySelectorAll(`[${attr}]`).forEach(y => y.classList.toggle('on', y === x)); sum(); });
  pick('data-e', v => each = v);
  pick('data-l', v => loops = v);
  b.querySelectorAll('.num-in').forEach(i => i.addEventListener('input', sum));
  b.querySelector('#hGo').onclick = () => {
    const [f, t] = val();
    store.set('hifz', { each, loops });
    closeSheet();
    player.playRange(s, f, t, each, loops);
    if (route.name !== 'surah' || route.s !== s) go(`#/s/${s}/${f}`);
  };
  sum();
}
function reciterSheet(after) {
  const b = openSheet(`<h3>Рецитатор</h3><div class="opt-list">${RECITERS.map(r => `<button class="opt ${r.id === player.reciter ? 'on' : ''}" data-r="${r.id}">${icon('mic')}<span class="mid"><b>${esc(r.name)}</b><small>${esc(r.note)}</small></span>${r.id === player.reciter ? icon('check') : ''}</button>`).join('')}</div>`);
  b.querySelectorAll('[data-r]').forEach(x => x.onclick = () => { player.setReciter(x.dataset.r); store.set('reciter', x.dataset.r); syncPlayer(); closeSheet(); toast(reciterById(x.dataset.r).name); after && after(); });
  b.querySelector('.opt.on')?.scrollIntoView({ block: 'center' });
}

// ---------- рутер ----------
let route = { name: 'home' };
const firstRoute = route; // преди първото рисуване
function parse() {
  const h = location.hash.replace(/^#\/?/, '').split('/');
  const s = +h[1];
  if (h[0] === 's' && Number.isInteger(s) && s >= 1 && s <= 114) return { name: 'surah', s, a: Math.max(0, Math.floor(+h[2]) || 0) };
  if (['prayer', 'qibla', 'bookmarks', 'settings', 'search'].includes(h[0])) {
    let q = h.slice(1).join('/');
    try { q = decodeURIComponent(q); } catch (e) {} // счупен адрес (напр. „100%“) — оставяме го както е
    return { name: h[0], q };
  }
  return { name: 'home' };
}
function go(h) { if (location.hash === h) render(); else location.hash = h; }
window.addEventListener('hashchange', render);

let cleanup = [];
async function render() {
  const prev = route;
  route = parse();
  closeSheet();
  // същата сура, друг айет — само превъртаме (обработчиците и наблюдателят остават)
  if (route.name === 'surah' && prev.name === 'surah' && prev.s === route.s && route.a) { prev.a = route.a; route = prev; jumpTo(route.a); return; }
  cleanup.forEach(f => f()); cleanup = [];
  document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === ({ surah: 'home', search: 'home', qibla: 'prayer' }[route.name] || route.name)));
  const mine = route;
  await loadMeta();
  if (route !== mine) return; // адресът се смени, докато чакахме — по-новото прерисуване печели
  const r = { home: renderHome, surah: renderSurah, prayer: renderPrayer, qibla: renderQibla, bookmarks: renderBookmarks, settings: renderSettings, search: renderSearch }[route.name];
  await r();
  if (route !== mine) return;
  if (route.name !== 'surah') window.scrollTo(0, 0);
  const title = route.name === 'surah' ? S(route.s).name : { prayer: 'Времена за намаз', qibla: 'Кибла', bookmarks: 'Отметки', settings: 'Настройки', search: 'Търсене' }[route.name];
  document.title = (title ? title + ' · ' : '') + 'Куран-и Керим';
  // екранните четци започват от новото съдържание, а не от изчезналия бутон
  // (само ако фокусът е изчезнал или е бил в навигацията — не и от плейъра при автоматична смяна на сурата)
  const ae = document.activeElement;
  if (prev !== firstRoute && $('#sheet').hidden && (!ae || ae === document.body || ae.closest('.rail, .tabbar'))) view.focus({ preventScroll: true });
  syncPlayer();
  stickyBar();
}
const stickyBar = () => $('.topbar')?.classList.toggle('stuck', window.scrollY > 8);
window.addEventListener('scroll', stickyBar, { passive: true });

const loadFail = () => `<div class="empty">Не успях да заредя текста. Проверете връзката и опитайте отново.<br><br><button class="btn" onclick="location.reload()">Опитай пак</button></div>`;

// ---------- начало ----------
function heroDate(now = new Date()) {
  return `<b>${now.getDate()} ${BG_MONTHS[now.getMonth()]}</b>${BG_DAYS[now.getDay()]}<br><span style="color:var(--gold-ink)">${P.hijri(now)}</span>`;
}
let homeTab = 'surah';
async function renderHome() {
  const now = new Date();
  const last = store.get('last');
  view.innerHTML = `<div class="fade-in">
    <header class="hero">
      <div class="hero-head">
        <h1 class="hero-title">Куран-и Керим<span>القرآن الكريم</span></h1>
        <div class="hero-date">${heroDate()}</div>
      </div>
      <a class="next-card" href="#/prayer" id="nextCard"><div class="lbl">${icon('clock')} Времена за намаз</div><div class="row"><span class="nm">Изберете населено място</span></div><div class="cd">Всеки град и село в България</div></a>
      ${last ? `<a class="card continue" href="#/s/${last.s}/${last.a}"><span class="ic-wrap">${icon('book')}</span><div><small>Продължете четенето</small><b>${esc(S(last.s).name)}</b> <span class="muted">· айет ${last.a}</span></div>${icon('chev-r')}</a>` : ''}
      <label class="search">${icon('search')}<input id="q" type="search" placeholder="Сура, 2:255 или дума…" autocomplete="off" enterkeyhint="search"></label>
    </header>
    <div class="list-head">
      <h2 id="listTitle">Сури</h2>
      <div class="seg"><button data-t="surah" class="${homeTab === 'surah' ? 'on' : ''}" aria-pressed="${homeTab === 'surah'}">Сури</button><button data-t="juz" class="${homeTab === 'juz' ? 'on' : ''}" aria-pressed="${homeTab === 'juz'}">Джузове</button></div>
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
  const setTab = t => { homeTab = t; view.querySelectorAll('[data-t]').forEach(x => { x.classList.toggle('on', x.dataset.t === t); x.setAttribute('aria-pressed', x.dataset.t === t); }); };
  view.querySelectorAll('[data-t]').forEach(b => b.onclick = () => { setTab(b.dataset.t); draw(); });
  $('#q').addEventListener('input', e => { if (homeTab !== 'surah') setTab('surah'); drawSurahs(e.target.value); });
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
  let key = '';
  const tick = () => {
    const card = $('#nextCard'); if (!card) return;
    const np = P.nextPrayer(place, store.get('villageMode'));
    const k = np.i + '|' + np.day.join();
    if (k !== key) { // картата е линк — сменяме я цялата само при ново време (виж railPrayer)
      key = k;
      card.innerHTML = `<div class="lbl">${icon('pin')} ${esc(P.placeLabel(place))}</div>
      <div class="row"><span class="nm">${P.PRAYERS[np.i].bg} <small style="font:500 14px var(--ui);opacity:.75">${P.PRAYERS[np.i].tr}</small></span><span class="tm">${P.fmt(np.at)}</span></div>
      <div class="cd"></div>
      <div class="mini">${P.PRAYERS.map((p, i) => `<div class="${i === np.i ? 'now' : ''}">${p.bg}<b>${P.fmt(np.day[i])}</b></div>`).join('')}</div>`;
    }
    card.querySelector('.cd').textContent = 'след ' + countdown(np.secsLeft, true);
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
  let ayahs, trs;
  try { ayahs = await loadSurah(n); trs = await translations(n); } catch (e) { if (route.name === 'surah' && route.s === n) view.querySelector('.loader').outerHTML = loadFail(); return; }
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
      ${trHtml(trs[i])}</article>`).join('')}</div>`;
  }
  const prev = n > 1 ? S(n - 1) : null, next = n < 114 ? S(n + 1) : null;
  const nav = `<nav class="surah-nav" aria-label="Съседни сури">${prev ? `<a class="card" href="#/s/${n - 1}"><small>← Предишна</small><b>${esc(prev.name)}</b></a>` : '<span></span>'}${next ? `<a class="card" href="#/s/${n + 1}"><small>Следваща →</small><b>${esc(next.name)}</b></a>` : '<span></span>'}</nav>`;
  view.querySelector('.loader').outerHTML = head + body + nav;

  view.querySelector('.surah-play').onclick = () => {
    if (player.cur && player.cur.s === n && !player.done) { player.toggle(); return; }
    player.play(n, 1, 'continue'); store.set('play', 'continue');
  };
  $('#recBtn').onclick = () => reciterSheet(() => { $('#recBtn span').textContent = reciterById(player.reciter).name; });
  $('#tSize').onclick = sizeSheet;
  $('#tView').onclick = viewSheet;
  view.addEventListener('click', ayahClick);
  cleanup.push(() => view.removeEventListener('click', ayahClick));

  // запомняме докъде е стигнал читателят
  const vis = new Set(); // айетите в горната част на екрана в момента
  const io = new IntersectionObserver(es => {
    es.forEach(e => e.isIntersecting ? vis.add(+e.target.dataset.a) : vis.delete(+e.target.dataset.a));
    if (vis.size) { const a = Math.min(...vis); clearTimeout(saveT); saveT = setTimeout(() => store.set('last', { s: n, a }), 600); }
  }, { rootMargin: `-${topPad() + 1}px 0px -55% 0px` }); // същото отстъпване като при скок към айет
  view.querySelectorAll('[data-a]').forEach(e => io.observe(e));
  cleanup.push(() => io.disconnect());

  if (route.a) requestAnimationFrame(() => jumpTo(route.a, true));
  else window.scrollTo(0, 0);
}
let saveT;
const topPad = () => Math.round(parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)) || 84;
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
  const ay = (await loadSurah(s))[a - 1], tl = (await translations(s))[a - 1];
  const bm = isBookmarked(s, a);
  const b = openSheet(`<h3>${esc(S(s).name)} ${s}:${a}</h3>
    <p class="sheet-ar" lang="ar">${ay[0]}</p>
    ${trHtml(tl, 'sheet-tr')}
    <div class="acts-grid">
      <button class="act" data-x="one">${icon('play')}Чети само този</button>
      <button class="act" data-x="from">${icon('next')}Чети от тук нататък</button>
      <button class="act" data-x="rep">${icon('repeat')}Повтаряй ×${player.repeatN}</button>
      <button class="act" data-x="bm">${icon(bm ? 'bookmark-fill' : 'bookmark')}${bm ? 'Махни отметката' : 'Отметка'}</button>
      <button class="act" data-x="copy">${icon('copy')}Копирай</button>
      <button class="act" data-x="share">${icon('share')}Сподели</button>
      <button class="act wide" data-x="hifz">${icon('star')}Заучаване на откъс от тук…</button>
      <button class="act wide" data-x="rec">${icon('mic')}Рецитатор: ${esc(reciterById(player.reciter).name)}</button>
    </div>`);
  b.onclick = async e => {
    const x = e.target.closest('[data-x]')?.dataset.x; if (!x) return;
    const text = `${ay[0]}\n\n${trPlain(tl)}\n\n— Коран, ${S(s).name} ${s}:${a}`;
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
    } else if (x === 'hifz') hifzSheet(s, a);
    else if (x === 'rec') reciterSheet();
  };
}
function sizeSheet() {
  const b = openSheet(`<h3>Размер на текста</h3>
    <p class="preview-ar" lang="ar">${BISM}</p>
    <div class="set-row" style="padding:10px 0"><div class="mid"><b>Арабски текст</b><small id="arV">${store.get('arSize')} px</small></div><input class="range" id="arR" type="range" min="22" max="64" step="1" value="${store.get('arSize')}" aria-label="Размер на арабския текст"></div>
    <p class="preview-tr">В името на Аллах, Всемилостивия, Милосърдния!</p>
    <div class="set-row" style="padding:10px 0;border:0"><div class="mid"><b>Превод</b><small id="trV">${store.get('trSize')} px</small></div><input class="range" id="trR" type="range" min="13" max="28" step="1" value="${store.get('trSize')}" aria-label="Размер на превода"></div>`);
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
  const apply = () => {
    const keep = store.get('last');
    closeSheet();
    route = { name: 'x' };
    if (keep && keep.s === parse().s) history.replaceState(null, '', `#/s/${keep.s}/${keep.a}`);
    render();
  };
  b.querySelectorAll('[data-v]').forEach(x => x.onclick = () => {
    const v = x.dataset.v;
    store.set('mode', v === 'mushaf' ? 'mushaf' : 'ayah');
    if (v !== 'mushaf') store.set('showTr', v === 'ayah-tr');
    apply();
  });
}

// ---------- търсене в превода ----------
async function renderSearch() {
  const q = route.q;
  view.innerHTML = `<div class="topbar"><button class="ib" onclick="history.back()" aria-label="Назад">${icon('chev-l')}</button><h1>Търсене<small>„${esc(q)}“</small></h1></div><div class="loader"></div>`;
  let all;
  try { all = await Promise.all(META.surahs.map(s => translations(s.n))); }
  catch (e) { if (route.name === 'search') view.querySelector('.loader').outerHTML = loadFail(); return; }
  if (route.name !== 'search') return;
  const res = []; // [сура, айет, [съвпаднали преводи]]
  all.forEach((ays, i) => ays.forEach((list, j) => { const hit = list.filter(x => fold(x.t).includes(fold(q))); if (hit.length) res.push([i + 1, j + 1, hit]); }));
  view.querySelector('.loader').outerHTML = `<p class="muted" style="margin:14px 2px">${plural(res.length, 'резултат', 'резултата')}${res.length > 300 ? ' (показани първите 300)' : ''}</p>` +
    (res.slice(0, 300).map(([s, a, hit]) => `<a class="card res-item" href="#/s/${s}/${a}"><span class="ayah-key">${esc(S(s).name)} ${s}:${a}</span>${hit.map(x => `<p>${mark(x.t, q)}</p>`).join('')}</a>`).join('') || `<div class="empty">Няма намерени айети.</div>`);
}
// Сравнение без значение от главни/малки букви
const fold = s => s.toLowerCase().replace(/ё/g, 'е');
function mark(text, q) {
  const T = fold(text), Q = fold(q);
  if (!Q || T.length !== text.length) return esc(text); // позициите съвпадат само при еднаква дължина
  let out = '', i = 0, k;
  while ((k = T.indexOf(Q, i)) !== -1) { out += esc(text.slice(i, k)) + '<mark>' + esc(text.slice(k, k + Q.length)) + '</mark>'; i = k + Q.length; }
  return out + esc(text.slice(i));
}

// ---------- отметки ----------
async function renderBookmarks() {
  const bms = store.get('bookmarks');
  view.innerHTML = `<div class="topbar"><h1>Отметки</h1></div><div id="bmList"><div class="loader"></div></div>`;
  if (!bms.length) { $('#bmList').innerHTML = `<div class="empty">${icon('bookmark')}<p>Още нямате отметки.<br>Докоснете знака за отметка до айет.</p></div>`; return; }
  let items;
  try { items = await Promise.all(bms.map(async b => ({ ...b, ay: (await loadSurah(b.s))[b.a - 1], tl: (await translations(b.s))[b.a - 1] }))); }
  catch (e) { if ($('#bmList')) $('#bmList').innerHTML = loadFail(); return; }
  if (route.name !== 'bookmarks') return;
  $('#bmList').innerHTML = items.map(b => `<div class="card bm-item fade-in"><div class="top"><a class="ayah-key" href="#/s/${b.s}/${b.a}">${esc(S(b.s).name)} ${b.s}:${b.a}</a>
      <span><button class="ib" data-p="${b.s}:${b.a}" aria-label="Слушай">${icon('play')}</button><button class="ib" data-r="${b.s}:${b.a}" aria-label="Премахни">${icon('x')}</button></span></div>
      <a href="#/s/${b.s}/${b.a}"><p class="ar-text" lang="ar">${b.ay[0]}</p>${trHtml(b.tl)}</a></div>`).join('');
  $('#bmList').onclick = e => {
    const p = e.target.closest('[data-p]'), r = e.target.closest('[data-r]');
    if (p) { const [s, a] = p.dataset.p.split(':').map(Number); player.play(s, a, 'single'); }
    if (r) { const [s, a] = r.dataset.r.split(':').map(Number); toggleBookmark(s, a); renderBookmarks(); }
  };
}

// ---------- намаз ----------
let pDay = 0, showMonth = false;
let prayerTimer = 0, prayerSeq = 0;
async function renderPrayer() {
  clearInterval(prayerTimer); // renderPrayer се вика и директно (ден напред/назад, смяна на място)
  const seq = ++prayerSeq, stale = () => seq !== prayerSeq || route.name !== 'prayer';
  view.innerHTML = `<div class="topbar"><h1>Времена за намаз</h1><a class="ib" href="#/qibla" aria-label="Кибла">${icon('compass')}</a><button class="ib" id="locBtn" aria-label="Намери ме">${icon('locate')}</button></div><div class="loader"></div>`;
  await P.loadPrayer();
  if (stale()) return;
  $('#locBtn').onclick = locate;
  if (route.q) { // връзка за споделяне: #/prayer/Рибново — само при точно едно съвпадение
    const q = route.q;
    history.replaceState(null, '', '#/prayer'); route.q = '';
    let exact = [];
    try { await P.loadPlaces(); exact = P.exactPlaces(q); } catch (e) {} // без интернет → изборът по-долу казва това
    if (stale()) return;
    const towns = exact.filter(p => p.type === 0);
    const pick = exact.length === 1 ? exact[0] : towns.length === 1 ? towns[0] : null; // град и село със същото име → градът
    if (pick) store.set('place', P.placeRecord(pick));
    else if (q.trim()) { renderPrayer().then(() => placeSheet(q)); return; }
  }
  const place = store.get('place');
  if (!place) { askPlace('Времената се изчисляват по официалния календар на Главно мюфтийство за всеки град и село в България.'); return; }
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
    <a class="card continue q-link" href="#/qibla"><span class="ic-wrap">${icon('compass')}</span><div><small>Посока на киблата</small><b>${degFmt(Q.qibla(place).bearing)}</b> <span class="muted">· ${Q.dirName(Q.qibla(place).bearing)}</span></div>${icon('chev-r')}</a>
    <div class="card note">${sourceNote(place, r)}</div>
  </div>`;
  $('#placeBtn').onclick = placeSheet;
  setTimeout(() => P.loadPlaces().catch(() => {}), 2500); // за смяна на мястото и без интернет по-късно
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
  tick(); prayerTimer = setInterval(tick, 1000); cleanup.push(() => clearInterval(prayerTimer));
  stickyBar();
}
function askPlace(text) {
  view.querySelector('.loader').outerHTML = `<div class="card empty fade-in" style="margin-top:10px">${icon('pin')}<h3 style="font:700 22px var(--serif);color:var(--text);margin:6px 0">Къде се намирате?</h3>
    <p>${text}</p>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px"><button class="btn" id="gl">${icon('locate')}Намери ме</button><button class="btn ghost" id="pick">${icon('search')}Избери от списъка</button></div></div>`;
  $('#gl').onclick = locate; $('#pick').onclick = placeSheet;
}
function sourceNote(place, r) {
  const src = `<a href="https://www.grandmufti.bg/bg/home/vremena-za-namaz.html" target="_blank" rel="noopener">Главно мюфтийство</a>`;
  return sourceText(place, r, src) + (P.checkedOn() ? ` Календарът е сверен с Мюфтийството на ${P.checkedOn()}` : '');
}
function sourceText(place, r, src) {
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
async function placeSheet(q0 = '') {
  const b = openSheet(`<h3>Населено място</h3>
    <label class="search" style="box-shadow:none">${icon('search')}<input id="pq" type="search" placeholder="Град или село (напр. Рибново)" autocomplete="off" aria-label="Търсене на населено място" value="${esc(typeof q0 === 'string' ? q0 : '')}"></label>
    <button class="act wide" id="pLoc" style="width:100%;margin:10px 0 4px">${icon('locate')}Намери ме по местоположение</button>
    <div id="pRes" class="opt-list" style="margin-top:8px"><div class="loader"></div></div>`);
  const res = b.querySelector('#pRes');
  try { await P.loadPlaces(); await P.loadPrayer(); }
  catch (e) { res.innerHTML = '<div class="empty">Няма връзка с интернет. Списъкът с населени места ще се изтегли, когато се свържете.</div>'; return; }
  if (!res.isConnected || $('#sheet').hidden) return; // листът е затворен или сменен, докато се зареждаше
  const choose = p => { store.set('place', P.placeRecord(p)); pDay = 0; closeSheet(); toast(P.placeLabel(p)); if (route.name === 'prayer') renderPrayer(); else render(); };
  const draw = q => {
    const items = q ? P.searchPlaces(q) : P.officialPlaces();
    res.innerHTML = (q ? '' : '<div class="sub">Градове с официален календар — или потърсете село</div>') + (items.map((p, i) => `<button class="opt" data-i="${i}">${icon('pin')}<span class="mid"><b>${esc(P.placeLabel(p))}</b><small>${esc(P.placeSub(p))}</small></span></button>`).join('') || '<div class="empty">Няма такова населено място.</div>');
    res.onclick = e => { const x = e.target.closest('[data-i]'); if (x) choose(items[+x.dataset.i]); };
  };
  b.querySelector('#pq').addEventListener('input', e => draw(e.target.value));
  b.querySelector('#pLoc').onclick = () => { closeSheet(); locate(); };
  draw(b.querySelector('#pq').value);
  if (matchMedia('(min-width: 700px)').matches) b.querySelector('#pq').focus();
}
function locate() {
  if (!navigator.geolocation) { toast('Устройството не поддържа местоположение'); return; }
  toast('Търся местоположението…');
  navigator.geolocation.getCurrentPosition(async pos => {
    try { await P.loadPlaces(); await P.loadPrayer(); } catch (e) { toast('Няма връзка с интернет'); return; }
    const { latitude: lat, longitude: lon } = pos.coords;
    const near = P.nearestPlace(lat, lon);
    if (!near || near.km > 30 || lat < 41 || lat > 44.4 || lon < 22.2 || lon > 28.8) { toast('Изглежда сте извън България — изберете място от списъка'); placeSheet(); return; }
    const p = near.p;
    store.set('place', P.placeRecord(p));
    toast('Намерено: ' + P.placeLabel(p));
    pDay = 0;
    route.name === 'prayer' ? renderPrayer() : render();
  }, err => toast(err.code === 1 ? 'Няма разрешение за местоположение' : 'Не успях да намеря местоположението'), { enableHighAccuracy: true, timeout: 15000, maximumAge: 300000 });
}

// ---------- кибла ----------
const degFmt = b => b.toFixed(1).replace('.', ',') + '°';
async function renderQibla() {
  view.innerHTML = `<div class="topbar"><button class="ib" onclick="history.length>1?history.back():location.hash='#/prayer'" aria-label="Назад">${icon('chev-l')}</button><h1>Кибла<small>посока към Кябе</small></h1></div><div class="loader"></div>`;
  const place = store.get('place');
  if (!place) { askPlace('Посоката на киблата се изчислява за избраното населено място.'); return; }
  const { bearing, km } = Q.qibla(place);
  const decl = Q.declination(place);
  const n = P.nowBG();
  const sunUtc = Q.sunInQibla(place, n.y, n.m, n.d, bearing);
  const sunAt = sunUtc == null ? null : sunUtc + P.sofiaOffset(n.y, n.m, n.d);
  const touch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
  const ask = Q.needsPermission(); // iPhone пита за разрешение след докосване
  const face = `Застанете с лице на ${Q.dirName(bearing)} — ${degFmt(bearing)} от севера по часовниковата стрелка.`;
  view.querySelector('.loader').outerHTML = `<div class="fade-in">
    <button class="card place-bar" id="placeBtn" style="width:100%;text-align:left"><span class="ic-wrap">${icon('pin')}</span><span class="mid"><b>${esc(P.placeLabel(place))}</b><small>${esc(P.placeSub(place))}</small></span><span class="chip">Промени</span></button>
    <div class="card qibla-card" id="qCard">
      <div class="compass"><svg class="dial" id="dial" viewBox="0 0 300 300" aria-hidden="true">${dialSvg(bearing)}</svg><span class="needle"></span>
        <div class="q-center"><b>${degFmt(bearing)}</b><small>${Q.dirName(bearing)}</small></div></div>
      <p class="q-status" id="qStatus">${ask ? 'Включете компаса и завъртете телефона, докато Кябе застане под стрелката.' : touch ? 'Търся компаса…' : face}</p>
      ${ask ? `<button class="btn" id="qStart">${icon('compass')}Включи компаса</button>` : ''}
    </div>
    <div class="card times">
      <div class="trow"><span class="tic">◈</span><span class="mid"><b>Посока</b><small>от географския север, по часовниковата стрелка</small></span><span class="t">${degFmt(bearing)}</span></div>
      <div class="trow"><span class="tic">☀</span><span class="mid"><b>Слънцето сочи киблата</b><small>${sunAt == null ? 'днес не е над хоризонта в тази посока' : 'днес — застанете с лице към слънцето, сянката сочи обратно'}</small></span><span class="t">${sunAt == null ? '—' : P.fmt(sunAt)}</span></div>
      <div class="trow"><span class="tic">✈</span><span class="mid"><b>До Мека</b><small>по най-краткия път</small></span><span class="t">${Math.round(km).toLocaleString('bg-BG')} км</span></div>
    </div>
    <div class="card note">Посоката е изчислена по голям кръг (най-краткия път по земното кълбо) от <b>${esc(P.placeLabel(place))}</b> до Кябе в Мека. Компасът на телефона сочи магнитния север, затова е добавено магнитното отклонение за България (≈${decl.toFixed(1).replace('.', ',')}° на изток).<br><br>Дръжте телефона хоризонтално, далеч от метални предмети и магнити. Ако стрелката се държи странно, опишете няколко пъти осмица във въздуха с телефона — така компасът се калибрира.</div>
  </div>`;
  $('#placeBtn').onclick = placeSheet;

  // Компас: на телефон стрелката се върти; без сензор остава картата с посоката
  const card = $('#qCard'), dial = $('#dial'), st = $('#qStatus');
  let shown = null, aligned = false, got = false;
  const onHeading = mag => {
    got = true;
    const h = (mag + decl + 360) % 360; // накъде сочи телефонът спрямо географския север
    // плавно въртене, без скок при преминаване през 0°/360°
    shown = shown == null ? h : shown + (((h - shown) % 360 + 540) % 360 - 180) * 0.3;
    dial.style.transform = `rotate(${-shown}deg)`;
    const off = ((bearing - h) % 360 + 540) % 360 - 180; // + надясно, − наляво
    const now = Math.abs(off) < 4;
    if (now !== aligned) { aligned = now; card.classList.toggle('aligned', now); if (now) navigator.vibrate?.(40); }
    st.textContent = now ? '✓ Вие сте с лице към киблата' : `Завъртете се ${off > 0 ? 'надясно' : 'наляво'} с ${Math.round(Math.abs(off))}°`;
  };
  const start = async () => {
    const mine = route;
    if (ask && !(await Q.askPermission())) { st.textContent = 'Няма разрешение за компаса. Разрешете „Движение и ориентация“ в настройките на браузъра.'; return; }
    if (route !== mine) return; // напуснал е екрана, докато iPhone питаше
    $('#qStart')?.remove();
    if (touch) st.textContent = 'Търся компаса…';
    cleanup.push(Q.watchHeading(onHeading));
    const t = setTimeout(() => { if (!got && touch) st.textContent = 'Това устройство не дава посока от компас. ' + face; }, 3000);
    cleanup.push(() => clearTimeout(t));
  };
  if (ask) $('#qStart').onclick = start;
  else start(); // Android и компютри не питат — слушаме веднага
}
function dialSvg(bearing) {
  let s = '<circle class="face" cx="150" cy="150" r="146"/>';
  for (let d = 0; d < 360; d += 5) s += `<line class="${d % 30 ? '' : 'mj'}" x1="150" y1="10" x2="150" y2="${d % 30 ? 18 : 26}" transform="rotate(${d} 150 150)"/>`;
  for (let d = 30; d < 360; d += 30) if (d % 90) s += `<text class="deg" x="150" y="40" transform="rotate(${d} 150 150)">${d}</text>`;
  s += [['С', 0], ['И', 90], ['Ю', 180], ['З', 270]].map(([t, d]) => `<text class="${d ? 'cd' : 'cd n'}" x="150" y="44" transform="rotate(${d} 150 150)">${t}</text>`).join('');
  // Кябе в посоката на киблата
  s += `<g transform="rotate(${bearing} 150 150)"><line class="ql" x1="150" y1="98" x2="150" y2="84"/>
    <g class="kaaba" transform="translate(150 72)"><rect x="-10" y="-10" width="20" height="20" rx="2.5"/><rect class="band" x="-10" y="-5.5" width="20" height="3.2"/></g></g>`;
  return s + '<circle class="hub" cx="150" cy="150" r="54"/>';
}

// ---------- настройки ----------
function renderSettings() {
  const sw = (k, on, label) => `<button class="switch ${on ? 'on' : ''}" data-sw="${k}" role="switch" aria-checked="${on}" aria-label="${label}"></button>`;
  view.innerHTML = `<div class="topbar"><h1>Настройки</h1></div>
  <div class="fade-in">
    <div class="sub">Външен вид</div>
    <div class="card set-group">
      <div class="set-row"><div class="mid"><b>Тема</b></div><div class="seg theme-seg">${[['auto', 'Авто'], ['light', 'Светла'], ['sepia', 'Сепия'], ['dark', 'Тъмна']].map(([k, t]) => `<button data-theme="${k}" class="${store.get('theme') === k ? 'on' : ''}" aria-pressed="${store.get('theme') === k}">${t}</button>`).join('')}</div></div>
      <div class="set-row"><p class="preview-ar" lang="ar">ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ ٢</p><div class="mid"><b>Арабски шрифт</b><small id="arV">${store.get('arSize')} px</small></div><input class="range" id="arR" type="range" min="22" max="64" value="${store.get('arSize')}" aria-label="Размер на арабския текст"></div>
      <div class="set-row"><p class="preview-tr">Хвала на Аллах, Господа на световете,</p><div class="mid"><b>Превод</b><small id="trV">${store.get('trSize')} px</small></div><input class="range" id="trR" type="range" min="13" max="28" value="${store.get('trSize')}" aria-label="Размер на превода"></div>
      <div class="set-row"><div class="mid"><b>Показвай превода</b><small>Под всеки айет в изгледа „айет по айет“</small></div>${sw('showTr', store.get('showTr'), 'Показвай превода')}</div>
      <div class="set-row"><div class="mid"><b>Златният мусхаф при отваряне</b><small>Начален екран: „Бисмиллях“ отваря мусхафа. <a href="#/" id="introNow">Покажи сега</a></small></div>${sw('intro', store.get('intro'), 'Златният мусхаф при отваряне')}</div>
    </div>
    <div class="sub">Слушане</div>
    <div class="card set-group">
      <button class="set-row" id="sRec" style="width:100%;text-align:left"><div class="mid"><b>Рецитатор</b><small>${esc(reciterById(store.get('reciter')).name)} · ${esc(reciterById(store.get('reciter')).note)}</small></div>${icon('chev-r')}</button>
      <div class="set-row"><div class="mid"><b>Следи айета, който се чете</b><small>Страницата се превърта сама</small></div>${sw('follow', store.get('follow'), 'Следи айета, който се чете')}</div>
      <div class="set-row"><div class="mid"><b>Продължавай със следващата сура</b></div>${sw('autoNext', store.get('autoNext'), 'Продължавай със следващата сура')}</div>
    </div>
    <div class="sub">Намаз</div>
    <div class="card set-group">
      <button class="set-row" id="sPlace" style="width:100%;text-align:left"><div class="mid"><b>Населено място</b><small>${store.get('place') ? esc(P.placeLabel(store.get('place')) + ' · ' + P.placeSub(store.get('place'))) : 'Не е избрано'}</small></div>${icon('chev-r')}</button>
      <div class="set-row"><div class="mid"><b>Точно време за селото</b><small>Включено: добавя разликата по географска дължина спрямо най-близкия официален град (правилото на Мюфтийството). Изключено: показва времената на самия град.</small></div>${sw('villageMode', store.get('villageMode') === 'corrected', 'Точно време за селото')}</div>
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
  view.querySelectorAll('[data-theme]').forEach(b => b.onclick = () => { store.set('theme', b.dataset.theme); applyPrefs(); view.querySelectorAll('[data-theme]').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); }); });
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
  $('#introNow').onclick = e => { e.preventDefault(); history.replaceState(null, '', '#/'); sessionStorage.qkIntro = 1; location.reload(); };
  $('#sRec').onclick = () => reciterSheet(renderSettings);
  $('#sPlace').onclick = placeSheet;
  offlineStatus();
  $('#offB').onclick = downloadAll;
}
async function offlineStatus() {
  const s = $('#offS'); if (!s) return;
  if (!('caches' in window)) { s.textContent = 'Браузърът не поддържа офлайн режим'; return; }
  const name = (await caches.keys()).find(k => k.startsWith('qk-data'));
  const keys = name ? await (await caches.open(name)).keys() : [];
  if (!s.isConnected) return; // напуснал е Настройки
  const have = keys.filter(k => /\/data\/s\/\d+\.json$/.test(k.url)).length;
  const full = have >= 114;
  s.textContent = full ? 'Изтеглен — четенето работи и без интернет (аудиото изисква връзка)' : `Изтеглени ${have} от 114 сури`;
  $('#offB').hidden = full; $('#offB').disabled = false;
}
async function downloadAll() {
  const b = $('#offB'); b.disabled = true;
  const c = await caches.open((await caches.keys()).find(k => k.startsWith('qk-data')) || 'qk-data-v1');
  const have = new Set((await c.keys()).map(r => new URL(r.url).pathname.replace(/^.*\/data\//, 'data/')));
  const urls = META.surahs.map(s => `data/s/${s.n}.json`).filter(u => !have.has(u));
  let done = 0;
  await Promise.all(urls.map(u => c.add(u).then(() => { done++; if ($('#offS')) $('#offS').textContent = `Изтеглям… ${Math.round(done / urls.length * 100)}%`; }).catch(() => {})));
  setTimeout(offlineStatus, 300);
}

// ---------- странична лента: следващ намаз ----------
// Линкът се строи наново само когато се смени времето; всяка секунда се сменя само текстът
// на обратното броене — иначе кликът и фокусът се губят, ако попаднат между две секунди.
let railKey = '';
async function railPrayer() {
  const el = $('#railPrayer');
  if (getComputedStyle($('.rail')).display === 'none') return;
  const place = store.get('place');
  if (!place) { el.innerHTML = ''; railKey = ''; return; }
  await P.loadPrayer();
  const np = P.nextPrayer(place, store.get('villageMode'));
  const key = JSON.stringify(place) + np.i + '|' + np.at;
  if (key !== railKey || !el.querySelector('.rp-cd')) {
    railKey = key;
    el.innerHTML = `<a class="card" href="#/prayer" style="display:block;padding:14px 16px"><small class="muted" style="font-size:12px">${esc(P.placeLabel(place))}</small><div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:2px"><b style="font:700 19px var(--serif)">${P.PRAYERS[np.i].bg}</b><b style="color:var(--gold-ink);font-variant-numeric:tabular-nums">${P.fmt(np.at)}</b></div><small class="muted rp-cd" style="font-size:12.5px"></small></a>`;
  }
  el.querySelector('.rp-cd').textContent = 'след ' + countdown(np.secsLeft, true);
}
setInterval(railPrayer, 1000); // показва секундите в последния час
store.on(k => { if (k === 'place' || k === 'villageMode') railPrayer(); });

// ---------- нов ден ----------
let today = P.nowBG().d, prayerStale = false;
setInterval(() => {
  const d = P.nowBG().d;
  if (d !== today) {
    today = d;
    if (pDay) pDay--; // pDay се брои от днес — така разглежданата дата не се мести
    prayerStale = true;
    if (route.name === 'home' && $('.hero-date')) $('.hero-date').innerHTML = heroDate();
  }
  // само това, което зависи от датата: без затваряне на листове, превъртане или изтриване на търсенето
  if (prayerStale && $('#sheet').hidden) { prayerStale = false; if (route.name === 'prayer') renderPrayer(); }
}, 15000);

// ---------- старт ----------
applyPrefs();
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyPrefs);
render().then(railPrayer);
runIntro().then(() => { if (route.name === 'home') view.focus({ preventScroll: true }); });
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
// тихо изтегляне на целия текст за офлайн, когато браузърът е свободен
(window.requestIdleCallback || setTimeout)(() => { if (navigator.connection?.saveData) return; loadMeta().then(() => META.surahs.forEach((s, i) => setTimeout(() => { loadSurah(s.n).catch(() => {}); }, 3000 + i * 60))); }, { timeout: 8000 });
