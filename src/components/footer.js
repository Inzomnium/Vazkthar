import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css"; // Asegúrate de tener el CSS en este archivo o ajusta el import según tu estructura

export default function Footer() {

  return (

   <footer>
      <p>© 2025 <Link to="/">The Vakzthar</Link> — <span>All rights reserved.</span></p>
      <p><span>Follow me on instagram <Link 
      to="https://www.instagram.com/vakzthar?utm_source=vakzthar_landing&utm_medium=web&utm_campaign=launch_landing_2025"
      target='_blank'
      >@Vakzthar</Link></span></p>
    </footer>
  )}