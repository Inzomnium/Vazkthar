import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const GlitchEffect = ({ images, width = "400px", height = "500px" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const rotateImages = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const glitchElement = document.querySelector(".glitch-container");

    if (glitchElement) {
      ScrollTrigger.create({
        trigger: glitchElement,
        start: "top center",
        end: "bottom center",
        scrub: 0.5, // Responde de forma ágil pero sin locura
        onUpdate: (self) => {
          if (self.direction !== 0) {
            rotateImages();
          }
        },
        scroller: ".shop-scroller"
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [rotateImages]);

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
