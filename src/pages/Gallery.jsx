import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GalleryMasonry from '../components/GalleryMasonry/GalleryMasonry';
import { Helmet } from 'react-helmet-async';
import works from '../data/works';
import ImageModal from '../components/ImageModal';
import NavBar2 from '../components/Navbar2';
import Footer from '../components/footer';

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
        {/* Canonical dinámico */}
{selectedWork ? (
  <link
    rel="canonical"
    href={`https://vakzthar.com/gallery/${selectedWork.slug}`}
  />
) : (
  <link rel="canonical" href="https://vakzthar.com/gallery" />
)}
     {/* === JSON-LD cuando hay una obra seleccionada === */}
{selectedWork && (
  <>
    <script type="application/ld+json">
      {JSON.stringify((() => {
        const absImage = `https://vakzthar.com${selectedWork.image}`;
        const imageUrl = encodeURI(absImage);
        const encodingFormat = selectedWork.image.toLowerCase().endsWith('.png')
          ? 'image/png'
          : 'image/jpeg';

        return {
          "@context": "https://schema.org",
          "@type": "VisualArtwork",
          "name": selectedWork.title,
          "description": selectedWork.caption || "A Createchnic vision from the Vakzthar archive.",
          "creator": {
            "@type": "Person",
            "name": "Sebastián Leonardo Cofré Barrientos",
            "alternateName": "Vakzthar[11]"
          },
          "genre": ["Mythopoethic digital art", "Createchnics", "Contemporary visual narratives", "Visions from the Vakzthar[11]"],
          "keywords": ["Vakzthar", "digital art", "Partially AI-assisted visual art", "Mythopoethics", "Visual storytelling", "Visual Createchnics"],
          "artform": "Digital Art",
          "artMedium": selectedWork.technique || "Mixed digital technique",
          "dateCreated": selectedWork.year || "2025-01", // ISO YYYY-MM si es posible
          "inLanguage": "en",
          "url": `https://vakzthar.com/gallery/${selectedWork.slug}`,
          "mainEntityOfPage": `https://vakzthar.com/gallery/${selectedWork.slug}`,
          "isPartOf": {
            "@type": "CollectionPage",
            "name": "The Vakzthar – Visual Art Gallery",
            "url": "https://vakzthar.com/gallery"
          },
          "image": {
            "@type": "ImageObject",
            "contentUrl": imageUrl,
            "encodingFormat": encodingFormat,
            "height": 1300,
             "width": 1300,
            "caption": selectedWork.caption || selectedWork.title,
            "creditText": "Vakzthar[11] — Sebastián Leonardo Cofré Barrientos"
            // "license": "https://vakzthar.com/license" // opcional si tienes una URL de licencia
          }
        };
      })())}
    </script>

    {/* Breadcrumbs para la obra */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Gallery",
            "item": "https://vakzthar.com/gallery"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": selectedWork.title,
            "item": `https://vakzthar.com/gallery/${selectedWork.slug}`
          }
        ]
      })}
    </script>
  </>
)}

{/* === JSON-LD cuando NO hay obra seleccionada (listado) === */}
{!selectedWork && (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "The Vakzthar – Visual Art Gallery",
      "url": "https://vakzthar.com/gallery",
      "inLanguage": "en",
      "description": "A collection of digital artworks and mythopoethic transmissions by Vakzthar[11]."
    })}
  </script>
)}
      </Helmet>

      <header>
        <h1 className="tituloGal">
          The Vakzthar Visions – <b>Digital Art</b>
        </h1>
        <NavBar2 />
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
 <Footer />
    </div>
  );
};

export default Gallery;
