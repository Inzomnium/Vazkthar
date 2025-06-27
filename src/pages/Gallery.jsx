import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import GalleryMasonry from '../components/GalleryMasonry/GalleryMasonry';
import { Helmet } from 'react-helmet-async';
import works from '../data/works';
import ImageModal from '../components/ImageModal';

const Gallery = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  // Mostrar botón scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Si hay slug en la URL, busca el work correspondiente y abre el modal
  useEffect(() => {
    if (slug) {
      const matched = works.find((w) => w.slug === slug);
      if (matched) {
        setSelectedWork(matched);
      } else {
        // Si no se encuentra el slug, redirige a la galería base
        navigate('/gallery', { replace: true });
      }
    }
  }, [slug, navigate]);

  // Cierra el modal y limpia la URL
  const handleCloseModal = () => {
    setSelectedWork(null);
    navigate('/gallery', { replace: true });
  };

  return (
    <div style={{ 
      padding: '2rem',
      background: "#1a1a1a"
    }}>
      <Helmet>
        <title>
          {selectedWork
            ? `${selectedWork.title} | The Vakzthar Visual Archive`
            : 'The Vakzthar - Visual Art Gallery'}
        </title>
        <meta
          name="description"
          content={
            selectedWork
              ? selectedWork.caption || 'Recovered visual transmission.'
              : 'Visual works from the mind of The Vakzthar. Symbolic fragments, recovered transmissions, and contemporary atmospheric art.'
          }
        />
        {selectedWork && (
          <>
            <meta property="og:image" content={selectedWork.image} />
            <meta property="og:url" content={`https://vakzthar.com/gallery/${selectedWork.slug}`} />
          </>
        )}
      </Helmet>

      <header>
        <h1 className="tituloGal">
          The Vakzthar Visions – <b>Digital Art</b>
        </h1>
        <Link to="/" className="home-btn">
          <button>Home</button>
        </Link>
      </header>

      <GalleryMasonry setSelectedWork={setSelectedWork} />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      {/* Modal automático desde URL */}
      {selectedWork && (
        <ImageModal work={selectedWork} onClose={handleCloseModal} />
      )}
        {/* Fallback estático para Googlebot */}
      {selectedWork && (
  <div style={{ display: 'none' }} aria-hidden="true">
    <h2>{selectedWork.title}</h2>
    {selectedWork.caption && <p>{selectedWork.caption}</p>}
    {selectedWork.technique && <p>{selectedWork.technique}</p>}
    {selectedWork.year && <p>{selectedWork.year}</p>}
    <img src={selectedWork.image} alt={selectedWork.title} />
  </div>
)}
    <footer>
      <p>© 2025 <Link to="/">The Vakzthar</Link> — <span>All rights reserved.</span></p>
      <p><span>Follow me on instagram <Link 
      to="https://www.instagram.com/vakzthar?utm_source=vakzthar_landing&utm_medium=web&utm_campaign=launch_landing_2025"
      target='_blank'
      >@Vakzthar</Link></span></p>
    </footer>
    </div>
  );
};

export default Gallery;
