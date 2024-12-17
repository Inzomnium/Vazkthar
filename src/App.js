import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from './components/ScrollTriggerProxy';
import Banner from "./sections/Banner";
import Footer from './sections/Footer';
import Loader from "./components/Loader";
import CookieConsent from "./components/CookieConsent";

function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  // Función para inicializar Google Analytics
  const initializeGoogleAnalytics = () => {
    if (window.dataLayer) return; // Evita inicializar Analytics más de una vez
  
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-REG42FKZ08';
    script.async = true;
    document.head.appendChild(script);
  
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); } // Aquí está el cambio
      gtag('js', new Date());
  
      // Configuración con anonimización de IP
      gtag('config', 'G-REG42FKZ08', { anonymize_ip: true });
    };
  };

  return (
    <div className="App">
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: { smooth: true },
            tablet: { smooth: true },
          }}
          containerRef={containerRef}
        >
          <AnimatePresence>
            {loaded ? null : <Loader />}
          </AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className='shop-scroller' data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Shop />
              <Banner />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>

      {/* Componente de consentimiento de cookies */}
      <CookieConsent onAccept={initializeGoogleAnalytics} />
    </div>
  );
}

export default App;
