import React, { useState, useMemo } from 'react';
import Masonry from 'react-masonry-css';
import works from '../../data/works';
import '../../styles/GalleryMasonry.css';
import ImageModal from '../ImageModal'; // 👈

const GalleryMasonry = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
  };




const getRandomIndices = (count, max) => {
  const indices = new Set();
  while (indices.size < count) {
    const rand = Math.floor(Math.random() * max);
    indices.add(rand);
  }
  return Array.from(indices);
};

const highlightedIndices = useMemo(() => getRandomIndices(8, works.length), []);

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {works.map((work, index) => (
          <div 
          className={`grid-item ${highlightedIndices.includes(index) ? 'double-height' : ''}`}
           key={index}>
            <div className="image-container" onClick={() => setSelectedWork(work)}>
              <img src={work.image} alt={work.title} />
              <div className="caption-glitch">
                <strong>{work.title}</strong>
                {work.caption && <div>{work.caption}</div>}
              </div>
            </div>
          </div>
        ))}
      </Masonry>

      {/* Modal */}
      {selectedWork && (
        <ImageModal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </>
  );
};

export default GalleryMasonry;
