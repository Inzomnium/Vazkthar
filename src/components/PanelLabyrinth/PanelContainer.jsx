// PanelContainer.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import Panel from "./Panel";
import { buildStepPlan } from "./axisPlan";
import { createCooldown, pulseClass } from "./effects";
import "./panelLabyrinth.css";

function getOrCreateSessionSeed(seedKey) {
  const key = `pl_seed_${seedKey}`;
  const existing = sessionStorage.getItem(key);
  if (existing) return existing;

  const buf = new Uint32Array(1);
  if (window.crypto?.getRandomValues) window.crypto.getRandomValues(buf);
  else buf[0] = Math.floor(Math.random() * 2 ** 32);

  const val = String(buf[0] >>> 0);
  sessionStorage.setItem(key, val);
  return val;
}

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}

export default function PanelContainer({
  seedKey = "default",
  config = {},
  className = "",
  children,
}) {
  const viewportRef = useRef(null);
  const worldRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  // flip-view random (no persistente)
  const [activeFlip, setActiveFlip] = useState(false);

  // duración actual usada por la cámara (normal/turn)
  const snapMsRef = useRef(config.snapMs ?? 260);

  const sessionSeed = useMemo(() => getOrCreateSessionSeed(seedKey), [seedKey]);

  const panelChildren = useMemo(
    () => React.Children.toArray(children).filter(Boolean),
    [children]
  );

  const panelIds = useMemo(() => {
    return panelChildren
      .map((c) => c?.props?.id)
      .filter((id) => typeof id === "string" && id.length > 0);
  }, [panelChildren]);

  const stepsCount = Math.max(0, panelIds.length - 1);

  const stepPlan = useMemo(() => {
    return buildStepPlan(stepsCount, config, `${seedKey}:${sessionSeed}`);
  }, [stepsCount, config, seedKey, sessionSeed]);

  const coords = useMemo(() => {
    const map = new Map();
    let x = 0;
    let y = 0;
    if (panelIds[0]) map.set(panelIds[0], { x, y });

    for (let i = 0; i < stepsCount; i++) {
      const dir = stepPlan[i] || "V";
      if (dir === "H") x += 1;
      else y += 1;
      map.set(panelIds[i + 1], { x, y });
    }
    return map;
  }, [panelIds, stepsCount, stepPlan]);

  const canGlitch = useMemo(
    () => createCooldown(config.glitchCooldownMs ?? 300),
    [config.glitchCooldownMs]
  );

  // Random flip cada vez que cambia el panel activo
  useEffect(() => {
    const chance = config.flipChance ?? 0.5; // puedes tunearlo si quieres
    setActiveFlip(Math.random() < chance);
  }, [activeIndex, config.flipChance]);

  function moveToIndex(nextIndex) {
    const idx = clamp(nextIndex, 0, panelIds.length - 1);
    if (idx === activeIndex) return;
    if (!panelIds[idx]) return;
    if (isMoving) return;

    const prevIdx = activeIndex;
    const prevDir = prevIdx > 0 ? stepPlan[prevIdx - 1] : null;
    const nextDir = idx > 0 ? stepPlan[idx - 1] : null;

    const isTurn = prevDir && nextDir && prevDir !== nextDir;

    const baseSnapMs = config.snapMs ?? 260;
    const turnSnapMs = config.turnSnapMs ?? Math.round(baseSnapMs * 1.8);
    const snapMs = isTurn ? turnSnapMs : baseSnapMs;

    const glitchMs = config.glitchPulseMs ?? 150;

    // guardamos la duración para el effect de cámara
    snapMsRef.current = snapMs;

    setIsMoving(true);

    // Si es giro: glitch ANTES del movimiento
    if (isTurn && config.turnGlitch && canGlitch()) {
      pulseClass(viewportRef.current, "pl-glitch", glitchMs);

      window.setTimeout(() => {
        setActiveIndex(idx);
      }, glitchMs);

      window.setTimeout(() => {
        setIsMoving(false);
      }, glitchMs + snapMs + 20);

      return;
    }

    // Paso normal (sin giro o sin glitch)
    setActiveIndex(idx);
    window.setTimeout(() => setIsMoving(false), snapMs + 20);
  }

  // Wheel (desktop): one gesture = next/prev
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    let accum = 0;
    const threshold = config.wheelThreshold ?? 140;

    function onWheel(e) {
      e.preventDefault();
      if (isMoving) return;

      accum += e.deltaY;
      if (Math.abs(accum) < threshold) return;

      const dir = Math.sign(accum);
      accum = 0;

      if (dir > 0) moveToIndex(activeIndex + 1);
      if (dir < 0) moveToIndex(activeIndex - 1);
    }

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [activeIndex, isMoving, config.wheelThreshold]);

  // Touch (mobile): semántico, con avance LEFT/UP (derecha->izquierda, abajo->arriba)
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const isCoarse =
      typeof window !== "undefined" &&
      (navigator.maxTouchPoints > 0 ||
        window.matchMedia?.("(pointer: coarse)")?.matches);

    const swipeMin =
      (isCoarse ? config.swipeMinMobile : config.swipeMin) ?? 60;

    let startX = 0;
    let startY = 0;
    let tracking = false;
    let fired = false;

    function onTouchStart(e) {
      if (isMoving) return;
      const t = e.touches?.[0];
      if (!t) return;

      tracking = true;
      fired = false;
      startX = t.clientX;
      startY = t.clientY;
    }

    function onTouchMove(e) {
      if (!tracking) return;
      e.preventDefault();
      if (isMoving || fired) return;

      const t = e.touches?.[0];
      if (!t) return;

      const dx = t.clientX - startX;
      const dy = t.clientY - startY;

      const ax = Math.abs(dx);
      const ay = Math.abs(dy);

      if (Math.max(ax, ay) < swipeMin) return;

      // Dominante para evitar diagonal ambigua
      const useX = ax >= ay;

      // Forward = LEFT o UP (dx<0 o dy<0)
      const forward = useX ? dx < 0 : dy < 0;

      fired = true;
      if (forward) moveToIndex(activeIndex + 1);
      else moveToIndex(activeIndex - 1);
    }

    function onTouchEnd() {
      tracking = false;
      fired = false;
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [activeIndex, isMoving, config.swipeMin, config.swipeMinMobile]);

  // Apply camera transform whenever activeIndex changes
  useEffect(() => {
    const world = worldRef.current;
    const id = panelIds[activeIndex];
    if (!world || !id) return;

    const p = coords.get(id) || { x: 0, y: 0 };
    const d = snapMsRef.current ?? (config.snapMs ?? 260);

    world.style.transition = `transform ${d}ms ease`;
    world.style.transform = `translate3d(${-p.x * 100}vw, ${-p.y * 100}vh, 0)`;
  }, [activeIndex, panelIds, coords, config.snapMs]);

  // Prevent body scroll while labyrinth mounted
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const rendered = panelChildren.map((child, i) => {
    const id = child?.props?.id;
    if (typeof id !== "string" || !id) return child;

    const pos = coords.get(id) || { x: 0, y: 0 };
    const style = {
      left: `${pos.x * 100}vw`,
      top: `${pos.y * 100}vh`,
    };

    const extraClass =
      (child.props.className ? `${child.props.className} ` : "") +
      (i === activeIndex
        ? `is-active ${activeFlip ? "flip-view " : ""}`
        : "") +
      (i === panelIds.length - 1 ? "is-last" : "");

    return React.cloneElement(child, {
      className: extraClass,
      style: { ...(child.props.style || {}), ...style },
    });
  });

  const cls = ["pl-viewport", className].filter(Boolean).join(" ");

  return (
    <div ref={viewportRef} className={cls} data-seed={`${seedKey}:${sessionSeed}`}>
      <div ref={worldRef} className="pl-world">
        {rendered}
      </div>

      {config.debug && (
        <div className="pl-debug">
          <div>[index {activeIndex + 1}/{panelIds.length}]</div>
          <div>[steps {stepPlan.join("")}]</div>
        </div>
      )}
    </div>
  );
}

export { Panel };
