import fs from 'fs';
import { solarTimes } from './sun.mjs';
const d = JSON.parse(fs.readFileSync('muftiate-raw.json'));
const P = JSON.parse(fs.readFileSync('../data/places.json'));
const Y = +process.argv[2] || 2026;
const lastSun = m => { const x = new Date(Date.UTC(2026, m, 0)); return x.getUTCDate() - x.getUTCDay(); };
const tz = (m, dd) => (m > 3 && m < 10) || (m === 3 && dd >= lastSun(3)) || (m === 10 && dd < lastSun(10)) ? 180 : 120;
const hm = s => { const [h, mi] = s.split(':'); return +h * 60 + +mi; };
// обяд: остатък по град (средно) и по месец за София
for (const id of ['sofia', 'varna', 'smolyan', 'montana', 'silistra']) {
  const t = d.towns[id]; const c = P.find(p => p[0] === t.name && p[1] === 0);
  const line = [];
  for (let m = 1; m <= 12; m++) { const r = t.months[m]; const vals = [1, 10, 20].map(dd => (hm(r[dd - 1][2]) - (solarTimes(Y, m, dd, c[2], c[3]).noon + tz(m, dd))).toFixed(1)); line.push(vals.join('/')); }
  console.log(id, c[3], line.join('  '));
}
