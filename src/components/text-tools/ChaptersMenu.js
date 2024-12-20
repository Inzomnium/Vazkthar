import React, { useState } from 'react';
import '../../styles/ChapterMenu.css'
import { Link } from 'react-router-dom';

const chapters = [
  { id: 'c1', label: 'I' },
  { id: 'c2', label: 'II' },
  { id: 'c3', label: 'III' },
  { id: 'c4', label: 'IV' },
  { id: 'c5', label: 'V' },
  { id: 'c6', label: 'VI' },
  { id: 'c7', label: 'VII' },
  { id: 'c8', label: 'VIII' },
  { id: 'c9', label: 'IX' },
  { id: 'c10', label: 'X' },
  { id: 'c11', label: 'XI' },
  { id: 'c12', label: 'XII' },
  { id: 'c13', label: 'XIII' },
  { id: 'c14', label: 'XIV' },
];

const ChapterMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chapter-menu">
      <button className="menu-button">
       <Link to="/texts">Back</Link>
      </button>
      <button className="menu-button" onClick={toggleMenu}>
        Chapters
      </button>
      {isOpen && (
        <div className="menu-dropdown">
          {chapters.map((chapter) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="menu-item"
              onClick={() => setIsOpen(false)}
            >
              {chapter.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChapterMenu;