import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from './components/ScrollTriggerProxy';
import Banner from "./sections/Banner";
import NewArrival from "./sections/NewArrival";
import Footer from './sections/Footer';
import Loader from "./components/Loader";


function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [])
  
  useEffect(() => {
    if (containerRef.current) {
      
    }
  }, []);

  return (
    <div className="App">
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
         
            smartphone:{
              smooth:true,
            },
            tablet:{
              smooth:true,
            }
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

    </div>
  );
}

export default App;
