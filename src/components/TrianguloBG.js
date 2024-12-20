import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import '../styles/TriangleBg.css'

import i0 from '../assets/Images/bgs/0.webp'
import i1 from '../assets/Images/bgs/1.webp'
import i2 from '../assets/Images/bgs/2.webp'
import i3 from '../assets/Images/bgs/3.webp'

const images = [i0, i1, i2, i3];
// Función para generar una posición aleatoria
const getRandomBackgroundPosition = () => {
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  return `${x}% ${y}%`;
};

function getRandomAniDur() {
  return Math.floor(Math.random() * (40 - 10 + 1)) + 65;
}
function getRandomBGNumber() {
  return Math.floor(Math.random() * 4); // Número aleatorio entre 0 y 3
}
const TriangleBackground = () => {
  const [dimensions, setDimensions] = useState({ rows: 0, cols: 0 });
  const [backgroundPositions, setBackgroundPositions] = useState([]);
  const size = 100; // Tamaño del triángulo (en píxeles)
  const horizontalMargin = -25; // Margen horizontal negativo aplicado en CSS
  const verticalMargin = 2; // Margen vertical aplicado en CSS

  useEffect(() => {
    // Al montar el componente, establece overflow:hidden
    document.body.style.overflow = 'hidden';
  
    // Al desmontar el componente, restablece overflow a su valor por defecto
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Memoriza la función calculateGrid con useCallback
  const calculateGrid = useCallback(() => {
    const effectiveWidth = size + horizontalMargin;
    const effectiveHeight = size / 2 + verticalMargin;

    const cols = Math.ceil(window.innerWidth / effectiveWidth);
    const rows = Math.ceil(window.innerHeight / effectiveHeight) + 2;

    setDimensions({ rows, cols });

    // Generar posiciones aleatorias para cada triángulo
    const totalTriangles = (rows + 1) * (cols + 1);
    const positions = Array.from({ length: totalTriangles }, () => getRandomBackgroundPosition());
    setBackgroundPositions(positions);
  }, [size, horizontalMargin, verticalMargin]);
  const randomIndex = getRandomBGNumber(); // Generar número aleatorio para cada triángulo
  // Agregar calculateGrid como una dependencia
  useEffect(() => {
    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, [calculateGrid]);

  return (
   
    <div className="container-canvas">
      <div className="triangle-grid">
        {Array.from({ length: dimensions.rows }).map((_, rowIndex) => {
          const lastTriangleInverted = (rowIndex + dimensions.cols - 1) % 2 === 1;
          
          return (
            
            <div className="triangle-row" key={rowIndex}>
              {Array.from({ length: dimensions.cols }).map((_, colIndex) => {
                const isInverted = (rowIndex + colIndex) % 2 === 1;
                const controlIndex = rowIndex * dimensions.cols + colIndex;
                
                return (
                  
                  <motion.div
                    className={`triangle ${isInverted ? 'inverted' : ''}`}
                    key={`${rowIndex}-${colIndex}`}
                    style={{
                      backgroundPosition: backgroundPositions[controlIndex] || 'center',
                      backgroundImage:
                        `url(${images[randomIndex]})`
                    }}
                    animate={{
                      backgroundPosition: [
                        getRandomBackgroundPosition(),
                        getRandomBackgroundPosition(),
                      ],
                      transition: { duration: getRandomAniDur(), repeat: Infinity, ease: 'linear' },
                    }}
                  />
                );
              })}
              <motion.div
                className={`half-triangle ${lastTriangleInverted ? 'inverted' : ''}`}
                style={{
                  backgroundPosition:
                    backgroundPositions[rowIndex * dimensions.cols + dimensions.cols] || 'center',
                  backgroundImage:
                    `url(${images[randomIndex]})`
                }}
                animate={{
                  backgroundPosition: [
                    getRandomBackgroundPosition(),
                    getRandomBackgroundPosition(),
                  ],
                  transition: { duration: getRandomAniDur() , repeat: Infinity, ease: 'linear' },
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
   
  );
};

export default TriangleBackground;
