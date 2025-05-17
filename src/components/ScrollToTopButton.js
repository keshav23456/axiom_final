import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
};

export default ScrollToTopButton;