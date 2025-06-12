import '../styles/landing.css';
import TriangleBackground from '../components/TrianguloBG';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <>
    <div className="landing-container">
      <h1 className="title">The Vakzthar</h1>
      <p className="manifesto">I write to no one. And someone always listens.</p>
        <Link to="/gallery" className="gallery-link">
        <button>Gallery of Visions - Digital Art</button>
        </Link>
      <div className="links">
        <a href="https://instagram.com/vakzthar?utm_source=vakzthar_landing&utm_medium=web&utm_campaign=launch_landing_2025" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://thevakztharimachine.substack.com/?utm_source=vakzthar_landing&utm_medium=web&utm_campaign=launch_landing_2025" target="_blank" rel="noopener noreferrer">The Vakzthari Machine <b>(Substack)</b></a>
        <a href="https://instagram.com/vakzthari?utm_source=vakzthar_landing&utm_medium=web&utm_campaign=launch_landing_2025" target="_blank" rel="noopener noreferrer">The Vakzthari Machine <b>(Instagram)</b></a>
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