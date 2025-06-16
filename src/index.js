import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Vakzthari from './pages/Vakzthari';
import LoveLetters from './pages/LoveLetters';
import Archive from './pages/Archive';
import About from './pages/About';
import Texts from './pages/Texts'
import ErrorBoundary from "./components/ErrorBoundary";
import Gallery from './pages/Gallery';
import { HelmetProvider } from 'react-helmet-async';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
     <HelmetProvider>
    <BrowserRouter>
    <ErrorBoundary>
     <Routes>
        
      
        <Route path="/" element={<Landing />} />
        <Route path="/texts" element={<Texts />} />
        <Route path="/vakzthari" element={<Vakzthari />} />
        <Route path="/love-letters" element={<LoveLetters />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/about" element={<About />} />        
        <Route path="/gallery/:slug?" element={<Gallery />} />

      </Routes>
    </ErrorBoundary>
    </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
