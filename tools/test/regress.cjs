// Регресии за бъговете, намерени при прегледите (всеки тест възпроизвежда конкретен бъг)
const { U, places, ok, page } = require('./helpers.cjs');
const { sofia, varna } = places;
const hm = s => s.match(/(\d+):(\d+)/).slice(1).map(Number);

module.exports = async b => {
  console.log('Намаз');
  { const p = await page(b, { place: sofia });
    await p.goto(U + '#/prayer'); await p.waitForTimeout(800);
    await p.click('#dNext'); await p.click('#dPrev'); await p.click('#dNext'); await p.click('#dPrev');
    await p.click('#placeBtn'); await p.waitForTimeout(600); await p.fill('#pq', 'Варна'); await p.waitForTimeout(100); await p.click('#pRes .opt'); await p.waitForTimeout(300);
    const seen = new Set(); for (let i = 0; i < 12; i++) { seen.add(await p.textContent('#times')); await p.waitForTimeout(250); }
    ok('без премигване след смяна на мястото (таймерите не се трупат)', seen.size === 1, [...seen].join(' / '));
    ok('лентата горе реагира след прерисуване', await p.evaluate(async () => { scrollTo(0, 400); await new Promise(r => setTimeout(r, 100)); return document.querySelector('.topbar').classList.contains('stuck'); }));
    await p.ctx.close(); }
  { const p = await page(b, { place: sofia }, { clock: '2026-12-31T21:59:50Z' }); // 23:59:50 в София
    await p.goto(U + '#/prayer'); await p.waitForTimeout(500);
    const before = await p.textContent('.day-nav b'); await p.clock.runFor(40000); await p.waitForTimeout(300);
    ok('след полунощ екранът минава в новия ден', /31 декември/.test(before) && /1 януари 2027/.test(await p.textContent('.day-nav b')));
    await p.ctx.close(); }
  for (const [clock, off, name] of [['2026-03-28T21:30:00Z', 3, 'към лятно'], ['2026-10-24T20:30:00Z', 2, 'към зимно']]) {
    const p = await page(b, { place: sofia }, { clock });
    await p.goto(U + '#/prayer'); await p.waitForTimeout(500);
    const [h, m] = hm(await p.textContent('#bigNext .at')), [ch, cm] = (await p.textContent('#bigNext .cd')).split(':').map(Number);
    const t0 = new Date(clock), d = new Date(t0.getTime() + 86400000);
    const real = (Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), h - off, m) - t0) / 3600000;
    ok(`обратно броене в нощта на смяна ${name} време`, Math.abs(ch + cm / 60 - real) < 0.02, `${ch}:${cm} срещу ${real.toFixed(2)} ч`);
    if (off === 3) { await p.goto(U + '#/'); await p.waitForTimeout(500);
      ok('началото след ятсъ: малкият ред показва утрешната зора', await p.textContent('#nextCard .tm') === await p.textContent('#nextCard .mini .now b')); }
    await p.ctx.close();
  }
  { const p = await page(b, {});
    await p.goto(U + '#/prayer/Рибново'); await p.waitForTimeout(1200);
    ok('връзка #/prayer/Рибново избира селото', (await p.textContent('.place-bar b')).includes('Рибново'));
    await p.goto(U + '#/prayer/Бяла'); await p.waitForTimeout(1500);
    ok('връзка #/prayer/Бяла (два града) отваря избора', await p.evaluate(() => !document.querySelector('#sheet').hidden && document.querySelector('#pq').value === 'Бяла'));
    await p.ctx.close(); }
  { const p = await page(b, {}, { route: [/places\.json/, r => r.abort()] });
    await p.goto(U + '#/prayer/Иваново'); await p.waitForTimeout(1500);
    ok('връзка без списък с места: изборът казва защо', /Няма връзка/.test(await p.textContent('#pRes')));
    await p.ctx.close(); }

  console.log('Четене и навигация');
  { const p = await page(b, {});
    await p.goto(U + '#/s/2'); await p.waitForTimeout(1000);
    await p.evaluate(() => location.hash = '#/s/2/10'); await p.waitForTimeout(600);
    await p.click('#a-12 [data-act=bm]'); await p.waitForTimeout(200);
    ok('бутоните на айетите работят след скок в същата сура', await p.evaluate(() => JSON.parse(localStorage.getItem('qk:v1')).bookmarks.some(x => x.s === 2 && x.a === 12)));
    await p.goto(U + '#/s/2'); await p.waitForTimeout(800);
    for (let i = 0; i < 12; i++) { await p.mouse.wheel(0, 250); await p.waitForTimeout(60); }
    await p.waitForTimeout(900);
    const [top, saved] = await p.evaluate(() => [+[...document.querySelectorAll('.ayah')].find(e => e.getBoundingClientRect().bottom > 81).dataset.a, JSON.parse(localStorage.getItem('qk:v1')).last.a]);
    ok('„Продължете четенето“ пази най-горния видим айет', top === saved, `горе ${top}, записан ${saved}`);
    await p.goto(U + '#/prayer/100%'); await p.waitForTimeout(700);
    ok('счупен адрес #/prayer/100% не дава празен екран', await p.evaluate(() => document.querySelector('#view').textContent.length > 20));
    await p.goto(U + '#/s/2.5'); await p.waitForTimeout(700);
    ok('#/s/2.5 води към началото', await p.evaluate(() => !!document.querySelector('.hero')));
    await p.ctx.close(); }
  { const p = await page(b, {}, { route: [/data\/s\/3\.json/, async r => { await new Promise(x => setTimeout(x, 1500)); r.continue(); }] });
    await p.goto(U + '#/'); await p.waitForTimeout(600);
    await p.evaluate(() => { qkPlayer.el.play = () => Promise.resolve(); qkPlayer.cur = { s: 3, a: 5, bism: false }; qkPlayer.done = true; qkPlayer.emit(); });
    await p.click('#plInfo'); await p.waitForTimeout(100); await p.click('#plInfo'); await p.waitForTimeout(2500);
    ok('двоен скок по време на зареждане пази осветяването', await p.evaluate(() => !!document.querySelector('#a-5.cur')));
    await p.ctx.close(); }
  { const p = await page(b, { place: sofia }, { ctx: { viewport: { width: 1280, height: 860 } } });
    await p.goto(U + '#/settings'); await p.waitForTimeout(1500);
    await p.focus('#railPrayer a'); await p.waitForTimeout(2200);
    ok('фокусът в страничната лента оцелява секундите', await p.evaluate(() => !!document.activeElement.closest('#railPrayer')));
    const at = await p.$eval('#railPrayer a', e => { const r = e.getBoundingClientRect(); return [r.x + 30, r.y + 30]; });
    await p.mouse.move(...at); await p.mouse.down(); await p.waitForTimeout(1300); await p.mouse.up(); await p.waitForTimeout(300);
    ok('дълго натискане на страничната лента отваря намаза', await p.evaluate(() => location.hash) === '#/prayer');
    await p.ctx.close(); }
  { const p = await page(b, { theme: 'dark' });
    await p.goto(U + '#/settings'); await p.waitForTimeout(700); await p.click('[data-theme=auto]');
    ok('тема „Авто“ връща цвета на лентата на браузъра', (await p.$$eval('meta[name=theme-color]', ms => ms.map(m => m.content).join())) === '#0c2a23,#f7f1e3');
    await p.ctx.close(); }

  console.log('Плейър (истинско аудио)');
  { const p = await page(b, { autoNext: true, play: 'continue' });
    await p.goto(U + '#/s/1'); await p.waitForTimeout(900);
    await p.click('#a-6 [data-act=play]');
    await p.waitForFunction(() => location.hash === '#/s/2', null, { timeout: 8000 }).catch(() => {});
    ok('„следи айета“ отваря следващата сура', await p.evaluate(() => location.hash) === '#/s/2');
    await p.evaluate(() => qkPlayer.stop()); await p.goto(U + '#/s/5'); await p.waitForTimeout(700);
    await p.evaluate(() => qkPlayer.play(2, 255, 'single')); await p.waitForTimeout(1500);
    ok('краят на айет не прехвърля към друга сура', await p.evaluate(() => location.hash) === '#/s/5');
    await p.evaluate(() => { qkPlayer.el.play = () => Promise.resolve(); qkPlayer.play(2, 1, 'continue'); qkPlayer.step(1); });
    ok('„напред“ по време на Бисмиллях отива на 1-ви айет', await p.evaluate(() => qkPlayer.cur.a === 1 && !qkPlayer.cur.bism));
    await p.ctx.close(); }
  { const p = await page(b, { autoNext: false });
    await p.goto(U + '#/s/112'); await p.waitForTimeout(900);
    await p.click('.surah-play'); await p.waitForFunction(() => qkPlayer.done, null, { timeout: 10000 }).catch(() => {});
    await p.click('.surah-play'); await p.waitForTimeout(200);
    ok('„Слушай“ на изслушана сура започва отначало', await p.evaluate(() => qkPlayer.cur.bism && qkPlayer.cur.a === 1));
    await p.evaluate(() => qkPlayer.playRange(112, 2, 3, 2, 2));
    await p.evaluate(() => { window.seq = []; qkPlayer.addEventListener('state', () => { const c = qkPlayer.cur; if (c && !qkPlayer.el.paused) { const k = c.a + '/' + qkPlayer.rep + '/' + qkPlayer.loop; if (seq.at(-1) !== k) seq.push(k); } }); });
    await p.waitForFunction(() => qkPlayer.done, null, { timeout: 15000 }).catch(() => {});
    const s = await p.evaluate(() => seq.join(' '));
    ok('заучаване: 2 айета × 2 × 2 кръга', /^(2\/1\/1 )?2\/2\/1 3\/1\/1 3\/2\/1 2\/1\/2 2\/2\/2 3\/1\/2 3\/2\/2$/.test(s), s);
    await p.ctx.close(); }
  { const p = await page(b, {}, { audio: 'fail' });
    await p.goto(U + '#/s/2'); await p.waitForTimeout(900);
    await p.click('#a-20 [data-act=play]'); await p.waitForTimeout(300); await p.click('#plClose'); await p.waitForTimeout(1500);
    await p.click('#a-20 [data-act=play]');
    await p.waitForFunction(() => document.querySelector('#toast').textContent.includes('Аудиото'), null, { timeout: 10000 }).catch(() => {});
    await p.ctx.unroute(/everyayah\.com/); await p.ctx.route(/everyayah\.com/, r => r.fulfill({ body: require('./helpers.cjs').wav, contentType: 'audio/mpeg' }));
    await p.click('#plPlay');
    await p.waitForFunction(() => !qkPlayer.el.paused || qkPlayer.done, null, { timeout: 5000 }).catch(() => {});
    ok('„Пусни“ след неуспешно зареждане опитва наново', await p.evaluate(() => !qkPlayer.el.error && (!qkPlayer.el.paused || qkPlayer.done)));
    await p.ctx.close(); }

  console.log('Фокус, позиция на четене, полунощ при друг ден');
  { const p = await page(b, {}, { ctx: { viewport: { width: 1280, height: 860 } } });
    await p.goto(U + '#/s/112'); await p.waitForTimeout(900);
    await p.evaluate(() => qkPlayer.play(112, 4, 'continue')); await p.waitForTimeout(100);
    await p.focus('#plNext'); await p.keyboard.press('Enter');
    await p.waitForFunction(() => location.hash === '#/s/113', null, { timeout: 5000 }).catch(() => {}); await p.waitForTimeout(500);
    ok('автоматична смяна на сурата не отнема фокуса от плейъра', await p.evaluate(() => document.activeElement.id) === 'plNext');
    await p.evaluate(() => qkPlayer.stop());
    await p.focus('.rail-nav a[href="#/settings"]'); await p.keyboard.press('Enter'); await p.waitForTimeout(600);
    ok('след навигация от менюто фокусът е в съдържанието, без рамка', await p.evaluate(() => document.activeElement.id === 'view' && getComputedStyle(document.activeElement).outlineStyle === 'none'));
    await p.ctx.close(); }
  for (const [w, h] of [[390, 844], [1280, 860]]) {
    const p = await page(b, {}, { ctx: { viewport: { width: w, height: h } } });
    await p.goto(U + '#/s/2/255'); await p.waitForTimeout(2000);
    const [top, bar] = await p.evaluate(() => [document.getElementById('a-255').getBoundingClientRect().top, document.querySelector('.topbar').getBoundingClientRect().bottom]);
    ok(`${w}px: #/s/2/255 — айетът е под лентата и се записва 255`, top >= bar && await p.evaluate(() => JSON.parse(localStorage.getItem('qk:v1')).last.a) === 255);
    for (const v of ['ayah', 'ayah-tr']) { await p.click('#tView'); await p.waitForTimeout(300); await p.click(`#sheet [data-v=${v}]`); await p.waitForTimeout(1500); }
    ok(`${w}px: смяна на изгледа не мести позицията на четене`, await p.evaluate(() => JSON.parse(localStorage.getItem('qk:v1')).last.a) === 255);
    await p.ctx.close();
  }
  { const p = await page(b, { place: sofia }, { clock: '2026-10-10T20:58:00Z' });
    await p.goto(U + '#/prayer'); await p.waitForTimeout(500); await p.click('#dNext'); await p.waitForTimeout(200);
    await p.clock.fastForward(3 * 60000); await p.clock.runFor(16000); await p.waitForTimeout(200);
    const b2 = await p.textContent('.day-nav b'); await p.click('#dPrev'); await p.waitForTimeout(200);
    ok('полунощ при разглеждане на друг ден: датата остава, „назад“ е ден назад', /Днес, 11 октомври/.test(b2) && /10 октомври/.test(await p.textContent('.day-nav b')));
    await p.ctx.close(); }

  console.log('Кибла и полунощ');
  { const p = await page(b, { place: sofia }, { ctx: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }, clock: '2026-12-31T21:59:40Z',
      init: () => { DeviceOrientationEvent.requestPermission = async () => 'granted'; delete Window.prototype.ondeviceorientationabsolute; delete window.ondeviceorientationabsolute; } }); // като iPhone
    await p.goto(U + '#/qibla'); await p.waitForTimeout(500); await p.click('#qStart');
    const fire = () => p.evaluate(() => { const e = new DeviceOrientationEvent('deviceorientation', { alpha: 0 }); Object.defineProperty(e, 'webkitCompassHeading', { value: 100 }); dispatchEvent(e); });
    await fire(); await p.clock.runFor(40000); await fire(); await p.waitForTimeout(100);
    ok('компасът на iPhone работи и след полунощ', !(await p.$('#qStart')) && /Завъртете/.test(await p.textContent('#qStatus')));
    await p.goto(U + '#/'); await p.waitForTimeout(300); await p.fill('#q', 'Ясин');
    const d0 = await p.textContent('.hero-date');
    await p.clock.fastForward(86400000); await p.clock.runFor(20000); await p.waitForTimeout(200);
    ok('полунощ на началото: датата се сменя, търсенето остава', await p.inputValue('#q') === 'Ясин' && (await p.textContent('.hero-date')) !== d0);
    await p.ctx.close(); }
};
