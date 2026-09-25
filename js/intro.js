// Начален екран: златният мусхаф. „Бисмиллях“ → рецитаторът изговаря 1:1, книгата се обръща към нас,
// корицата се отваря надясно, от страницата с Ал-Фатиха излиза светлина и влизаме в приложението.
// Показва се само ако <head> е сложил html.intro-on (настройката е включена и адресът е началото).
import { store } from './store.js';
import { audioUrl } from './audio.js';

const root = document.documentElement;
const $ = id => document.getElementById(id);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

export function runIntro() {
  const el = $('intro');
  try { delete sessionStorage.qkIntro; } catch (e) {} // „Покажи сега“ от Настройки
  if (!el) return Promise.resolve();
  if (!root.classList.contains('intro-on')) { el.remove(); return Promise.resolve(); }
  return new Promise(resolve => {
    let done = false;
    const timers = [];
    const later = (ms, f) => timers.push(setTimeout(f, reduced ? Math.min(ms, 300) : ms));

    // звезди на фона
    const stars = $('inStars');
    for (let i = 0; i < 46; i++) {
      const s = document.createElement('i');
      s.className = 'in-star';
      s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 70}%;animation-delay:${(Math.random() * 3.5).toFixed(2)}s`;
      stars.appendChild(s);
    }
    // текстът на Ал-Фатиха — от проверените данни (data/s/1.json), без да го пишем на ръка
    const fatiha = fetch('data/s/1.json').then(r => r.json()).then(a => a.map(x => x[0]));
    fatiha.then(a => { $('inFatiha').textContent = a.join(' '); }).catch(() => {});

    // 3D (WebGL): зарежда се тихо; докато не е готово — CSS мусхафът. Ако няма WebGL или нещо се счупи — остава CSS.
    let gl = null, tapped = false;
    if (hasWebGL()) {
      const host = document.createElement('div');
      host.className = 'in-gl-host';
      el.prepend(host);
      Promise.all([import('./intro3d.js'), fatiha])
        .then(([m, ayahs]) => m.start({ host, ayahs, reduced, onLost: () => { gl = null; el.classList.remove('gl', 'gl-open'); host.remove(); } }))
        .then(c => { if (done || tapped) { c.dispose(); return; } gl = c; requestAnimationFrame(() => el.classList.add('gl')); })
        .catch(e => { console.warn('3D началният екран не тръгна:', e); host.remove(); });
    }

    const finish = () => {
      if (done) return; done = true;
      timers.forEach(clearTimeout);
      el.classList.add('gone');
      if (gl) setTimeout(() => gl.dispose(), 950);
      removeEventListener('keydown', onKey);
      setTimeout(() => { root.classList.remove('intro-on'); el.remove(); resolve(); }, reduced ? 50 : 900);
    };
    const onKey = e => { if (e.key === 'Escape') finish(); };
    addEventListener('keydown', onKey);
    $('inSkip').onclick = finish; // Бисмиллях, ако вече е започнал, не се прекъсва

    $('inBism').onclick = () => {
      if (el.classList.contains('opening')) return;
      tapped = true;
      // Бисмиллях с избрания рецитатор (докосването позволява звук и на iPhone); без интернет — просто тихо
      try { new Audio(audioUrl(store.get('reciter'), 1, 1)).play().catch(() => {}); } catch (e) {}
      if (gl) { el.classList.add('opening', 'gl-open'); gl.open().then(finish); return; }
      // отвореният мусхаф е два пъти по-широк — смаляваме го, ако не се побира
      const bw = el.querySelector('.book').offsetWidth;
      el.style.setProperty('--fit', Math.min(1, innerWidth * .94 / (2 * bw)).toFixed(3));
      el.classList.add('opening');
      later(1500, () => el.classList.add('opened'));
      later(2600, () => { el.classList.add('lit'); sparks(el); });
      later(5200, () => el.classList.add('calm'));
      later(5600, () => el.classList.add('enter'));
      later(6500, finish);
    };
    // фокус върху бутона — Enter/интервал отваря
    requestAnimationFrame(() => $('inBism').focus({ preventScroll: true }));
  });
}

function hasWebGL() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; }
}

function sparks(el) {
  if (reduced) return;
  const box = $('inStage');
  for (let i = 0; i < 38; i++) {
    const s = document.createElement('i');
    s.className = 'spark';
    const ang = (-90 + (Math.random() - .5) * 150) * Math.PI / 180, dist = 120 + Math.random() * 260;
    s.style.cssText = `--x:${(Math.cos(ang) * dist).toFixed(0)}px;--y:${(Math.sin(ang) * dist).toFixed(0)}px;` +
      `--t:${(2.2 + Math.random() * 2).toFixed(2)}s;--dl:${(Math.random() * 1.4).toFixed(2)}s;` +
      `margin-left:calc(var(--w) * -.5 + ${((Math.random() - .5) * 110).toFixed(0)}px);width:${(3 + Math.random() * 4).toFixed(1)}px;height:auto;aspect-ratio:1`;
    box.appendChild(s);
  }
}
