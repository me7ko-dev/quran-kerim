// Кибла, турски превод, листове (фокус), оформление, достъпност (axe, ако е инсталиран) и офлайн
const { U, places, ok, page } = require('./helpers.cjs');
const { sofia, ribnovo } = places;
let axe = null; try { axe = require('axe-core'); } catch (e) {}

module.exports = async (b, { stopServer }) => {
  console.log('Кибла');
  { const p = await page(b, { place: sofia }, { ctx: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } });
    await p.goto(U + '#/qibla'); await p.waitForTimeout(600);
    ok('посоката за София е 141,9°', (await p.textContent('.q-center b')) === '141,9°');
    const fire = alpha => p.evaluate(a => dispatchEvent(new DeviceOrientationEvent('deviceorientationabsolute', { alpha: a, absolute: true })), alpha);
    for (let i = 0; i < 30; i++) await fire(360 - 100);
    ok('Android: подсказва накъде да се завърти', /надясно с 37°/.test(await p.textContent('#qStatus')));
    for (let i = 0; i < 40; i++) await fire(360 - (141.86 - 5.3)); // + магнитното отклонение за София
    ok('Android: разпознава посоката към киблата', (await p.$eval('#qCard', e => e.className)).includes('aligned'));
    for (let i = 0; i < 40; i++) await fire(5);
    const t1 = parseFloat(await p.$eval('#dial', e => e.style.transform.slice(7)));
    for (let i = 0; i < 40; i++) await fire(355);
    const t2 = parseFloat(await p.$eval('#dial', e => e.style.transform.slice(7)));
    ok('преминаване през 0°/360° без пълно завъртане', Math.abs(t2 - t1) < 20, `${t1} → ${t2}`);
    await p.ctx.close(); }
  { const p = await page(b, { place: sofia }, { ctx: { viewport: { width: 1280, height: 860 } } });
    await p.goto(U + '#/qibla'); await p.waitForTimeout(3500);
    ok('компютър: без бутон за компас, показва посоката с думи', !(await p.$('#qStart')) && /югоизток/.test(await p.textContent('#qStatus')));
    await p.ctx.close(); }

  console.log('Турски превод');
  { const p = await page(b, { trLang: 'both' });
    await p.goto(U + '#/s/1'); await p.waitForTimeout(1200);
    ok('двата превода под айета', (await p.$$eval('#a-1 .tr-text', ps => ps.map(x => x.getAttribute('lang') || 'bg').join())) === 'bg,tr');
    await p.goto(U + '#/search/ISLAM'); await p.waitForTimeout(3000);
    ok('търсене: ISLAM намира „İslam“ (I/ı/İ/i)', /^8 /.test(await p.textContent('#view p.muted')));
    await p.goto(U + '#/settings'); await p.waitForTimeout(600); await p.click('[data-lang=tr]');
    await p.goto(U + '#/s/1'); await p.waitForTimeout(1000);
    ok('само турски', (await p.$$eval('#a-1 .tr-text', ps => ps.map(x => x.getAttribute('lang') || 'bg').join())) === 'tr');
    await p.goto(U + '#/search/милост'); await p.waitForTimeout(2500);
    ok('търсенето винаги включва и българския', /^207 /.test(await p.textContent('#view p.muted')));
    await p.ctx.close(); }
  { const p = await page(b, { trLang: 'tr' }, { route: [/\/data\/tr\//, r => r.abort()] });
    await p.goto(U + '#/s/2'); await p.waitForTimeout(1200);
    ok('липсващ турски файл → българският с едно съобщение', (await p.$eval('#a-1 .tr-text', x => x.getAttribute('lang'))) === null && /Турският/.test(await p.textContent('#toast')));
    await p.ctx.close(); }

  console.log('Листове и достъпност');
  { const p = await page(b, { place: sofia }, { ctx: { viewport: { width: 1280, height: 860 } } });
    await p.goto(U + '#/s/1'); await p.waitForTimeout(1000);
    await p.focus('#a-2 [data-act=more]'); await p.keyboard.press('Enter'); await p.waitForTimeout(400);
    ok('листът получава фокуса, фонът е inert', await p.evaluate(() => document.activeElement.id === 'sheet' && document.querySelector('.app').inert));
    await p.click('[data-x=hifz]'); await p.waitForTimeout(300); await p.keyboard.press('Escape'); await p.waitForTimeout(200);
    ok('Escape връща фокуса на бутона', await p.evaluate(() => document.activeElement.closest('#a-2') && !document.querySelector('.app').inert));
    ok('заглавието на раздела следва екрана', (await p.title()) === 'Ал-Фатиха · Куран-и Керим');
    if (axe) {
      for (const [h, theme] of [['#/', 'light'], ['#/prayer', 'dark'], ['#/settings', 'sepia'], ['#/qibla', 'light'], ['#/s/1', 'dark']]) {
        await p.evaluate(t => localStorage.setItem('qk:v1', JSON.stringify({ ...JSON.parse(localStorage.getItem('qk:v1')), theme: t })), theme);
        await p.goto(U + h); await p.reload(); await p.waitForTimeout(1000);
        await p.addScriptTag({ content: axe.source });
        const v = await p.evaluate(async () => (await axe.run(document)).violations.map(x => x.id + '×' + x.nodes.length));
        ok(`axe ${h} (${theme}): без нарушения`, !v.length, v.join(', '));
      }
    } else console.log('  (axe-core не е инсталиран — проверката за достъпност е пропусната)');
    await p.ctx.close(); }

  console.log('Оформление (без хоризонтално препълване)');
  for (const [w, h] of [[320, 640], [390, 844], [1280, 860]]) {
    const p = await page(b, { place: ribnovo, bookmarks: [{ s: 2, a: 255, t: 1 }], last: { s: 18, a: 10 } }, { ctx: { viewport: { width: w, height: h }, isMobile: w < 900, hasTouch: w < 900 } });
    const bad = [];
    for (const hash of ['#/', '#/s/2/255', '#/prayer', '#/qibla', '#/settings', '#/bookmarks']) {
      await p.goto(U + hash); await p.waitForTimeout(900);
      if (await p.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1)) bad.push(hash);
    }
    ok(`${w}px: всички екрани се побират`, !bad.length, bad.join(' '));
    await p.ctx.close();
  }

  console.log('Офлайн');
  { const p = await page(b, { place: sofia });
    await p.goto(U + '#/prayer');
    await p.evaluate(async () => { await navigator.serviceWorker.register('sw.js'); await navigator.serviceWorker.ready; });
    await p.reload(); await p.waitForTimeout(15000); // тихото изтегляне на сурите и списъка с места
    const n = await p.evaluate(async () => { const k = (await caches.keys()).find(x => x.startsWith('qk-data')); return (await (await caches.open(k)).keys()).filter(r => /data\/s\//.test(r.url)).length; });
    ok('всичките 114 сури са в кеша', n === 114, String(n));
    await stopServer(); await p.close();
    const q = await p.ctx.newPage();
    await q.goto(U + '#/s/36'); await q.waitForTimeout(1500);
    ok('без сървър: сура в нов документ', (await q.$$eval('.ayah', e => e.length)) === 83);
    ok('без сървър: арабският шрифт', await q.evaluate(async () => { await document.fonts.ready; return [...document.fonts].some(f => f.family.includes('Hafs') && f.status === 'loaded'); }));
    await q.goto(U + '#/prayer'); await q.reload(); await q.waitForTimeout(900);
    ok('без сървър: времената за намаз', /\d:\d\d/.test(await q.textContent('#bigNext')));
    await q.goto(U + '#/search/Аллах'); await q.waitForTimeout(2500);
    ok('без сървър: търсене', /резултата/.test(await q.textContent('#view p.muted')));
    await p.ctx.close(); }
};
