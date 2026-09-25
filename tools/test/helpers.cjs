// Общи неща за браузърните тестове (Playwright). Пуска се през run.cjs.
const { chromium } = require('playwright');
const U = process.env.QK_URL || 'http://localhost:8931/';
const places = {
  sofia: { name: 'София', type: 0, lat: 42.6977, lon: 23.3217, obl: 'София-град', obs: 'Столична' },
  varna: { name: 'Варна', type: 0, lat: 43.2141, lon: 27.9147, obl: 'Варна', obs: 'Варна' },
  ribnovo: { name: 'Рибново', type: 1, lat: 41.5586, lon: 23.8339, obl: 'Благоевград', obs: 'Гърмен' },
};
// 0.4 сек тишина като WAV — вместо записите от everyayah.com (браузърът го пуска, независимо от content-type)
const wav = (() => {
  const sr = 8000, n = sr * 0.4, b = Buffer.alloc(44 + n);
  b.write('RIFF', 0); b.writeUInt32LE(36 + n, 4); b.write('WAVEfmt ', 8); b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22);
  b.writeUInt32LE(sr, 24); b.writeUInt32LE(sr, 28); b.writeUInt16LE(1, 32); b.writeUInt16LE(8, 34); b.write('data', 36); b.writeUInt32LE(n, 40); b.fill(128, 44);
  return b;
})();
const results = { pass: 0, fail: 0, errors: [] };
const ok = (name, cond, info = '') => { cond ? results.pass++ : results.fail++; console.log((cond ? '  ✓ ' : '  ✗ ') + name + (info && !cond ? '  — ' + info : '')); };
async function launch() {
  const args = ['--autoplay-policy=no-user-gesture-required'];
  try { return await chromium.launch({ args }); }
  catch (e) { return chromium.launch({ args, channel: 'msedge' }); } // Windows без изтеглен Chromium
}
// Нов контекст: state → localStorage при първото зареждане; audio 'ok' | 'fail'; clock — изкуствено време
async function page(b, state = {}, { audio = 'ok', clock, ctx: ctxOpt, route, init } = {}) {
  const ctx = await b.newContext(ctxOpt || { viewport: { width: 390, height: 844 } });
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await ctx.route(/everyayah\.com/, r => audio === 'ok' ? r.fulfill({ body: wav, contentType: 'audio/mpeg' }) : r.abort());
  if (route) await ctx.route(...route);
  const p = await ctx.newPage();
  p.on('pageerror', e => results.errors.push(e.message));
  if (clock) await p.clock.install({ time: new Date(clock) });
  if (init) await p.addInitScript(init);
  await p.addInitScript(s => { if (!sessionStorage.qkTest) { localStorage.setItem('qk:v1', JSON.stringify({ intro: false, ...s })); sessionStorage.qkTest = 1; } }, state);
  return Object.assign(p, { ctx });
}
module.exports = { U, places, wav, ok, results, launch, page };
