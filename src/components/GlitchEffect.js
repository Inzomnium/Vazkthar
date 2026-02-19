import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const GlitchEffect = ({ images, width = "400px", height = "500px" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const rotateImages = useCallback(() => {
    const step = 2; // 🔥 Cambia de imagen cada 2 posiciones
    setActiveIndex((prevIndex) => (prevIndex + step) % images.length);
  }, [images.length]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {
      const glitchElement = document.querySelector(".glitch-container");

      if (glitchElement) {
        console.log("🔥 ScrollTrigger activado correctamente.");
        ScrollTrigger.create({
          trigger: glitchElement,
          start: "top 80%", 
          end: "bottom 20%",
          scroller: ".shop-scroller",
          scrub: false, // 🚨 Desactivamos el scrub para evitar la suavidad
          onUpdate: (self) => {
            if (self.direction !== 0) {
              rotateImages(); /
            }
          },
        });
      }
    }, 500);
  }, [rotateImages]); // ✅ Agregamos rotateImages como dependencia

  return (
    <GlitchContainer className="glitch-container" style={{ width, height }}>
      {images.map((img, index) => (
        <img
          data-scroll="true"
          key={index}
          src={img}
          alt={`Glitch ${index}`}
          className={index === activeIndex ? "active" : ""}
        />
      ))}
    </GlitchContainer>
  );
};

const GlitchContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
  }

  img.active {
    display: block;
  }
`;

export default GlitchEffect;
