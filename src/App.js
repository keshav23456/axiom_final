import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import ParticleBackground from "./components/ParticleBackground";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Pages
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Podcast from "./pages/Podcast";
import Newsletter from "./pages/Newsletter";
import Alumni from "./pages/alumni";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {/* Particles in the background */}
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
          <ParticleBackground />
        </div>

        {/* NavBar */}
        <NavBar />
        
        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/alumni" element={<Alumni />} />
          </Routes>
        </main>
        
        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;