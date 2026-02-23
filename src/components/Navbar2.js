import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar2.css"; 
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
        to="/machine"
        className={`boton ${location.pathname === "/" ? "active" : ""}`}
        >The Machine</Link>
         <Link 
        to="/authorized-narrative-input"
        className={`boton ${location.pathname === "/" ? "active" : ""}`}
        >The Narrative</Link>
        <Link 
        to="/vault"
        className={`boton ${location.pathname === "/" ? "active" : ""}`}
        >The Vault</Link>
        <Link        
        to="/gallery"
         className={`boton ${location.pathname === "/gallery" ? "active" : ""}`}
        >Gallery/Visions</Link>
        <Link 
        to="/about"
         className={`boton ${location.pathname === "/about" ? "active" : ""}`}
        >About Vakzthar[11]</Link>
         <Link 
        to="/manifesto"
         className={`boton ${location.pathname === "/manifesto" ? "active" : ""}`}
        >Manifesto</Link>
  </nav>
  </div>


)

}