import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar2.css"; // Asegúrate de tener el CSS en este archivo o ajusta el import según tu estructura

export default function NavBar2() {

const location = useLocation();
  return (

<div className="nav-container">
   <nav className="navbar2">
        <Link 
        to="/"
        className={`boton ${location.pathname === "/" ? "active" : ""}`}
        >Home</Link>
        <Link        
        to="/gallery"
         className={`boton ${location.pathname === "/gallery" ? "active" : ""}`}
        >Gallery/Visions</Link>
        <Link 
        to="/about"
         className={`boton ${location.pathname === "/about" ? "active" : ""}`}
        >About Vakzthar[11]</Link>
  </nav>
  </div>


)

}