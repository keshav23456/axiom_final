import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Axiom Logo" className="footer-logo" />
        <p>Axiom - The Philosophy Society of NSUT</p>

        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:axiom@nsut.ac.in" className="social-icon">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <div className="footer-links">
          <Link to="/about-us" className="footer-link">About Us</Link>
          <Link to="/team" className="footer-link">Team</Link>
          <Link to="/events" className="footer-link">Events</Link>
          <Link to="/alumni" className="footer-link">Alumni</Link>
          <Link to="/podcast" className="footer-link">Podcast</Link>
          <Link to="/newsletter" className="footer-link">Newsletter</Link>
        </div>

        <p className="copyright">&copy; {new Date().getFullYear()} Axiom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;