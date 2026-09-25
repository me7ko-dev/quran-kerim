// Проверка: предсказваме град A от официалния най-близък град B + астрономическа разлика
import fs from 'fs';
import { solarTimes } from './sun.mjs';
const d = JSON.parse(fs.readFileSync('muftiate-raw.json'));
const P = JSON.parse(fs.readFileSync('../data/places.json'));
const hm = s => { const [h, mi] = s.split(':'); return +h * 60 + +mi; };
const T = Object.entries(d.towns).map(([id, t]) => { const c = P.find(p => p[0] === t.name && p[1] === 0 && (id !== 'byala' || p[4] === 'Русе')); return { id, t, lat: c[2], lon: c[3] }; });
const ev = (st, k) => [st.at(-18, -1), st.at(-0.833, -1), st.noon, st.at(st.asrAlt(1), 1), st.at(-0.833, 1), st.at(-17, 1)][k];
const dist = (a, b) => Math.hypot(a.lat - b.lat, (a.lon - b.lon) * Math.cos(a.lat * Math.PI / 180));
const hist = [{}, {}, {}, {}, {}, {}]; let worst = [];
for (const A of T) {
  const B = T.filter(x => x !== A).sort((x, y) => dist(A, x) - dist(A, y))[0];
  for (let m = 1; m <= 12; m++) A.t.months[m].forEach((r, i) => {
    const sa = solarTimes(2026, m, i + 1, A.lat, A.lon), sb = solarTimes(2026, m, i + 1, B.lat, B.lon);
    for (let k = 0; k < 6; k++) {
      const pred = hm(B.t.months[m][i][k]) + (ev(sa, k) - ev(sb, k));
      const e = Math.round(pred) - hm(r[k]); hist[k][e] = (hist[k][e] || 0) + 1;
      if (Math.abs(e) >= 2) worst.push(`${A.id}<-${B.id} ${m}/${i + 1} k${k} ${e}`);
    }
  });
}
console.log(hist.map(h => JSON.stringify(h)).join('\n'));
console.log(worst.length, worst.slice(0, 15));
