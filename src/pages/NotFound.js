import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import Footer from "../components/Footer";

const NotFound = () => {
  // Create falling particle effect
  useEffect(() => {
    const errorParticlesContainer = document.querySelector(".error-particles");
    const numParticles = 40; // Number of particles
    
    // Remove existing particles
    while (errorParticlesContainer.firstChild) {
      errorParticlesContainer.removeChild(errorParticlesContainer.firstChild);
    }
    
    // Create particles
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.className = "error-particle";
      
      // Random positioning and animation
      const size = Math.random() * 6 + 4; // Size between 4-10px
      const left = Math.random() * 100; // Random horizontal position
      const delay = Math.random() * 15; // Random delay
      const duration = Math.random() * 10 + 10; // Duration between 10-20s
      
      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      
      // Apply color variations
      particle.style.backgroundColor = i % 5 === 0 
        ? '#ffcc00' // Secondary color for some particles
        : '#00c6ff'; // Primary color for most particles
      
      // Add particle to container
      errorParticlesContainer.appendChild(particle);
    }
    
    return () => {
      // Clean up particles on unmount
      while (errorParticlesContainer && errorParticlesContainer.firstChild) {
        errorParticlesContainer.removeChild(errorParticlesContainer.firstChild);
      }
    };
  }, []);

  return (
    <div className="not-found-container">
      {/* Animated background elements */}
      <div className="animated-circle circle-1"></div>
      <div className="animated-circle circle-2"></div>
      <div className="error-particles"></div>
      
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        
        <p className="not-found-message">
          The philosophical page you're looking for seems to have transcended our digital realm. 
          Maybe it's contemplating its existence elsewhere.
        </p>
        
        <Link to="/" className="home-button">
          Return to Reality
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;