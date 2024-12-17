import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Texts from './pages/Texts';
import './styles/estilos.css'
import ErrorBoundary from "./components/ErrorBoundary";
import PrivacyPolicy from './pages/PrivacyPolicy';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ErrorBoundary>
     <Routes>
        <Route path="/" element={<App />} />
        <Route path="/texts" element={<Texts />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
