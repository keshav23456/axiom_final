import React from "react";
import "./Newsletter.css";
import Footer from "../components/Footer";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      {/* Animated background elements */}
      <div className="animated-circle circle-1"></div>
      <div className="animated-circle circle-2"></div>
      <div className="animated-circle circle-3"></div>
      
      <div className="coming-soon-section">
        <h1 className="coming-soon-title">Coming Soon</h1>
        
        <p className="newsletter-description">
          Our newsletter is in the works! Soon we'll be delivering insights, event updates, 
          and philosophical reflections from Axiom directly to your inbox. Stay tuned for our 
          official launch - we can't wait to share our thoughts and ideas with you.
        </p>
      </div>
      
      <Footer />
    </div>
  );
};

export default Newsletter;