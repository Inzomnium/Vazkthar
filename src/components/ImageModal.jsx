import React, { useEffect } from 'react';
import '../styles/imageModal.css';

const ImageModal = ({ work, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!work) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-wrapper">
        <img src={work.image} alt={work.title} className="modal-image" />
        <div className="modal-text">
  <h2>{work.title}</h2>
  {work.caption && <p className='caption'>{work.caption}</p>}
  {work.technique && <p className='technique'>{work.technique}</p>}
  {work.year && <p className='year'>{work.year}</p>}
</div>
        </div>
        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ImageModal;