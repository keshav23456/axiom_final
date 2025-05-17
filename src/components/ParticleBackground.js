import React, { useRef, useEffect, useState } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set initial canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const particlesArray = [];
    const numberOfParticles = Math.min(70, Math.floor(dimensions.width * dimensions.height / 15000)); // Adaptive particle count
    
    const mouse = {
      x: null,
      y: null,
      radius: 150, // Larger interaction radius
    };

    // Update canvas size on window resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);

    // Track mouse movement
    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    // Track touch movement for mobile
    const handleTouchMove = (event) => {
      if (event.touches[0]) {
        mouse.x = event.touches[0].clientX;
        mouse.y = event.touches[0].clientY;
      }
    };
    
    window.addEventListener("touchmove", handleTouchMove);

    // Reset mouse position when not hovering
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    window.addEventListener("mouseleave", handleMouseLeave);

    // Particle class with enhanced features
    class Particle {
      constructor() {
        // Random positioning
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        // Random size with more variation
        this.size = Math.random() * 3 + 1;
        
        // Base speed that's slower for a more elegant effect
        this.baseSpeedX = (Math.random() - 0.5) * 0.5;
        this.baseSpeedY = (Math.random() - 0.5) * 0.5;
        
        // Actual speed that will be modified
        this.speedX = this.baseSpeedX;
        this.speedY = this.baseSpeedY;
        
        // Add properties for connecting lines
        this.connectedTo = new Set();
        
        // Color with slight variation in blue tones
        this.color = `rgba(${0}, ${Math.floor(Math.random() * 50) + 150}, ${Math.floor(Math.random() * 50) + 200}, ${Math.random() * 0.3 + 0.7})`;
      }

      // Draw particle
      draw() {
        ctx.beginPath();
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0, 100, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update particle position and handle interactions
      update(particles) {
        // Reset connected particles
        this.connectedTo.clear();
        
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges with damping
        if (this.x > canvas.width || this.x < 0) {
          this.speedX *= -0.9;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY *= -0.9;
        }

        // Keep particles within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            // Calculate force based on distance (stronger when closer)
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            
            // Repulsion effect
            const repulsionX = Math.cos(angle) * force * 1;
            const repulsionY = Math.sin(angle) * force * 1;
            
            // Apply repulsion
            this.speedX -= repulsionX;
            this.speedY -= repulsionY;
            
            // Increase particle size temporarily when near mouse
            this.size = Math.min(5, this.size + force * 0.5);
          } else {
            // Gradually return to original size
            this.size = Math.max(this.size * 0.98, Math.random() * 3 + 1);
          }
        } else {
          // Return to base speed when no mouse interaction
          this.speedX = this.speedX * 0.98 + this.baseSpeedX * 0.02;
          this.speedY = this.speedY * 0.98 + this.baseSpeedY * 0.02;
          
          // Return to original size
          this.size = Math.max(this.size * 0.98, Math.random() * 3 + 1);
        }

        // Gradually slow down (damping)
        this.speedX *= 0.99;
        this.speedY *= 0.99;

        // Connect with nearby particles
        this.connectParticles(particles);
        
        // Draw the particle
        this.draw();
      }

      // Connect with nearby particles
      connectParticles(particles) {
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i];
          
          // Skip if it's the same particle or already connected
          if (this === particle || this.connectedTo.has(particle)) {
            continue;
          }
          
          // Calculate distance
          const dx = this.x - particle.x;
          const dy = this.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Connect if within threshold (adjusted based on canvas size)
          const connectionDistance = Math.min(150, canvas.width / 10);
          if (distance < connectionDistance) {
            // Mark as connected to avoid duplicate lines
            this.connectedTo.add(particle);
            particle.connectedTo.add(this);
            
            // Calculate line opacity based on distance
            const opacity = 1 - distance / connectionDistance;
            
            // Draw connection line
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 150, 255, ${opacity * 0.2})`;
            ctx.lineWidth = Math.min(this.size, particle.size) * 0.3;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(particle.x, particle.y);
            ctx.stroke();
          }
        }
      }
    }

    // Initialize particles
    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update all particles
      particlesArray.forEach(particle => particle.update(particlesArray));
      
      // Request next frame
      requestAnimationFrame(animate);
    };

    init();
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [dimensions]); // Re-initialize when dimensions change

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "rgb(10, 10, 20)", // Slightly blue-tinted dark background
      }}
    />
  );
};

export default ParticleBackground;