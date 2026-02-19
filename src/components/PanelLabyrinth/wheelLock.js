// wheelLock.js
// Wheel lock controller: intercept wheel for the active horizontal panel and translate to scroller.scrollLeft.

export function createWheelLockController({
  getActivePanelId,
  getAxisForPanel,
  getScrollerForPanel,
  isEdgeReached,
  onDirectionChange,
  onRelease,
  speedFactor = 1,
}) {
  let enabled = false;

  function onWheel(e) {
    const activeId = getActivePanelId();
    if (!activeId) return;

    const axis = getAxisForPanel(activeId);
    if (axis !== "H") return;

    const scroller = getScrollerForPanel(activeId);
    if (!scroller) return;

    // Determine direction by deltaY sign
    const delta = e.deltaY;
    if (delta === 0) return;

    // Prevent default vertical scroll
    e.preventDefault();

    // Notify direction change (if needed)
    const dir = Math.sign(delta);
    onDirectionChange?.(dir, activeId);

    // Translate wheel to horizontal scroll
    scroller.scrollLeft += delta * speedFactor;

    // Determine release conditions using sentinel edge state (preferred)
    // + a numeric fallback to avoid "stuck" cases
    const maxLeft = scroller.scrollWidth - scroller.clientWidth;
    const nearStart = scroller.scrollLeft <= 1;
    const nearEnd = scroller.scrollLeft >= maxLeft - 1;

    const edge = isEdgeReached(activeId, dir);
    const shouldReleaseDown = dir > 0 && (edge === "end" || nearEnd);
    const shouldReleaseUp = dir < 0 && (edge === "start" || nearStart);

    if (shouldReleaseDown || shouldReleaseUp) {
      onRelease?.(activeId, dir);
    }
  }

  function enable() {
    if (enabled) return;
    enabled = true;
    // passive: false so we can preventDefault
    window.addEventListener("wheel", onWheel, { passive: false });
  }

  function disable() {
    if (!enabled) return;
    enabled = false;
    window.removeEventListener("wheel", onWheel);
  }

  return { enable, disable };
}
