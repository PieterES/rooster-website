// Synthesises background music for the demo pages. Everything is generated in code
// (no samples), so the tracks are free of third-party copyright.
//
//   node scripts/demo-videos/make-music.mjs              → every preset into music-samples/
//   node scripts/demo-videos/make-music.mjs bossa        → one preset into music-samples/
//   node scripts/demo-videos/make-music.mjs --use bossa  → render it as public/audio/demo-music.mp3
import ffmpegPath from 'ffmpeg-static';
import { spawnSync } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const SR = 44100;
const root = join(dirname(fileURLToPath(import.meta.url)), '../..');
const hz = (midi) => 440 * Math.pow(2, (midi - 69) / 12);

// ---------------------------------------------------------------------------
// Instruments: each returns a mono Float32Array starting at the note-on.
// ---------------------------------------------------------------------------
const make = (seconds, fn) => {
  const n = Math.round(seconds * SR);
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) out[i] = fn(i / SR, i);
  return out;
};
const release = (t, dur, speed) => (t < dur ? 1 : Math.exp(-(t - dur) * speed));
const attack = (t, time) => Math.min(1, t / time);

const inst = {
  // two-operator FM, Rhodes-like
  epiano: (f, dur, vel) =>
    make(dur + 1.5, (t) => {
      const index = 1.6 * Math.exp(-t * 5) * vel + 0.15;
      const s = Math.sin(2 * Math.PI * f * t + Math.sin(2 * Math.PI * f * t) * index) + Math.sin(2 * Math.PI * f * 14 * t) * Math.exp(-t * 40) * 0.04;
      return s * Math.exp(-t * 1.6) * release(t, dur, 6) * attack(t, 0.004) * vel;
    }),

  // additive piano with slight inharmonicity and a soft hammer
  piano: (f, dur, vel) =>
    make(dur + 2.5, (t) => {
      let s = 0;
      for (let k = 1; k <= 7; k++) s += (Math.sin(2 * Math.PI * f * k * Math.sqrt(1 + 0.0004 * k * k) * t) / (k * k * 0.8)) * Math.exp(-t * (0.8 + k * 0.7));
      return s * release(t, dur, 4) * attack(t, 0.003) * vel * 0.8;
    }),

  // Karplus-Strong plucked string; brightness 0..1 (nylon ≈ 0.3, steel ≈ 0.8)
  pluck: (f, dur, vel, brightness = 0.6) => {
    const n = Math.round((dur + 1.2) * SR);
    const out = new Float32Array(n);
    const period = Math.max(2, Math.round(SR / f));
    const buf = new Float32Array(period);
    let low = 0;
    for (let i = 0; i < period; i++) {
      low = low * (1 - brightness) + (Math.random() * 2 - 1) * brightness;
      buf[i] = low;
    }
    const damp = 0.996 - (1 - brightness) * 0.004;
    for (let i = 0; i < n; i++) {
      const j = i % period;
      const next = buf[(i + 1) % period];
      buf[j] = (buf[j] + next) * 0.5 * damp;
      out[i] = buf[j] * release(i / SR, dur, 8) * vel;
    }
    return out;
  },

  marimba: (f, vel) =>
    make(1.2, (t) => (Math.sin(2 * Math.PI * f * t) + 0.35 * Math.sin(2 * Math.PI * f * 3.93 * t) * Math.exp(-t * 18)) * Math.exp(-t * 5.5) * attack(t, 0.0015) * vel),

  vibes: (f, dur, vel) =>
    make(dur + 1.8, (t) => {
      const trem = 1 - 0.25 * (0.5 + 0.5 * Math.sin(2 * Math.PI * 5.2 * t));
      return (Math.sin(2 * Math.PI * f * t) + 0.18 * Math.sin(2 * Math.PI * f * 4 * t) * Math.exp(-t * 6)) * Math.exp(-t * 1.1) * release(t, dur, 3) * attack(t, 0.002) * trem * vel;
    }),

  kalimba: (f, vel) =>
    make(1.8, (t) => (Math.sin(2 * Math.PI * f * t) + 0.3 * Math.sin(2 * Math.PI * f * 3.01 * t) * Math.exp(-t * 9)) * Math.exp(-t * 3.2) * attack(t, 0.002) * vel),

  glock: (f, vel) =>
    make(1.5, (t) => (Math.sin(2 * Math.PI * f * t) + 0.4 * Math.sin(2 * Math.PI * f * 2.76 * t) * Math.exp(-t * 7)) * Math.exp(-t * 3.8) * attack(t, 0.001) * vel),

  // soft detuned pad (band-limited saw: a handful of harmonics)
  pad: (f, dur, vel) =>
    make(dur + 1.5, (t) => {
      let s = 0;
      for (const detune of [-0.06, 0, 0.07]) {
        const ff = f * Math.pow(2, detune / 12);
        for (let k = 1; k <= 5; k++) s += Math.sin(2 * Math.PI * ff * k * t + k) / (k * 1.6);
      }
      return (s / 3) * attack(t, 0.6) * release(t, dur, 2.5) * vel;
    }),

  // saxophone-ish lead: formant-shaped harmonics, scoop into the note, delayed vibrato, breath
  sax: (f, dur, vel) => {
    const formant = (fr) => Math.exp(-(((fr - 1100) / 650) ** 2)) + 0.55 * Math.exp(-(((fr - 2600) / 900) ** 2)) + 0.25;
    const harmonics = [];
    for (let k = 1; k <= 16 && k * f < 9000; k++) harmonics.push([k, formant(k * f) / Math.pow(k, 0.65)]);
    let phase = 0;
    let breath = 0;
    return make(dur + 0.35, (t) => {
      const scoop = Math.pow(2, (-0.9 * Math.exp(-t * 22)) / 12);
      const vibDepth = Math.min(1, Math.max(0, (t - 0.22) / 0.3)) * 0.012;
      const fi = f * scoop * (1 + vibDepth * Math.sin(2 * Math.PI * 5.3 * t));
      phase += (2 * Math.PI * fi) / SR;
      const env = attack(t, 0.06) * (t < dur ? 1 - 0.15 * Math.min(1, t / 1.5) : 0.85 * Math.exp(-(t - dur) * 14));
      let s = 0;
      for (const [k, a] of harmonics) s += Math.sin(k * phase) * a * Math.pow(env, (k - 1) * 0.12);
      breath = breath * 0.7 + (Math.random() * 2 - 1) * 0.3;
      return (s * 0.35 + breath * 0.05) * env * vel;
    });
  },

  bass: (f, dur, vel) =>
    make(dur + 0.3, (t) => {
      const s = Math.sin(2 * Math.PI * f * t) + 0.25 * Math.sin(4 * Math.PI * f * t) + 0.08 * Math.sin(6 * Math.PI * f * t);
      const env = attack(t, 0.01) * (t < dur ? Math.exp(-t * 1.2) : Math.exp(-dur * 1.2) * Math.exp(-(t - dur) * 25));
      return Math.tanh(s * 1.3) * env * vel;
    }),

  kick: (vel, punch = 1) => {
    let phase = 0;
    return make(0.45, (t) => {
      phase += (2 * Math.PI * (48 + 90 * punch * Math.exp(-t * 28))) / SR;
      return Math.sin(phase) * Math.exp(-t * 9) * vel;
    });
  },

  // filtered noise with an optional tonal body: snares, rims, hats, shakers
  noise: (dur, decay, hp, lp, tone, vel, swell = 0) => {
    let low = 0, prev = 0, hpOut = 0;
    const aL = Math.exp((-2 * Math.PI * lp) / SR);
    const aH = Math.exp((-2 * Math.PI * hp) / SR);
    return make(dur, (t) => {
      low = low * aL + (Math.random() * 2 - 1) * (1 - aL);
      hpOut = aH * (hpOut + low - prev);
      prev = low;
      const body = tone ? Math.sin(2 * Math.PI * tone * t) * Math.exp(-t * 30) * 0.6 : 0;
      return (hpOut + body) * Math.exp(-t * decay) * (swell ? attack(t, swell) : 1) * vel;
    });
  },

  clap: (vel) => {
    const out = new Float32Array(Math.round(0.3 * SR));
    for (const [offset, g] of [[0, 0.7], [0.011, 0.8], [0.022, 1]]) {
      const burst = inst.noise(0.25, offset === 0.022 ? 16 : 120, 1200, 6000, 0, g);
      const o = Math.round(offset * SR);
      for (let i = 0; i < burst.length && o + i < out.length; i++) out[o + i] += burst[i];
    }
    return out.map((x) => x * vel);
  },
};

const drums = {
  rim: (v = 1) => inst.noise(0.12, 45, 1500, 7000, 820, v * 0.8),
  snare: (v = 1) => inst.noise(0.3, 18, 700, 6000, 185, v),
  softSnare: (v = 1) => inst.noise(0.25, 22, 900, 5000, 190, v),
  hat: (v = 1) => inst.noise(0.08, 70, 6000, 14000, 0, v),
  shaker: (v = 1) => inst.noise(0.12, 35, 5000, 12000, 0, v, 0.03),
};

// ---------------------------------------------------------------------------
// Song helpers
// ---------------------------------------------------------------------------
function song({ bpm, bars = 16, swing = 0.5, seed = 7 }) {
  const beat = 60 / bpm;
  const bar = beat * 4;
  const len = Math.round(bar * bars * SR);
  const tail = 4 * SR;
  const L = new Float32Array(len + tail);
  const R = new Float32Array(len + tail);
  let s = seed;
  const rand = () => (s = (s * 16807) % 2147483647) / 2147483647;
  Math.random = rand; // deterministic noise in the instruments too

  const at = (b, bt) => {
    const whole = Math.floor(bt);
    const frac = bt - whole;
    return b * bar + (whole + (Math.abs(frac - 0.5) < 1e-9 ? swing : frac)) * beat;
  };
  const add = (t, samples, gain, pan = 0) => {
    const start = Math.round(t * SR);
    const gl = gain * Math.cos(((pan + 1) * Math.PI) / 4);
    const gr = gain * Math.sin(((pan + 1) * Math.PI) / 4);
    for (let i = 0; i < samples.length; i++) {
      const j = start + i;
      if (j >= 0 && j < L.length) {
        L[j] += samples[i] * gl;
        R[j] += samples[i] * gr;
      }
    }
  };
  const human = (x) => (rand() - 0.5) * x;
  return { beat, bar, bars, len, tail, L, R, at, add, human, rand };
}

// chord = root (midi) + intervals; voiced into a range around middle C
const chord = (rootNote, ...intervals) => ({ root: rootNote, notes: intervals.map((i) => rootNote + i) });
const voice = (notes, lo = 57, hi = 72) => notes.map((n) => { while (n > hi) n -= 12; while (n < lo) n += 12; return n; }).sort((a, b) => a - b);
const bassNote = (c) => { let n = c.root; while (n > 47) n -= 12; while (n < 36) n += 12; return n; };
const pick = (c, i, octave = 0) => voice(c.notes)[((i % c.notes.length) + c.notes.length) % c.notes.length] + octave;

// Small Schroeder/Freeverb-style room; runs over the loop twice so the tail wraps seamlessly.
function reverb(L, R, len, wet) {
  const combs = [1116, 1188, 1277, 1356];
  const allpasses = [556, 441];
  const channel = (input, spread) => {
    const cb = combs.map((d) => ({ buf: new Float32Array(d + spread), i: 0, low: 0 }));
    const ap = allpasses.map((d) => ({ buf: new Float32Array(d + spread), i: 0 }));
    const out = new Float32Array(len);
    for (let pass = 0; pass < 2; pass++) {
      for (let n = 0; n < len; n++) {
        const x = input[n] * 0.12;
        let y = 0;
        for (const c of cb) {
          const v = c.buf[c.i];
          c.low = v * 0.7 + c.low * 0.3; // damping
          c.buf[c.i] = x + c.low * 0.82;
          c.i = (c.i + 1) % c.buf.length;
          y += v;
        }
        for (const a of ap) {
          const v = a.buf[a.i];
          a.buf[a.i] = y + v * 0.5;
          a.i = (a.i + 1) % a.buf.length;
          y = v - y * 0.5;
        }
        if (pass) out[n] = y;
      }
    }
    return out;
  };
  const wl = channel(L, 0);
  const wr = channel(R, 23);
  for (let n = 0; n < len; n++) {
    L[n] += wl[n] * wet;
    R[n] += wr[n] * wet;
  }
}

function finish(sg, { lowpass = 9000, crackle = false, drive = 1.1, room = 0 } = {}) {
  const { L, R, len, tail, rand } = sg;
  for (let i = 0; i < tail; i++) { L[i] += L[len + i]; R[i] += R[len + i]; }
  if (room) reverb(L, R, len, room);
  const a = Math.exp((-2 * Math.PI * lowpass) / SR);
  const outL = new Float32Array(len), outR = new Float32Array(len);
  let lL = 0, lR = 0;
  // run the filter over the loop twice so its state at the start matches the end
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < len; i++) {
      lL = lL * a + L[i] * (1 - a);
      lR = lR * a + R[i] * (1 - a);
      if (pass === 0) continue;
      const c = crackle ? (rand() < 0.0004 ? (rand() - 0.5) * 0.06 : 0) + (rand() - 0.5) * 0.0025 : 0;
      outL[i] = Math.tanh((lL + c) * drive);
      outR[i] = Math.tanh((lR + c) * drive);
    }
  }
  return { outL, outR, len };
}

// ---------------------------------------------------------------------------
// Presets
// ---------------------------------------------------------------------------
const presets = {
  // Warm lo-fi café: electric piano, round bass, swung soft drums, kalimba melody
  'cafe-lofi': {
    desc: 'Warme lo-fi café — Rhodes, swing, kalimba (92 BPM)',
    render() {
      const sg = song({ bpm: 92, swing: 0.58 });
      const { at, add, human } = sg;
      const prog = [chord(53, 0, 4, 7, 11, 14), chord(57, 0, 3, 7, 10), chord(50, 0, 3, 7, 10, 14), chord(58, 0, 4, 7, 11),
        chord(55, 0, 3, 7, 10, 14), chord(60, 0, 5, 7, 10), chord(53, 0, 4, 7, 11), chord(60, 0, 4, 7, 10)];
      for (let b = 0; b < 16; b++) {
        const c = prog[b % 8], v = voice(c.notes);
        const hits = [[0, 1.4, 0.55], [1.5, 1.8, 0.4], ...(b % 2 ? [[3.5, 0.4, 0.28]] : [])];
        for (const [bt, len, vel] of hits) v.forEach((n, k) => add(at(b, bt) + k * 0.012 + human(0.01), inst.epiano(hz(n), len * sg.beat, vel), 0.11, (k / (v.length - 1)) * 0.6 - 0.3));
        const bn = bassNote(c), next = bassNote(prog[(b + 1) % 8]);
        add(at(b, 0), inst.bass(hz(bn), sg.beat * 1.4, 0.9), 0.32);
        add(at(b, 1.5), inst.bass(hz(bn + 7), sg.beat * 0.9, 0.7), 0.3);
        add(at(b, 3.5), inst.bass(hz(next + (next > bn ? -1 : 1)), sg.beat * 0.4, 0.6), 0.28);
        add(at(b, 0), inst.kick(1), 0.55);
        add(at(b, 2.5), inst.kick(0.75), 0.5);
        for (const bt of [1, 3]) add(at(b, bt) + human(0.006), drums.softSnare(), 0.2, 0.1);
        for (let e = 0; e < 8; e++) add(at(b, e / 2) + human(0.008), drums.hat((e % 2 ? 0.55 : 0.9) + human(0.25)), 0.07, 0.35);
        if (b >= 8) {
          const motif = b % 2 ? [[0, 77], [1.5, 79], [2, 81], [3.5, 84]] : [[0, 81], [0.5, 79], [1, 77], [2.5, 76], [3, 74]];
          for (const [bt, n] of motif) add(at(b, bt) + human(0.01), inst.kalimba(hz(n), 0.7), 0.085, -0.25);
        }
      }
      return finish(sg, { lowpass: 7500, crackle: true, drive: 1.2 });
    },
  },

  // Bright acoustic fingerpicking with shaker and claps — friendly, optimistic
  'acoustic-sunny': {
    desc: 'Zonnig akoestisch — gitaar fingerpicking, shaker, klappen (108 BPM)',
    render() {
      const sg = song({ bpm: 108, swing: 0.52, seed: 11 });
      const { at, add, human } = sg;
      const prog = [chord(55, 0, 4, 7, 12), chord(50, 0, 4, 7, 12), chord(52, 0, 3, 7, 12), chord(48, 0, 4, 7, 12)]; // G D Em C
      const pattern = [0, 2, 1, 3, 2, 1, 3, 2]; // fingerpicking order over the voiced chord
      for (let b = 0; b < 16; b++) {
        const c = prog[b % 4], v = voice(c.notes, 55, 74);
        add(at(b, 0), inst.pluck(hz(bassNote(c) + 12), sg.beat * 2, 0.9, 0.7), 0.3, -0.15);
        add(at(b, 2), inst.pluck(hz(bassNote(c) + 19), sg.beat * 2, 0.8, 0.7), 0.26, -0.15);
        pattern.forEach((p, e) => add(at(b, e / 2) + human(0.008), inst.pluck(hz(v[p % v.length]), sg.beat, 0.6 + human(0.15), 0.75), 0.18, 0.25));
        add(at(b, 0), inst.bass(hz(bassNote(c)), sg.beat * 1.8, 0.8), 0.26);
        add(at(b, 2), inst.bass(hz(bassNote(c)), sg.beat * 1.5, 0.7), 0.24);
        add(at(b, 0), inst.kick(0.8, 0.7), 0.42);
        add(at(b, 2.5), inst.kick(0.6, 0.7), 0.36);
        for (const bt of [1, 3]) add(at(b, bt) + human(0.006), inst.clap(0.9), 0.15, 0.05);
        for (let x = 0; x < 16; x++) add(at(b, x / 4) + human(0.006), drums.shaker(x % 2 ? 0.5 : 0.9), 0.06, -0.4);
        if (b >= 8) {
          const mel = b % 2 ? [[0, 2], [1, 1], [1.5, 2], [2, 3]] : [[0, 3], [0.5, 2], [1, 1], [2, 2], [3, 0]];
          for (const [bt, i] of mel) add(at(b, bt), inst.glock(hz(pick(c, i, 24)), 0.6), 0.07, 0.3);
        }
      }
      return finish(sg, { lowpass: 11000, drive: 1.05 });
    },
  },

  // Bossa nova: nylon guitar comping, rim clave, walking bass, vibraphone melody
  'bossa-terrace': {
    desc: 'Bossa nova terras — nylon gitaar, rimclick, vibrafoon (124 BPM)',
    render() {
      const sg = song({ bpm: 124, swing: 0.5, seed: 23 });
      const { at, add, human } = sg;
      const prog = [chord(50, 0, 3, 7, 10, 14), chord(55, 0, 4, 10, 14), chord(48, 0, 4, 7, 11, 14), chord(48, 0, 4, 7, 11, 14),
        chord(52, 0, 3, 7, 10), chord(57, 0, 4, 10, 13), chord(50, 0, 3, 7, 10, 14), chord(55, 0, 4, 10, 14)]; // Dm9 G9 Cmaj9 Cmaj9 Em7 A7b9 Dm9 G9
      const comp = [[0, 1.5, 3], [0.5, 2, 3.5]]; // two-bar bossa rhythm
      for (let b = 0; b < 16; b++) {
        const c = prog[b % 8], v = voice(c.notes, 57, 71);
        for (const bt of comp[b % 2]) v.forEach((n, k) => add(at(b, bt) + k * 0.006 + human(0.006), inst.pluck(hz(n), sg.beat * 0.9, 0.5, 0.3), 0.15, 0.2));
        const bn = bassNote(c);
        add(at(b, 0), inst.pluck(hz(bn + 12), sg.beat * 1.4, 0.8, 0.35), 0.28, -0.1);
        add(at(b, 2), inst.pluck(hz(bn + 19), sg.beat * 1.4, 0.7, 0.35), 0.24, -0.1);
        add(at(b, 0), inst.bass(hz(bn), sg.beat * 1.3, 0.7), 0.24);
        add(at(b, 1.5), inst.bass(hz(bn + 7), sg.beat * 0.4, 0.5), 0.2);
        add(at(b, 2), inst.bass(hz(bn + 7), sg.beat * 1.3, 0.6), 0.22);
        for (const bt of comp[(b + 1) % 2]) add(at(b, bt) + human(0.004), drums.rim(0.9), 0.1, -0.3);
        for (let e = 0; e < 8; e++) add(at(b, e / 2) + human(0.006), drums.shaker(e % 2 ? 0.45 : 0.8), 0.05, 0.4);
        add(at(b, 0), inst.kick(0.5, 0.5), 0.3);
        add(at(b, 2.5), inst.kick(0.4, 0.5), 0.25);
        if (b >= 8) {
          const mel = b % 2 ? [[0, 3, 1.5], [2, 2, 1]] : [[0, 1, 0.5], [0.5, 2, 0.5], [1, 3, 1], [2.5, 4, 1.5]];
          for (const [bt, i, d] of mel) add(at(b, bt), inst.vibes(hz(pick(c, i, 12)), sg.beat * d, 0.6), 0.1, -0.2);
        }
      }
      return finish(sg, { lowpass: 9000, drive: 1.05 });
    },
  },

  // Light upbeat pop: marimba ostinato, soft four-on-the-floor, claps, pad
  'marimba-pop': {
    desc: 'Vrolijke pop — marimba, zachte beat, pad (112 BPM)',
    render() {
      const sg = song({ bpm: 112, swing: 0.5, seed: 31 });
      const { at, add, human } = sg;
      const prog = [chord(50, 0, 4, 7), chord(47, 0, 3, 7), chord(55, 0, 4, 7), chord(57, 0, 4, 7)]; // D Bm G A
      const ost = [0, 2, 3, 2, 1, 2, 3, 2];
      for (let b = 0; b < 16; b++) {
        const c = prog[b % 4];
        const v = voice([...c.notes, c.root + 12], 62, 79);
        ost.forEach((i, e) => add(at(b, e / 2) + human(0.004), inst.marimba(hz(v[i % v.length]), 0.75 + (e % 2 ? 0 : 0.15)), 0.2, (e % 2 ? 0.3 : -0.3)));
        voice(c.notes, 55, 67).forEach((n) => add(at(b, 0), inst.pad(hz(n), sg.bar * 0.95, 0.5), 0.045));
        for (let e = 0; e < 8; e++) add(at(b, e / 2), inst.bass(hz(bassNote(c)), sg.beat * 0.4, e % 2 ? 0.55 : 0.8), 0.2);
        for (let q = 0; q < 4; q++) add(at(b, q), inst.kick(0.7, 0.8), 0.4);
        for (const bt of [1, 3]) add(at(b, bt), inst.clap(1), 0.14);
        for (let e = 0; e < 8; e++) if (e % 2) add(at(b, e / 2), drums.hat(0.9), 0.07, 0.3);
        if (b >= 8) {
          const mel = b % 2 ? [[0, 2], [1, 3], [2, 2], [3, 1]] : [[0, 3], [0.5, 3], [1, 2], [2, 1], [2.5, 2]];
          for (const [bt, i] of mel) add(at(b, bt), inst.pluck(hz(pick(c, i, 12)), sg.beat * 0.8, 0.7, 0.85), 0.14, 0.1);
        }
      }
      return finish(sg, { lowpass: 12000, drive: 1.05 });
    },
  },

  // Calm solo piano over a soft pad, no drums — understated and focused
  'calm-piano': {
    desc: 'Rustige piano — zacht, geen drums (76 BPM)',
    render() {
      const sg = song({ bpm: 76, swing: 0.5, seed: 43 });
      const { at, add, human } = sg;
      const prog = [chord(48, 0, 4, 7, 11), chord(57, 0, 3, 7, 10), chord(53, 0, 4, 7, 11, 14), chord(55, 0, 4, 7, 9)]; // Cmaj7 Am7 Fmaj9 G6
      for (let b = 0; b < 16; b++) {
        const c = prog[b % 4], v = voice(c.notes, 60, 76);
        add(at(b, 0), inst.piano(hz(bassNote(c)), sg.bar, 0.8), 0.3, -0.1);
        add(at(b, 0), inst.piano(hz(bassNote(c) + 7), sg.bar, 0.5), 0.2, -0.1);
        [0, 1, 2, 1, 3, 2, 1, 2].forEach((i, e) => add(at(b, e / 2) + human(0.012), inst.piano(hz(v[i % v.length]), sg.beat * 1.5, 0.45 + human(0.1)), 0.17, 0.15));
        voice(c.notes, 52, 64).forEach((n) => add(at(b, 0), inst.pad(hz(n), sg.bar, 0.4), 0.03));
        if (b >= 8) {
          const mel = b % 2 ? [[0, 2, 2], [2, 1, 2]] : [[0, 3, 1], [1, 2, 1], [2, 4, 2]];
          for (const [bt, i, d] of mel) add(at(b, bt), inst.piano(hz(pick(c, i, 12)), sg.beat * d, 0.6), 0.16, -0.15);
        }
      }
      return finish(sg, { lowpass: 8000, drive: 1.0 });
    },
  },

  // Chillhop: vibraphone chords, boom-bap drums, vinyl — relaxed but with groove
  'chillhop-vibes': {
    desc: 'Chillhop — vibrafoon, boom-bap beat, vinyl (86 BPM)',
    render() {
      const sg = song({ bpm: 86, swing: 0.6, seed: 57 });
      const { at, add, human } = sg;
      const prog = [chord(57, 0, 3, 7, 10, 14), chord(50, 0, 3, 7, 10, 14), chord(55, 0, 4, 7, 10), chord(48, 0, 4, 7, 11)]; // Am9 Dm9 G7 Cmaj7
      for (let b = 0; b < 16; b++) {
        const c = prog[b % 4], v = voice(c.notes, 57, 72);
        for (const [bt, len] of [[0, 1.8], [2.5, 1.3]]) v.forEach((n, k) => add(at(b, bt) + k * 0.01 + human(0.008), inst.vibes(hz(n), len * sg.beat, 0.5), 0.09, k % 2 ? 0.3 : -0.3));
        const bn = bassNote(c);
        add(at(b, 0), inst.bass(hz(bn), sg.beat * 1.6, 0.9), 0.32);
        add(at(b, 2.5), inst.bass(hz(bn), sg.beat * 0.8, 0.7), 0.28);
        add(at(b, 3.5), inst.bass(hz(bn + 10), sg.beat * 0.4, 0.55), 0.26);
        add(at(b, 0), inst.kick(1), 0.6);
        add(at(b, 1.5), inst.kick(0.55), 0.45);
        add(at(b, 2.5), inst.kick(0.85), 0.55);
        for (const bt of [1, 3]) add(at(b, bt) + human(0.01), drums.snare(1), 0.22);
        for (let e = 0; e < 8; e++) add(at(b, e / 2) + human(0.01), drums.hat((e % 2 ? 0.5 : 0.85) + human(0.2)), 0.07, 0.35);
        if (b >= 8) {
          const mel = b % 2 ? [[0, 4], [0.5, 3], [1.5, 2], [3, 1]] : [[0, 2], [1, 3], [1.5, 4], [2.5, 3]];
          for (const [bt, i] of mel) add(at(b, bt) + human(0.01), inst.epiano(hz(pick(c, i, 12)), sg.beat * 0.8, 0.6), 0.11, -0.2);
        }
      }
      return finish(sg, { lowpass: 6800, crackle: true, drive: 1.25 });
    },
  },
};

presets['smooth-jazz'] = {
  desc: 'Smooth jazz — Rhodes, fretless bas, saxofoon, cross-stick (84 BPM)',
  render() {
    const sg = song({ bpm: 84, swing: 0.55, seed: 71 });
    const { at, add, human } = sg;
    // E♭ major: E♭maj9 Cm9 Fm9 B♭sus | A♭maj9 Gm7 Fm9 B♭7
    const prog = [chord(51, 0, 4, 7, 11, 14), chord(48, 0, 3, 7, 10, 14), chord(53, 0, 3, 7, 10, 14), chord(46, 0, 5, 10, 14, 17),
      chord(56, 0, 4, 7, 11, 14), chord(55, 0, 3, 7, 10), chord(53, 0, 3, 7, 10, 14), chord(46, 0, 4, 10, 14, 19)];
    // [beat, midi, length in beats] per bar of the second pass; first pass gets a short pickup phrase
    const melody = {
      5: [[2.5, 70, 0.5], [3, 72, 0.5], [3.5, 75, 1.5]],
      6: [[1.5, 74, 0.5], [2, 72, 2]],
      8: [[0.5, 67, 0.5], [1, 70, 0.5], [1.5, 74, 1.5], [3.5, 72, 0.5]],
      9: [[0, 70, 1], [1, 67, 0.5], [1.5, 75, 2]],
      10: [[0.5, 68, 0.5], [1, 72, 0.5], [1.5, 75, 1], [2.5, 77, 1.5]],
      11: [[0, 75, 1], [1, 74, 0.5], [1.5, 72, 0.5], [2, 70, 2]],
      12: [[0.5, 72, 0.5], [1, 75, 0.5], [1.5, 79, 2], [3.5, 77, 0.5]],
      13: [[0, 77, 1], [1, 74, 0.5], [1.5, 70, 1.5], [3, 74, 1]],
      14: [[0, 72, 1.5], [1.5, 68, 0.5], [2, 72, 0.5], [2.5, 75, 1.5]],
      15: [[0, 74, 1], [1, 77, 0.5], [1.5, 74, 0.5], [2, 70, 1.5], [3.5, 75, 0.5]],
    };
    for (let b = 0; b < 16; b++) {
      const c = prog[b % 8], v = voice(c.notes, 58, 74);
      // Rhodes: lush sustained chord on 1, soft re-voice on the "and" of 2
      v.forEach((n, k) => add(at(b, 0) + k * 0.015 + human(0.008), inst.epiano(hz(n), sg.beat * 2.2, 0.45), 0.1, (k / (v.length - 1)) * 0.7 - 0.35));
      v.forEach((n, k) => add(at(b, 2.5) + k * 0.012 + human(0.008), inst.epiano(hz(n), sg.beat * 1.3, 0.3), 0.09, (k / (v.length - 1)) * 0.7 - 0.35));
      // muted guitar "chucks" on the off-beats
      for (const bt of [1.5, 3.5]) voice(c.notes, 64, 76).slice(-3).forEach((n) => add(at(b, bt) + human(0.005), inst.pluck(hz(n), sg.beat * 0.18, 0.45, 0.55), 0.09, 0.45));
      // fretless-style bass: long root, fifth, approach note
      const bn = bassNote(c), next = bassNote(prog[(b + 1) % 8]);
      add(at(b, 0), inst.bass(hz(bn), sg.beat * 1.6, 0.85), 0.3);
      add(at(b, 2), inst.bass(hz(bn + 7), sg.beat * 1.1, 0.6), 0.26);
      add(at(b, 3.5), inst.bass(hz(next + (next > bn ? -2 : 2)), sg.beat * 0.45, 0.55), 0.24);
      // soft groove: kick, cross-stick on 2 and 4, 16th hats
      add(at(b, 0), inst.kick(0.8, 0.6), 0.42);
      add(at(b, 1.5), inst.kick(0.45, 0.6), 0.3);
      add(at(b, 2.5), inst.kick(0.6, 0.6), 0.34);
      for (const bt of [1, 3]) add(at(b, bt) + human(0.006), drums.rim(0.9), 0.12, -0.15);
      for (let x = 0; x < 16; x++) add(at(b, x / 4) + human(0.005), drums.hat((x % 4 === 0 ? 0.8 : x % 2 ? 0.35 : 0.55) + human(0.15)), 0.05, 0.3);
      for (const [bt, n, d] of melody[b] ?? []) add(at(b, bt) + human(0.012), inst.sax(hz(n), sg.beat * d, 0.75), 0.2, -0.1);
    }
    return finish(sg, { lowpass: 8500, drive: 1.05, room: 0.35 });
  },
};

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------
function encode({ outL, outR, len }, out) {
  const wav = Buffer.alloc(44 + len * 4);
  wav.write('RIFF', 0); wav.writeUInt32LE(36 + len * 4, 4); wav.write('WAVE', 8);
  wav.write('fmt ', 12); wav.writeUInt32LE(16, 16); wav.writeUInt16LE(1, 20); wav.writeUInt16LE(2, 22);
  wav.writeUInt32LE(SR, 24); wav.writeUInt32LE(SR * 4, 28); wav.writeUInt16LE(4, 32); wav.writeUInt16LE(16, 34);
  wav.write('data', 36); wav.writeUInt32LE(len * 4, 40);
  for (let i = 0; i < len; i++) {
    wav.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outL[i])) * 32767), 44 + i * 4);
    wav.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outR[i])) * 32767), 46 + i * 4);
  }
  const tmp = join(tmpdir(), `gedekt-music-${Date.now()}.wav`);
  writeFileSync(tmp, wav);
  mkdirSync(dirname(out), { recursive: true });
  const r = spawnSync(ffmpegPath, ['-y', '-hide_banner', '-loglevel', 'error', '-i', tmp, '-af', 'loudnorm=I=-18:TP=-2:LRA=7', '-ar', '44100', '-c:a', 'libmp3lame', '-b:a', '160k', out], { stdio: 'inherit' });
  rmSync(tmp);
  if (r.status !== 0) throw new Error('ffmpeg failed for ' + out);
  return (len / SR).toFixed(1);
}

const args = process.argv.slice(2);
const useIdx = args.indexOf('--use');
if (useIdx !== -1) {
  const name = args[useIdx + 1];
  if (!presets[name]) throw new Error(`Unknown preset ${name}. Options: ${Object.keys(presets).join(', ')}`);
  const secs = encode(presets[name].render(), join(root, 'public/audio/demo-music.mp3'));
  console.log(`✓ public/audio/demo-music.mp3 ← ${name} (${secs}s loop)`);
} else {
  const names = args.length ? args : Object.keys(presets);
  names.forEach((name, i) => {
    if (!presets[name]) throw new Error(`Unknown preset ${name}`);
    const file = `music-samples/${i + 1}-${name}.mp3`;
    const secs = encode(presets[name].render(), join(root, file));
    console.log(`✓ ${file} (${secs}s) — ${presets[name].desc}`);
  });
}
