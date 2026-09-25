// Турски превод (мял) на Диянет (Diyanet İşleri) от Tanzil.net, чрез отворения набор fawazahmed0/quran-api.
// Пише data/tr/<сура>.json — масив с превода на всеки айет. Пуска се еднократно: node tools/fetch-turkish.mjs
import fs from 'fs';
import path from 'path';
const here = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));
const URL_ = 'https://raw.githubusercontent.com/fawazahmed0/quran-api/1/editions/tur-diyanetisleri.json';
const meta = JSON.parse(fs.readFileSync(path.join(here, '../data/meta.json')));
const { quran } = await (await fetch(URL_)).json();
const out = path.join(here, '../data/tr');
fs.mkdirSync(out, { recursive: true });
let i = 0;
for (const s of meta.surahs) {
  const ayahs = [];
  for (let a = 1; a <= s.ayahs; a++) {
    const v = quran[i++];
    if (!v || v.chapter !== s.n || v.verse !== a || !v.text.trim()) throw new Error(`Несъответствие при ${s.n}:${a}`);
    ayahs.push(v.text.trim());
  }
  fs.writeFileSync(path.join(out, s.n + '.json'), JSON.stringify(ayahs));
}
if (i !== quran.length) throw new Error(`Излишни айети: ${quran.length - i}`);
console.log(`Записани ${meta.surahs.length} сури, ${i} айета в data/tr/`);
