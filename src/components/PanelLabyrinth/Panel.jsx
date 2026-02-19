// Panel.jsx
import React from "react";

const Panel = React.forwardRef(function Panel(
  { id, className = "", style = {}, children, ...rest },
  ref
) {
  const classes = ["pl-panel", className].filter(Boolean).join(" ");

  return (
    <section
      ref={ref}
      className={classes}
      data-panel-id={id}
      style={style}
      {...rest}
    >
      <div className="pl-panel-inner">{children}</div>
    </section>
  );
});

export default Panel;
