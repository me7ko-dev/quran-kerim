// Сглобява data/places.json: всички населени места в България от OpenStreetMap (ODbL)
import fs from 'fs';
const nodes = JSON.parse(fs.readFileSync('osm1.json')).elements;
const byArea = f => { const m = {}; let cur; for (const e of JSON.parse(fs.readFileSync(f)).elements) { if (e.type === 'area') cur = e.tags.name; else m[e.id] = cur; } return m; };
const obl = byArea('osm2.json'), obs = byArea('osm3.json');
const T = { city: 0, town: 0, village: 1, hamlet: 2 };
const out = [];
for (const n of nodes) {
  const name = /[а-яА-Я]/.test(n.tags.name || '') ? n.tags.name : n.tags['name:bg'];
  if (!name || !obl[n.id]) continue;
  out.push([name, T[n.tags.place], +n.lat.toFixed(4), +n.lon.toFixed(4), (obl[n.id] || '').replace(/^Област /, ''), (obs[n.id] || '').replace(/^Община /, '')]);
}
out.sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0], 'bg'));
fs.writeFileSync('../data/places.json', JSON.stringify(out));
console.log(out.length, 'без община:', out.filter(p => !p[5]).length, out.slice(0, 3), out.find(p => p[0] === 'Рибново'));
