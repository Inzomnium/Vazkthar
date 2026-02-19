// observers.js
// IntersectionObservers: active panel detection + sentinel detection for horizontal panels.

export function createActivePanelObserver({
  threshold = 0.5,
  onActive,
}) {
  const obs = new IntersectionObserver(
    (entries) => {
      // Choose the entry with highest intersectionRatio above threshold
      let best = null;
      for (const e of entries) {
        if (e.isIntersecting && e.intersectionRatio >= threshold) {
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        }
      }
      if (best && onActive) {
        const panelId = best.target?.dataset?.panelId;
        if (panelId) onActive(panelId);
      }
    },
    { threshold: [threshold] }
  );

  return obs;
}

export function createSentinelObserver({
  rootEl,
  onEdge,
}) {
  // Observes sentinelStart/sentinelEnd INSIDE a horizontal scroller.
  // root = scroller, so we detect when the start/end is fully in view.
  const obs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.target) continue;
        const { panelId, edge } = e.target.dataset || {};
        if (!panelId || !edge) continue;

        if (e.isIntersecting) {
          onEdge?.(panelId, edge, true);
        } else {
          onEdge?.(panelId, edge, false);
        }
      }
    },
    {
      root: rootEl || null,
      threshold: [0.9],
    }
  );

  return obs;
}
