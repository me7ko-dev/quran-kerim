// Аудио по айети от EveryAyah.com (безплатни записи на известни рецитатори)
export const RECITERS = [
  { id: 'Alafasy_128kbps', name: 'Мишари Рашид ал-Афаси', note: 'Кувейт · муреттел' },
  { id: 'Abdul_Basit_Murattal_192kbps', name: 'Абдулбасит Абдуссамед', note: 'Египет · муреттел' },
  { id: 'Abdul_Basit_Mujawwad_128kbps', name: 'Абдулбасит Абдуссамед', note: 'Египет · муджеввед (напевно)' },
  { id: 'Husary_128kbps', name: 'Махмуд Халил ал-Хусари', note: 'Египет · муреттел' },
  { id: 'Husary_Muallim_128kbps', name: 'Махмуд Халил ал-Хусари', note: 'Муаллим — бавно, за учене' },
  { id: 'Minshawy_Murattal_128kbps', name: 'Мухаммед Сиддик ал-Миншави', note: 'Египет · муреттел' },
  { id: 'Minshawy_Mujawwad_192kbps', name: 'Мухаммед Сиддик ал-Миншави', note: 'Египет · муджеввед (напевно)' },
  { id: 'Abdurrahmaan_As-Sudais_192kbps', name: 'Абдуррахман ас-Судейс', note: 'Имам на Харам, Мека' },
  { id: 'Saood_ash-Shuraym_128kbps', name: 'Сауд аш-Шурейм', note: 'Имам на Харам, Мека' },
  { id: 'MaherAlMuaiqly128kbps', name: 'Махир ал-Муайкли', note: 'Имам на Харам, Мека' },
  { id: 'Yasser_Ad-Dussary_128kbps', name: 'Ясир ад-Досари', note: 'Имам на Харам, Мека' },
  { id: 'Salah_Al_Budair_128kbps', name: 'Салах ал-Будейр', note: 'Мединска джамия' },
  { id: 'Hudhaify_128kbps', name: 'Али ал-Хузейфи', note: 'Мединска джамия' },
  { id: 'Muhammad_Ayyoub_128kbps', name: 'Мухаммед Айюб', note: 'Мединска джамия' },
  { id: 'Ghamadi_40kbps', name: 'Саад ал-Гамиди', note: 'Саудитска Арабия' },
  { id: 'Abu_Bakr_Ash-Shaatree_128kbps', name: 'Абу Бакр аш-Шатри', note: 'Саудитска Арабия' },
  { id: 'Ahmed_ibn_Ali_al-Ajamy_128kbps_ketaballah.net', name: 'Ахмед ал-Аджами', note: 'Саудитска Арабия' },
  { id: 'Nasser_Alqatami_128kbps', name: 'Насир ал-Катами', note: 'Саудитска Арабия' },
  { id: 'Fares_Abbad_64kbps', name: 'Фарес Аббад', note: 'Саудитска Арабия' },
  { id: 'Khaalid_Abdullaah_al-Qahtaanee_192kbps', name: 'Халид ал-Катани', note: 'Саудитска Арабия' },
  { id: 'Abdullah_Basfar_192kbps', name: 'Абдуллах Басфар', note: 'Саудитска Арабия' },
  { id: 'Muhsin_Al_Qasim_192kbps', name: 'Мухсин ал-Касим', note: 'Саудитска Арабия' },
  { id: 'Hani_Rifai_192kbps', name: 'Хани ар-Рифаи', note: 'Саудитска Арабия' },
  { id: 'Muhammad_Jibreel_128kbps', name: 'Мухаммед Джибрил', note: 'Египет' },
  { id: 'Mohammad_al_Tablaway_128kbps', name: 'Мухаммед ат-Таблави', note: 'Египет' },
];
export const reciterById = id => RECITERS.find(r => r.id === id) || RECITERS[0];
const pad = n => String(n).padStart(3, '0');
export const audioUrl = (r, s, a) => `https://everyayah.com/data/${r}/${pad(s)}${pad(a)}.mp3`;

// Един <audio> елемент (важно за iPhone — само той е „отключен“ от докосването),
// плюс втори, който само предварително изтегля следващия айет.
export class Player extends EventTarget {
  constructor(ayahCount) {
    super();
    this.count = ayahCount;          // функция: сура → брой айети
    this.el = new Audio();
    this.el.preload = 'auto';
    this.pre = new Audio();
    this.pre.preload = 'auto';
    this.pre.muted = true;
    this.cur = null;                 // { s, a, bism }
    this.mode = 'continue';          // single | continue | repeat | range
    this.repeatN = 3;
    this.rep = 1;
    this.range = null;               // заучаване: { s, from, to, each, loops } (loops 0 = без край)
    this.loop = 1;
    this.reciter = 'Alafasy_128kbps';
    this.rate = 1;
    this.autoNext = true;
    this.loading = false;
    this.errors = 0;
    const el = this.el;
    el.addEventListener('ended', () => this.advance());
    el.addEventListener('playing', () => { this.loading = false; this.errors = 0; this.emit(); });
    el.addEventListener('pause', () => this.emit());
    el.addEventListener('waiting', () => { this.loading = true; this.emit(); });
    el.addEventListener('timeupdate', () => this.dispatchEvent(new CustomEvent('time', { detail: el.duration ? el.currentTime / el.duration : 0 })));
    el.addEventListener('error', () => {
      if (!this.cur) return;
      this.loading = false;
      if (++this.errors <= 2 && navigator.onLine !== false) { setTimeout(() => this.load(true), 800); return; }
      this.dispatchEvent(new CustomEvent('fail'));
      this.emit();
    });
    if ('mediaSession' in navigator) {
      const ms = navigator.mediaSession;
      ms.setActionHandler('play', () => this.resume());
      ms.setActionHandler('pause', () => this.pause());
      ms.setActionHandler('previoustrack', () => this.step(-1));
      ms.setActionHandler('nexttrack', () => this.step(1));
      try { ms.setActionHandler('stop', () => this.stop()); } catch (e) {}
    }
  }
  get playing() { return !!this.cur && !this.el.paused; }
  emit() { this.dispatchEvent(new CustomEvent('state')); }

  // mode: single — само този айет; continue — нататък поред; repeat — този айет N пъти;
  // range — откъс за заучаване (виж playRange)
  play(s, a, mode = this.mode) {
    const R = this.range;
    if (mode === 'range' && !(R && R.s === s && a >= R.from && a <= R.to)) mode = 'continue';
    if (mode === 'range' && this.done) this.loop = 1; // откъсът беше завършен — нови кръгове
    this.mode = mode;
    this.rep = 1;
    const bism = mode === 'continue' && a === 1 && s !== 1 && s !== 9;
    this.cur = { s, a, bism };
    this.load(true);
  }
  // Всеки айет от откъса се чете `each` пъти, после целият откъс отначало — `loops` пъти
  playRange(s, from, to, each, loops) {
    this.range = { s, from, to, each, loops };
    this.loop = 1;
    this.play(s, from, 'range');
  }
  load(autoplay) {
    const { s, a, bism } = this.cur;
    this.done = false;
    this.el.src = bism ? audioUrl(this.reciter, 1, 1) : audioUrl(this.reciter, s, a);
    this.el.playbackRate = this.rate;
    this.el.defaultPlaybackRate = this.rate;
    this.loading = true;
    if (autoplay) this.el.play().catch(() => { this.loading = false; this.emit(); });
    this.emit();
    this.preloadNext();
    this.updateSession();
  }
  nextItem() {
    const { s, a, bism } = this.cur;
    if (bism) return { s, a, bism: false };
    if (this.mode === 'single') return null;
    if (this.mode === 'repeat') return this.rep < this.repeatN ? { s, a, bism: false, again: true } : null;
    if (this.mode === 'range') {
      const R = this.range;
      if (this.rep < R.each) return { s, a, bism: false, again: true };
      if (a < R.to) return { s, a: a + 1, bism: false };
      return !R.loops || this.loop < R.loops ? { s, a: R.from, bism: false, round: true } : null;
    }
    if (a < this.count(s)) return { s, a: a + 1, bism: false };
    if (this.autoNext && s < 114) return { s: s + 1, a: 1, bism: s + 1 !== 9 };
    return null;
  }
  preloadNext() {
    const n = this.nextItem();
    if (!n || n.again) return;
    const u = n.bism ? audioUrl(this.reciter, 1, 1) : audioUrl(this.reciter, n.s, n.a);
    if (this.pre.src !== u) { this.pre.src = u; this.pre.load(); }
  }
  advance() {
    const n = this.nextItem();
    if (!n) { this.cur = { ...this.cur, bism: false }; this.el.pause(); this.done = true; this.emit(); this.dispatchEvent(new CustomEvent('end')); return; }
    if (n.again) { this.rep++; this.el.currentTime = 0; this.el.play(); this.emit(); return; }
    this.rep = 1;
    if (n.round) this.loop++;
    this.cur = { s: n.s, a: n.a, bism: n.bism };
    this.load(true);
  }
  step(d) {
    if (!this.cur) return;
    let { s, a } = this.cur;
    a += d;
    const R = this.mode === 'range' && this.range;
    if (R) a = Math.max(R.from, Math.min(R.to, a)); // при заучаване остава в откъса
    else if (a < 1) { if (s === 1) a = 1; else { s--; a = this.count(s); } }
    else if (a > this.count(s)) { if (s === 114) a = this.count(s); else { s++; a = 1; } }
    this.rep = 1;
    this.cur = { s, a, bism: false };
    this.load(true);
  }
  toggle() { this.playing ? this.pause() : this.resume(); }
  pause() { this.el.pause(); }
  resume() {
    if (!this.cur) return;
    if (this.done) {
      const R = this.range;
      if (this.mode === 'range') this.playRange(R.s, R.from, R.to, R.each, R.loops); // откъсът отначало
      else this.play(this.cur.s, this.cur.a);
      return;
    }
    this.el.play().catch(() => {});
  }
  stop() { this.el.pause(); this.el.removeAttribute('src'); this.el.load(); this.cur = null; this.emit(); }
  setReciter(id) {
    this.reciter = id;
    if (this.cur) { const was = this.playing; this.load(was); }
  }
  setRate(r) { this.rate = r; this.el.playbackRate = r; this.el.defaultPlaybackRate = r; }
  updateSession() {
    if (!('mediaSession' in navigator) || !this.cur || !this.meta) return;
    const m = this.meta(this.cur.s);
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: `${m.name} ${this.cur.s}:${this.cur.a}`, artist: reciterById(this.reciter).name, album: 'Куран-и Керим',
        artwork: [{ src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' }],
      });
    } catch (e) {}
  }
}
