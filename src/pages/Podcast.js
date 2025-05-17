import React from "react";
import "./Podcast.css";
import Footer from "../components/Footer";

const Podcast = () => {
  return (
    <div className="podcast-container">
      {/* Animated background elements */}
      <div className="animated-circle circle-1"></div>
      <div className="animated-circle circle-2"></div>
      <div className="animated-circle circle-3"></div>
      <div className="soundwave"></div>
      
      <div className="podcast-coming-soon">
        <h1 className="podcast-title">Coming Soon</h1>
        
        <p className="podcast-description">
          Axiom Podcast is in development! Get ready for thought-provoking discussions on philosophy, 
          science, and the arts. Our team is working to bring you conversations that will expand your mind 
          and challenge your perspectives.
        </p>
        
        <div className="podcast-teaser">
          <i className="fas fa-microphone-alt podcast-icon"></i>
          <i className="fas fa-headphones podcast-icon"></i>
          <i className="fas fa-podcast podcast-icon"></i>
        </div>
        
        <div className="podcast-platforms">
          <span className="platform-icon" title="Spotify">
            <i className="fab fa-spotify"></i>
          </span>
          <span className="platform-icon" title="Apple Podcasts">
            <i className="fab fa-apple"></i>
          </span>
          <span className="platform-icon" title="Google Podcasts">
            <i className="fab fa-google"></i>
          </span>
          <span className="platform-icon" title="Amazon Music">
            <i className="fab fa-amazon"></i>
          </span>
          <span className="platform-icon" title="YouTube">
            <i className="fab fa-youtube"></i>
          </span>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Podcast;