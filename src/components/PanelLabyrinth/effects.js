// effects.js
// Lightweight glitch/shake effects via CSS classes (no heavy JS).

export function createCooldown(cooldownMs) {
  let last = 0;
  return function canRun() {
    const now = Date.now();
    if (now - last >= cooldownMs) {
      last = now;
      return true;
    }
    return false;
  };
}

export function pulseClass(el, className, durationMs = 120) {
  if (!el) return;
  el.classList.add(className);
  window.setTimeout(() => el.classList.remove(className), durationMs);
}
