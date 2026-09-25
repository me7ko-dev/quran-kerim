// Всички браузърни тестове: node tools/test/run.cjs  (нужен е Playwright: npm i -g playwright; axe-core — по желание)
// Сам пуска локален сървър на свободен порт; на Windows без Chromium ползва Edge.
const { spawn } = require('child_process');
const path = require('path');
const net = require('net');
(async () => {
  const port = await new Promise(r => { const s = net.createServer().listen(0, () => { const p = s.address().port; s.close(() => r(p)); }); });
  process.env.QK_URL = `http://localhost:${port}/`;
  const srv = spawn(process.execPath, [path.join(__dirname, '../serve.mjs'), String(port)], { stdio: 'ignore' });
  let alive = true;
  const stopServer = async () => { if (alive) { alive = false; srv.kill(); await new Promise(r => setTimeout(r, 400)); } };
  await new Promise(r => setTimeout(r, 600));
  const { launch, results } = require('./helpers.cjs');
  const b = await launch();
  const t0 = Date.now();
  try {
    await require('./regress.cjs')(b);
    await require('./features.cjs')(b, { stopServer }); // офлайн тестът спира сървъра — последен
  } catch (e) { results.fail++; console.log('  ✗ тестът спря: ' + e.message); }
  await b.close(); await stopServer();
  const errs = [...new Set(results.errors)];
  console.log(`\n${results.pass} минаха, ${results.fail} не минаха (${Math.round((Date.now() - t0) / 1000)} сек)` + (errs.length ? `\nГрешки в страницата: ${errs.join(' | ')}` : ''));
  process.exit(results.fail || errs.length ? 1 : 0);
})();
