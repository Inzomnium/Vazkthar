import React from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: [Date]</p>

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to Vakzthar. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
        </p>
      </section>

      <section>
        <h2>What Data We Collect</h2>
        <p>
          We may collect the following data:
        </p>
        <ul>
          <li>Your IP address (anonymized)</li>
          <li>Pages visited and time spent on our site</li>
          <li>Device and browser information</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Data</h2>
        <p>
          We use Google Analytics to understand how visitors interact with our website. This helps us improve our content and user experience. Your IP address is anonymized to protect your privacy.
        </p>
      </section>

      <section>
        <h2>Your Choices</h2>
        <p>
          You can choose to accept or reject cookies when you visit our site. You can also change your preferences at any time by clicking the "Change Cookie Preferences" link at the bottom of our site.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:  
          <a href="mailto:contact@vakzthar.com">contact@vakzthar.com</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
