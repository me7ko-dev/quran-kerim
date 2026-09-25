// Проверява на случайни айети, че всеки рецитатор има записи из целия Коран
import fs from 'fs';
const src = fs.readFileSync(new URL('../js/audio.js', import.meta.url), 'utf8');
const ids = [...src.matchAll(/id: '([^']+)'/g)].map(m => m[1]);
const meta = JSON.parse(fs.readFileSync(new URL('../data/meta.json', import.meta.url)));
const pad = n => String(n).padStart(3, '0');
const sample = [[1, 1], [2, 286], [9, 129], [18, 110], [36, 83], [55, 78], [67, 30], [78, 40], [114, 6]];
for (let i = 0; i < 16; i++) { const s = 1 + Math.floor(Math.random() * 114); sample.push([s, 1 + Math.floor(Math.random() * meta.surahs[s - 1].ayahs)]); }
for (const id of ids) {
  const bad = [];
  await Promise.all(sample.map(async ([s, a]) => {
    for (let t = 0; t < 3; t++) { try { const r = await fetch(`https://everyayah.com/data/${id}/${pad(s)}${pad(a)}.mp3`, { method: 'HEAD' }); if (r.ok) return; if (r.status === 404) break; } catch {} }
    bad.push(`${s}:${a}`);
  }));
  console.log(bad.length ? 'ЛИПСВАТ' : 'OK     ', id, bad.join(' '));
}
