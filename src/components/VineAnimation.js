import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Styled Components
const VineSVG = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.15;
  z-index: -1 ; 
  pointer-events: none; 
`;

const MainVine = styled.path`
  stroke:rgb(0, 0, 0);
  stroke-width: 2;
  fill: none;
  transition: stroke-dasharray 0.3s, stroke-dashoffset 0.3s;
`;

const VineAnimation = () => {
  useEffect(() => {
    // Main vine growth
    const animateVine = () => {
      const vine = document.querySelector("#main-vine");
      const pathLength = vine.getTotalLength();

      // Initialize dasharray for animation
      vine.style.strokeDasharray = pathLength;
      vine.style.strokeDashoffset = pathLength;

      gsap.to(vine, {
        strokeDashoffset: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#root", // Entire page
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Slow scrolling
        },
      });
    };

    // Add branches and leaves dynamically
    const attachBranchesAndLeaves = () => {
      const vine = document.querySelector("#main-vine");
      const svg = document.querySelector("#vine-svg");
      const pathLength = vine.getTotalLength();
    
      ScrollTrigger.create({
        trigger: "#root",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentPoint = vine.getPointAtLength(pathLength * progress);
    
          // Randomly add branches and leaves
          if (Math.random() > 0.92) { // Slightly more frequent branches
            const branch = document.createElementNS("http://www.w3.org/2000/svg", "path");
            const length = Math.random() * 100 + 80; // Increase the branch length
            const controlX = Math.random() > 0.5
              ? currentPoint.x - length * 1.5
              : currentPoint.x + length * 1.5; // Wider spread for branches
            const endX = Math.random() > 0.5
              ? currentPoint.x - length
              : currentPoint.x + length;
            const endY = currentPoint.y - length * 0.7; // Adjusted for natural curvature
    
            branch.setAttribute(
              "d",
              `M${currentPoint.x} ${currentPoint.y} Q${controlX} ${currentPoint.y - length / 2}, ${endX} ${endY}`
            );
            branch.setAttribute("stroke", "#000"); // Black color for branches
            branch.setAttribute("stroke-width", "1.5"); // Slightly thicker branches
            branch.setAttribute("fill", "none");
            branch.style.opacity = 0;
    
            svg.appendChild(branch);
    
            // Animate branch growth
            gsap.to(branch, {
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            });
    
            // Add leaves
            for (let i = 0; i < 3; i++) { // Slightly more leaves
              const leaf = document.createElementNS("http://www.w3.org/2000/svg", "circle");
              leaf.setAttribute("cx", Math.random() > 0.5 ? endX + 10 : endX - 10); // More spread
              leaf.setAttribute("cy", endY + Math.random() * 10);
              leaf.setAttribute("r", Math.random() * 4 + 2); // Random leaf sizes
              leaf.setAttribute("fill", "black"); 
              leaf.style.opacity = 0;
    
              svg.appendChild(leaf);
    
              // Animate leaves appearing
              gsap.to(leaf, {
                opacity: 1,
                duration: 1,
                ease: "power2.out",
              });
            }
          }
        },
      });
    };

    // Initialize both animations
    animateVine();
    attachBranchesAndLeaves();
  }, []);

  return (
    <VineSVG id="vine-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 3000" preserveAspectRatio="xMidYMid slice">
      <MainVine
        id="main-vine"
        d="M500 0 Q550 300, 450 600 T500 1200 T500 1800 T450 2400"
      />
    </VineSVG>
  );
};

export default VineAnimation;
