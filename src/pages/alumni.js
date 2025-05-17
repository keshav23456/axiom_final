import React from "react";
import "./alumni.css";
import Footer from "../components/Footer";
import placeholderImage from "../assets/placeholder.svg";

const Alumni = () => {
  // Generate a unique placeholder for each alumni member
  const generatePlaceholder = (name, position) => {
    const hash = (name + position).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue = hash % 360;
    return `https://via.placeholder.com/300x220/${hue.toString(16).padStart(2, '0')}0080/FFFFFF?text=${name.split(' ')[0]}`;
  };
  const alumniData = [
    { 
      name: "John Doe", 
      position: "Software Engineer at Google", 
      year: "2020", 
      image: generatePlaceholder("John Doe", "Software Engineer"),
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      }
    },
    { 
      name: "Jane Smith", 
      position: "Data Scientist at Microsoft", 
      year: "2019", 
      image: generatePlaceholder("Jane Smith", "Data Scientist"),
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      }
    },
    { 
      name: "Michael Brown", 
      position: "Product Manager at Amazon", 
      year: "2018", 
      image: generatePlaceholder("Michael Brown", "Product Manager"),
      socials: {
        linkedin: "https://linkedin.com",
      }
    },
    { 
      name: "Emily Davis", 
      position: "UX Designer at Apple", 
      year: "2021", 
      image: generatePlaceholder("Emily Davis", "UX Designer"),
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      }
    },
    { 
      name: "Chris Wilson", 
      position: "AI Researcher at OpenAI", 
      year: "2020", 
      image: generatePlaceholder("Chris Wilson", "AI Researcher"),
      socials: {
        linkedin: "https://linkedin.com",
      }
    },
    { 
      name: "Sophia Johnson", 
      position: "Marketing Specialist at Meta", 
      year: "2019", 
      image: generatePlaceholder("Sophia Johnson", "Marketing Specialist"),
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      }
    },
    { 
      name: "Daniel Lee", 
      position: "DevOps Engineer at Netflix", 
      year: "2018", 
      image: generatePlaceholder("Daniel Lee", "DevOps Engineer"),
      socials: {
        linkedin: "https://linkedin.com",
      }
    },
    { 
      name: "Olivia Martinez", 
      position: "Full Stack Developer at IBM", 
      year: "2021", 
      image: generatePlaceholder("Olivia Martinez", "Full Stack Developer"),
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      }
    },
    { 
      name: "James Anderson", 
      position: "Cloud Architect at AWS", 
      year: "2020", 
      image: generatePlaceholder("James Anderson", "Cloud Architect"),
      socials: {
        linkedin: "https://linkedin.com",
      }
    },
    { 
      name: "Isabella Thomas", 
      position: "Cybersecurity Analyst at Oracle", 
      year: "2019", 
      image: generatePlaceholder("Isabella Thomas", "Cybersecurity Analyst"),
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      }
    },
  ];

  return (
    <div className="alumni-page">
      <h1 className="alumni-title">Our Alumni Network</h1>
      <p className="alumni-description">
        Our alumni continue to make an impact in their fields and carry forward the philosophical 
        spirit of Axiom. We're proud of their achievements and the diverse paths they've taken.
      </p>
      
      <div className="alumni-container">
        {alumniData.map((alumnus, index) => (
          <div key={index} className="alumni-card">
            <div className="alumni-image-container">
              <img src={alumnus.image} alt={`${alumnus.name}`} className="alumni-image" />
            </div>
            <div className="alumni-card-header">
              <h2 className="alumni-name">{alumnus.name}</h2>
              <p className="alumni-position">{alumnus.position}</p>
            </div>
            <div className="alumni-year">Class of {alumnus.year}</div>
            
            {alumnus.socials && (
              <div className="alumni-socials">
                {alumnus.socials.linkedin && (
                  <a href={alumnus.socials.linkedin} target="_blank" rel="noopener noreferrer" className="alumni-social-icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {alumnus.socials.twitter && (
                  <a href={alumnus.socials.twitter} target="_blank" rel="noopener noreferrer" className="alumni-social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
                <a href={`mailto:${alumnus.name.toLowerCase().replace(/\s+/g, '.')}@alumni.axiom.org`} className="alumni-social-icon">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Alumni;