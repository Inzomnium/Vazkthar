import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/floatingmenu.css";

export default function FloatingMenu({
  items = [
    { to: "/", label: "Home" },
    { to: "/machine", label: "The Machine" },
    { to: "/vault", label: "The Vault" },
    { to: "/gallery", label: "Gallery/Visions" },
    { to: "/about", label: "About Vakzthar[11]" },
    { to: "/manifesto", label: "Manifesto" },
  ],
  position = "top-right", // ["top-right"]
}) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close on click outside
  useEffect(() => {
    function onDocPointerDown(e) {
      if (!open) return;
      if (!rootRef.current) return;
      if (rootRef.current.contains(e.target)) return;
      setOpen(false);
    }
    document.addEventListener("pointerdown", onDocPointerDown);
    return () => document.removeEventListener("pointerdown", onDocPointerDown);
  }, [open]);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const posClass = position === "top-right" ? "fm-pos-tr" : "fm-pos-tr";

  return (
    <div ref={rootRef} className={`fm-root ${posClass} ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="fm-trigger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="fm-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <div className="fm-panel" role="menu" aria-hidden={open ? "false" : "true"}>
        {items.map((it) => {
          const active = location.pathname === it.to;
          return (
            <Link
              key={it.to}
              to={it.to}
              role="menuitem"
              className={`fm-link ${active ? "is-active" : ""}`}
            >
              {it.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
