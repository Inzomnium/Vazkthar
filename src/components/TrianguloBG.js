import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


// Función para generar una posición aleatoria
const getRandomBackgroundPosition = () => {
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  return `${x}% ${y}%`;
};

function getRandomAniDur() {
    return Math.floor(Math.random() * (40 - 10 + 1)) + 10;
  }
const TriangleBackground = () => {
  const [dimensions, setDimensions] = useState({ rows: 0, cols: 0 });
  const [backgroundPositions, setBackgroundPositions] = useState([]);
  const size = 100; // Tamaño del triángulo (en píxeles)
  const horizontalMargin = -25; // Margen horizontal negativo aplicado en CSS
  const verticalMargin = 2; // Margen vertical aplicado en CSS

  const calculateGrid = () => {
    const effectiveWidth = size + horizontalMargin;
    const effectiveHeight = size / 2 + verticalMargin;

    const cols = Math.ceil(window.innerWidth / effectiveWidth);
    const rows = Math.ceil(window.innerHeight / effectiveHeight) + 2;

    setDimensions({ rows, cols });

    // Generar posiciones aleatorias para cada triángulo
    const totalTriangles = (rows + 1) * (cols + 1); // Incluye los triángulos y medios triángulos
    const positions = Array.from({ length: totalTriangles }, () => getRandomBackgroundPosition());
    setBackgroundPositions(positions);
  };

  useEffect(() => {
    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  return (
    <div className='container-canvas'>
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
                      "url('https://cdn2.hubspot.net/hubfs/2351684/Imported_Blog_Media/File-formats-and-sizes-image-1000.jpg')",
                  }}
                  animate={{
                    backgroundPosition: [
                      getRandomBackgroundPosition(),
                      getRandomBackgroundPosition(),
                    ],
                    transition: { 
                        duration: getRandomAniDur()
                        , repeat: Infinity, ease: 'linear' },
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
                  "url('https://cdn2.hubspot.net/hubfs/2351684/Imported_Blog_Media/File-formats-and-sizes-image-1000.jpg')",
              }}
              animate={{
                backgroundPosition: [
                  getRandomBackgroundPosition(),
                  getRandomBackgroundPosition(),
                ],
                transition: { duration: 40, repeat: Infinity, ease: 'linear' },
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
