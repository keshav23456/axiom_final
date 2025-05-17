import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo and Heading */}
      <div className="navbar-logo-heading">
        <Link to="/">
          <img src={logo} alt="Axiom Logo" className="navbar-logo" />
        </Link>
        <Link to="/" className="navbar-heading-link">
          <h1 className="navbar-heading">AXIOM</h1>
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/about-us" className={`navbar-link ${isActive("/about-us") || isActive("/")}`}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/team" className={`navbar-link ${isActive("/team")}`}>
            Team
          </Link>
        </li>
        <li>
          <Link to="/events" className={`navbar-link ${isActive("/events")}`}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/alumni" className={`navbar-link ${isActive("/alumni")}`}>
            Alumni
          </Link>
        </li>
        <li>
          <Link to="/podcast" className={`navbar-link ${isActive("/podcast")}`}>
            Podcast
          </Link>
        </li>
        <li>
          <Link to="/newsletter" className={`navbar-link ${isActive("/newsletter")}`}>
            Newsletter
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;