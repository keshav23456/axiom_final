import React from "react";
import "./AboutUs.css";
import Footer from "../components/Footer";

// Import the family image with the original path
import familyImage from "../assets/FAMILY.HEIC";

// Dynamically load all images from the gallery folder (using the original approach)
const importAll = (requireContext) =>
  requireContext.keys().map(requireContext);

// Use try-catch to handle potential missing files during development
let galleryImages = [];
try {
  galleryImages = importAll(
    require.context("../assets/gallery", false, /\.(png|jpe?g|svg)$/)
  );
  console.log("Gallery Images loaded:", galleryImages.length);
} catch (error) {
  console.warn("Could not load gallery images:", error);
  // Fallback to empty array, which will be handled in the rendering
  galleryImages = [];
}

const AboutUs = () => {
  // Philosophy cards data
  const philosophyCards = [
    {
      title: "Our Philosophy",
      content:
        "AXIOM stands as a beacon of intellectual curiosity, a society where ideas converge and minds expand. We believe in fostering an environment where questions are celebrated, and answers are merely the beginning of new inquiries.",
      icon: "fas fa-brain"
    },
    {
      title: "Our Mission",
      content:
        "To cultivate a community of thinkers, dreamers, and doers. AXIOM is dedicated to exploring the depths of human thought, bridging the gap between philosophy, science, and art.",
      icon: "fas fa-compass"
    },
    {
      title: "Our Vision",
      content:
        "A world where knowledge is boundless, where every individual is empowered to think critically and creatively. AXIOM envisions a future driven by innovation and guided by wisdom.",
      icon: "fas fa-eye"
    },
  ];

  // Check if we have any gallery images to display
  const hasGalleryImages = galleryImages && galleryImages.length > 0;

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="about-heading">Welcome to AXIOM</h1>
        <p className="about-description">
          A hub of intellectual exploration and philosophical wonder. Here at AXIOM, we dare to ask 
          the big questions and embrace the infinite possibilities of the mind.
        </p>
      </section>
      
      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="cards-container">
          {philosophyCards.map((card, index) => (
            <div className="card" key={index}>
              <i className={`${card.icon} card-icon`}></i>
              <h2 className="card-title">{card.title}</h2>
              <p className="card-content">{card.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Origin Section */}
      <section className="origin-section">
        <div className="long-card">
          <h2 className="long-card-title">The Origin of AXIOM</h2>
          <div className="long-card-content">
            <p>
              AXIOM began as a humble idea, a spark of inspiration among a group of thinkers who yearned 
              for a space to explore the depths of human thought. It was born from conversations that 
              stretched long into the night, fueled by curiosity and a shared belief in the power of knowledge.
            </p>
            <p>
              Over time, AXIOM grew into a community—a collective of dreamers, philosophers, scientists, 
              and artists. Together, they forged a path toward understanding, blending disciplines and 
              breaking boundaries. AXIOM isn't just a society; it's a movement, a testament to what can 
              be achieved when minds come together in pursuit of truth.
            </p>
          </div>
          <div className="long-card-image">
            <img 
              src={familyImage} 
              alt="AXIOM Family" 
              onError={(e) => {
                console.warn("Family image failed to load");
                e.target.src = "https://via.placeholder.com/700x400/003366/FFFFFF?text=AXIOM+Family";
                e.target.onerror = null; // Prevent infinite loop
              }}
            />
          </div>
        </div>
      </section>

      {/* Gallery Section - Only show if we have images */}
      {hasGalleryImages && (
        <section className="gallery-section">
          <h2 className="gallery-heading">Our Gallery</h2>
          <div className="gallery-container">
            <div className="gallery-slider">
              <div className="gallery-track">
                {galleryImages.map((image, index) => (
                  <div className="gallery-item" key={index}>
                    <img
                      src={image}
                      alt={`Gallery item ${index + 1}`}
                      onError={(e) => {
                        console.warn(`Gallery image ${index} failed to load`);
                        e.target.src = `https://via.placeholder.com/300x200/003366/FFFFFF?text=Gallery+${index + 1}`;
                        e.target.onerror = null; // Prevent infinite loop
                      }}
                    />
                  </div>
                ))}
                {/* Duplicate images for seamless looping */}
                {galleryImages.map((image, index) => (
                  <div className="gallery-item" key={`duplicate-${index}`}>
                    <img
                      src={image}
                      alt={`Gallery item ${index + 1}`}
                      onError={(e) => {
                        console.warn(`Duplicate gallery image ${index} failed to load`);
                        e.target.src = `https://via.placeholder.com/300x200/003366/FFFFFF?text=Gallery+${index + 1}`;
                        e.target.onerror = null; // Prevent infinite loop
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AboutUs;