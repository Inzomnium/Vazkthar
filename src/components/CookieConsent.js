import React, { useState, useEffect } from 'react';
import '../styles/estilos.css'; // Crea un archivo CSS para los estilos del banner


const CookieConsent = ({ onAccept }) => {
    const [showBanner, setShowBanner] = useState(false);
  
    useEffect(() => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setShowBanner(true);
      }
    }, []);
  
    const acceptCookies = () => {
      localStorage.setItem('cookieConsent', 'accepted');
      setShowBanner(false);
      onAccept(); // Inicializa Google Analytics cuando se acepta el consentimiento
    };
  
    const rejectCookies = () => {
      localStorage.setItem('cookieConsent', 'rejected');
      setShowBanner(false);
    };
  
    if (!showBanner) return null;
  
    return (
      <div className="cookie-consent-banner">
       <p>
  We use cookies to enhance your experience and understand how our website is used.  
  By accepting, you agree to the use of cookies, including Google Analytics,  
  which collects data like your IP address, pages visited, and time spent on our site.  
  Your IP address is anonymized to protect your privacy.  
  You can opt out at any time by rejecting cookies or changing your preferences.  
  <a href="/privacy-policy">Learn more in our Privacy Policy.</a>
</p>
        <button onClick={acceptCookies}>Accept</button>
        <button onClick={rejectCookies}>Reject</button>
      </div>
    );
  };
  
  export default CookieConsent;