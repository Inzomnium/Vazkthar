// axisPlan.js
// Builds a direction plan per step between panels: steps[i] is direction for (i -> i+1)
// "V" means next panel is below, "H" means next panel is to the right.

function hashStringToUint32(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return function rand() {
    t += 0x6D2B79F5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

function randInt(rng, min, max) {
  const lo = Math.min(min, max);
  const hi = Math.max(min, max);
  return lo + Math.floor(rng() * (hi - lo + 1));
}

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}

function countH(arr) {
  return arr.reduce((a, v) => a + (v === "H" ? 1 : 0), 0);
}

function hasStrictAlternation(arr) {
  // detect HVHV... or VHVH... pattern with length >= 4
  if (arr.length < 4) return false;
  for (let i = 0; i <= arr.length - 4; i++) {
    const w = arr.slice(i, i + 4);
    const isAlt = w[0] !== w[1] && w[1] !== w[2] && w[2] !== w[3] && w[0] === w[2] && w[1] === w[3];
    if (isAlt) return true;
  }
  return false;
}

function maxConsecutiveHOk(arr, maxRun) {
  let run = 0;
  for (const v of arr) {
    if (v === "H") run++;
    else run = 0;
    if (run > maxRun) return false;
  }
  return true;
}

/**
 * @param {number} stepsCount = panelCount - 1
 * @param {object} cfg
 * @param {string|number} seedKey
 * @returns {("V"|"H")[]}
 */
export function buildStepPlan(stepsCount, cfg, seedKey) {
  const {
    minHorizontal = 1,
    maxHorizontal = 2,
    maxConsecutiveHorizontal = 2,
    avoidAlternation = true,
  } = cfg || {};

  if (stepsCount <= 0) return [];

  const seedNum =
    typeof seedKey === "number" ? seedKey >>> 0 : hashStringToUint32(String(seedKey));
  const rng = mulberry32(seedNum);

  const maxPossibleH = stepsCount;
  const minH = clamp(minHorizontal, 0, maxPossibleH);
  const maxH = clamp(maxHorizontal, minH, maxPossibleH);
  const targetH = randInt(rng, minH, maxH);

  const MAX_ATTEMPTS = 2000;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    // start with all V, then place H
    const steps = new Array(stepsCount).fill("V");

    // random pick indices to set H
    const indices = Array.from({ length: stepsCount }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    let chosen = 0;
    for (const idx of indices) {
      if (chosen >= targetH) break;
      steps[idx] = "H";

      if (!maxConsecutiveHOk(steps, maxConsecutiveHorizontal)) {
        steps[idx] = "V";
        continue;
      }
      if (avoidAlternation && hasStrictAlternation(steps)) {
        steps[idx] = "V";
        continue;
      }

      chosen++;
    }

    if (chosen !== targetH) continue;

    // final check
    if (countH(steps) !== targetH) continue;
    if (!maxConsecutiveHOk(steps, maxConsecutiveHorizontal)) continue;
    if (avoidAlternation && hasStrictAlternation(steps)) continue;

    return steps;
  }

  // fallback
  const fallback = new Array(stepsCount).fill("V");
  for (let i = 0; i < Math.min(targetH, stepsCount); i++) fallback[i] = "H";
  return fallback;
}
