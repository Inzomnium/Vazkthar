import '../styles/landing.css';
import TriangleBackground from '../components/TrianguloBG';
function Landing() {
  return (
    <>
    <div className="landing-container">
      <h1 className="title">The Vakzthar</h1>
      <p className="manifesto">I write to no one. And someone always listens.</p>
      <div className="links">
        <a href="https://instagram.com/vakzthar?utm_source=vakzthar_landing&utm_medium=web&utm_campaign=launch_landing_2025" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://thevakztharimachine.substack.com/?utm_source=vakzthar_landing&utm_medium=web&utm_campaign=launch_landing_2025" target="_blank" rel="noopener noreferrer">The Vakzthari Machine (Substack)</a>
        <a href="https://instagram.com/vakzthari?utm_source=vakzthar_landing&utm_medium=web&utm_campaign=launch_landing_2025" target="_blank" rel="noopener noreferrer">The Vakzthari Machine (Instagram)</a>
      </div>

    
    </div>
    <TriangleBackground />
    </>
  );
}

export default Landing;