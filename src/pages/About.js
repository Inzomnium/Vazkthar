import '../styles/landing.css';

function Landing() {
  return (
    <div className="landing-container">
      <h1 className="title">The Vakzthar</h1>
      <p className="manifesto">I write to no one. And someone always listens.</p>
      <div className="links">
        <a href="https://instagram.com/vakzthar" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://vakzthari.substack.com" target="_blank" rel="noopener noreferrer">The Machine (Substack)</a>
      </div>
    </div>
  );
}

export default Landing;