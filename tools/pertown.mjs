import fs from 'fs';
import { solarTimes } from './sun.mjs';
const d = JSON.parse(fs.readFileSync('muftiate-raw.json'));
const P = JSON.parse(fs.readFileSync('../data/places.json'));
const hm = s => { const [h, mi] = s.split(':'); return +h * 60 + +mi; };
const lastSun = m => { const x = new Date(Date.UTC(2026, m, 0)); return x.getUTCDate() - x.getUTCDay(); };
const tz = (m, dd) => (m > 3 && m < 10) || (m === 3 && dd >= lastSun(3)) || (m === 10 && dd < lastSun(10)) ? 180 : 120;
const ev = (st, k) => [st.at(-18, -1), st.at(-0.833, -1), st.noon, st.at(st.asrAlt(1), 1), st.at(-0.833, 1), st.at(-17, 1)][k];
for (const [id, t] of Object.entries(d.towns)) {
  for (const c of P.filter(p => p[0] === t.name && p[1] === 0)) {
    const res = [[], [], [], [], [], []];
    for (let m = 1; m <= 12; m++) t.months[m].forEach((r, i) => { const st = solarTimes(2026, m, i + 1, c[2], c[3]); for (let k = 0; k < 6; k++) res[k].push(hm(r[k]) - ev(st, k) - tz(m, i + 1)); });
    const s = res.map(a => { const mn = a.reduce((x, y) => x + y) / a.length; return mn.toFixed(1) + '±' + (Math.max(...a) - Math.min(...a)).toFixed(1); });
    console.log(id.padEnd(17), c[4].padEnd(8), s.join('  '));
  }
}
