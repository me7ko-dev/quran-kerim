import fs from 'fs';
import { solarTimes } from './sun.mjs';
const S = JSON.parse(fs.readFileSync('muftiate-raw.json')).towns.sofia.months;
const hm = s => { const [h, mi] = s.split(':'); return +h * 60 + +mi; };
const lastSun = m => { const x = new Date(Date.UTC(2026, m, 0)); return x.getUTCDate() - x.getUTCDay(); };
const tz = (m, dd) => (m > 3 && m < 10) || (m === 3 && dd >= lastSun(3)) || (m === 10 && dd < lastSun(10)) ? 180 : 120;
const days = []; for (let m = 1; m <= 12; m++) S[m].forEach((r, i) => days.push({ m, d: i + 1, o: r.map(hm).map(x => x - tz(m, i + 1)) }));
const [lat, lon] = [+process.argv[2] || 42.6977, +process.argv[3] || 23.3217];
for (let Y = 1975; Y <= 2027; Y++) {
  const r = days.map(x => { const st = solarTimes(Y, x.m, x.d, lat, lon); return [x.o[2] - st.noon, x.o[1] - st.at(-0.833, -1), x.o[4] - st.at(-0.833, 1)]; });
  const sp = k => { const a = r.map(v => v[k]); return (Math.max(...a) - Math.min(...a)).toFixed(2); };
  console.log(Y, 'dhuhr spread', sp(0), 'sunrise', sp(1), 'sunset', sp(2));
}
