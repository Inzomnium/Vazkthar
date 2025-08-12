import '../styles/landing.css';
import { Helmet } from 'react-helmet-async';
import TriangleBackground from '../components/TrianguloBG';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <>
    <Helmet>
  <title>Vakzthar[11] – A Mythopoethic Createchnics Operator</title>
  <meta name="description" content="Vakzthar[11] is a practitioner of Createchnics — merging poetic glitch, mythotechnics and narrative resonance to create emotionally charged digital universes." />
  <meta name="keywords" content="Vakzthar, Createchnics, mythopoethics, poetic glitch, digital art, narrative design, AI-assisted creation, speculative art, visual storytelling, symbolic aesthetics, narrative universes, Sebastián Cofré, Vakzthar[11]" />
  <meta name="author" content="Vakzthar[11] (Sebastián Leonardo Cofré Barrientos)" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Vakzthar[11] – Mythopoethic Createchnics" />
  <meta property="og:description" content="Digital author crafting poetic universes through mythotechnics and symbolic resonance. Enter the world of Vakzthar." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vakzthar.com/" />
  <meta property="og:image" content="https://vakzthar.com/imgz/vkz.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Vakzthar[11] – Mythopoethic Createchnics" />
  <meta name="twitter:description" content="A creator of mythopoetic visual universes in the age of machines." />
  <meta name="twitter:image" content="https://vakzthar.com/img/vkz.jpg" />
  <meta name="theme-color" content="#000000" />
  <meta name="color-scheme" content="dark" />
  <link rel="canonical" href="https://vakzthar.com/" />

  {/* Schema.org JSON-LD */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Vakzthar[11]",
      "alternateName": "Sebastián Leonardo Cofré Barrientos",
      "url": "https://vakzthar.com",
      "jobTitle": "Visual Artist, Narrative Designer, Creator",
      "worksFor": {
        "@type": "Organization",
        "name": "Vakzthar[11]"
      },
      "sameAs": [
        "https://instagram.com/vakzthar",
        "https://vakzthar.substack.com"
      ],
      "knowsAbout": [
        "Createchnics",
        "Mythopoethics",
        "Narrative Design",
        "Symbolic Systems",
        "Poetic Glitch"
      ],
      "image": "https://vakzthar.com/assets/og-image.jpg"
    }
    `}
  </script>
</Helmet>
    <div className="landing-container">
      <h1 className="title">The Vakzthar<span>[11]</span></h1>
      <p className="manifesto">I write to no one. And someone always listens.</p>

        <Link to="/gallery" className="gallery-link">
        <button>Gallery of Visions - Digital Art</button>
        </Link>
        <Link to="/about" className="gallery-link">
        <button>About Vakzthar</button>
        </Link>
      <div className="links">
        <h2>Other Channels</h2>
        <a href="https://instagram.com/vakzthar?utm_source=vakzthar_landing&utm_medium=web&utm_campaign=launch_landing_2025" target="_blank" rel="me noreferrer">Instagram</a>
        <a href="https://thevakztharimachine.substack.com/?utm_source=vakzthar_landing&utm_medium=web&utm_campaign=launch_landing_2025" target="_blank" rel="noopener noreferrer">The Vakzthari Machine <b>(Substack)</b></a>
        <a href="https://instagram.com/vakzthari?utm_source=vakzthar_landing&utm_medium=web&utm_campaign=launch_landing_2025" target="_blank" rel="author noopener noreferrer">The Vakzthari Machine <b>(Instagram)</b></a>
        <a
  href="mailto:contact@vakzthar.com?subject=Transmission%20Request"
  className="contact-button"
  aria-label="Send an email to contact@vakzthar.com"
>
  contact@vakzthar.com
</a>
      </div>

      

    
    </div>
    <TriangleBackground />
    </>
  );
}

export default Landing;