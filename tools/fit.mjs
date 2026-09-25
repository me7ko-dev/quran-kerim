import fs from 'fs';
import { solarTimes } from './sun.mjs';
const d = JSON.parse(fs.readFileSync('muftiate-raw.json'));
const P = JSON.parse(fs.readFileSync('../data/places.json'));
const Y = 2026;
// часова зона на София: UTC+2, лятно UTC+3 (последна неделя на март → последна неделя на октомври)
const lastSun = m => { const x = new Date(Date.UTC(Y, m, 0)); return x.getUTCDate() - x.getUTCDay(); };
const tz = (m, dd) => (m > 3 && m < 10) || (m === 3 && dd >= lastSun(3)) || (m === 10 && dd < lastSun(10)) ? 180 : 120;
const coords = (id, t) => { const c = P.filter(p => p[0] === t.name && p[1] === 0); if (id === 'byala') return c; return c.slice(0, 1); };
const rows = [];
for (const [id, t] of Object.entries(d.towns)) for (const c of coords(id, t)) for (let m = 1; m <= 12; m++) t.months[m].forEach((r, i) => {
  const off = tz(m, i + 1); const st = solarTimes(Y, m, i + 1, c[2], c[3]);
  rows.push({ id: id + (id === 'byala' ? c[4] : ''), m, day: i + 1, off, st, obs: r.map(s => { const [h, mi] = s.split(':'); return +h * 60 + +mi; }), c });
});
const which = process.argv[2];
const calc = (r, k, a) => {
  const { st, off } = r;
  if (k === 0) return st.at(-a, -1) + off;
  if (k === 1) return st.at(-a, -1) + off;
  if (k === 2) return st.noon + off;
  if (k === 3) return st.at(st.asrAlt(a), 1) + off;
  if (k === 4) return st.at(-a, 1) + off;
  if (k === 5) return st.at(-a, 1) + off;
};
const names = ['Зора', 'Изгрев', 'Обяд', 'Следобяд', 'Залез', 'Нощ'];
const ranges = [[14, 20, .1], [0.5, 1.5, .0333], [0, 0, 1], [1, 1, 1], [0.5, 1.5, .0333], [14, 19, .1]];
for (let k = 0; k < 6; k++) {
  let best = null;
  const [a0, a1, s] = ranges[k];
  for (let a = a0; a <= a1 + 1e-9; a += s) {
    const cc = rows.map(r => calc(r, k, a));
    for (const off of [...Array(41)].map((_, i) => -10 + i * 0.5)) for (const rnd of ['round', 'ceil', 'floor']) {
      let bad = 0, mx = 0;
      for (let i = 0; i < rows.length; i++) { const v = Math[rnd](cc[i] + off); const e = Math.abs(v - rows[i].obs[k]); if (e > mx) mx = e; if (e) bad++; }
      if (!best || bad < best.bad) best = { a: +a.toFixed(3), off, rnd, bad, mx };
    }
  }
  console.log(names[k], JSON.stringify(best), 'от', rows.length);
}
