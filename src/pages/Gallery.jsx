import React from 'react';
import { Link } from 'react-router-dom';
import GalleryMasonry from '../components/GalleryMasonry/GalleryMasonry'
import { Helmet} from 'react-helmet-async';
import { useEffect, useState } from 'react';





const Gallery = () => {

const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    <div style={{ padding: '2rem' }}>
      <header>
      <h1 className='tituloGal'>The Vakzthar Visions - <b>Digital Art</b></h1>
       <Link to="/" className="home-btn">
              <button>Home</button>
       </Link>
      </header>
      <GalleryMasonry />
    <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
  aria-label="Scroll to top"
>
  ↑
</button>
      <Helmet>
  <title>The Vakzthar - Visual Art Gallery</title>
  <meta name="description" content="Visual works from the mind of The Vakzthar. Symbolic fragments, recovered transmissions, and contemporary atmospheric art." />
</Helmet>
    </div>
    
  );
};

export default Gallery;
