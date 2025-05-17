import React from "react";
import "./Team.css";
import Footer from "../components/Footer";

// Dynamically load all images from the "team" folder with error handling
const importAll = (requireContext) =>
  requireContext.keys().map(requireContext);

const teamImages = importAll(
  require.context("../assets/team", false, /\.(png|jpe?g|svg)$/)
);


// Map team member names to their corresponding images
const getImage = (name) => {
  // Fallback image with member's initial if the image can't be found
  const fallbackImage = `https://via.placeholder.com/150/00468B/FFFFFF?text=${name.charAt(0)}`;
  
  if (teamImages.length === 0) return fallbackImage;
  
  const formattedName = name.toLowerCase().replace(/\s+/g, "-");
  const foundImage = teamImages.find((image) =>
    typeof image === 'string' && image.toLowerCase().includes(formattedName)
  );
  
  return foundImage || fallbackImage;
};

const teamData = [
  {
    role: "President",
    members: [
      {
        name: "Nikita",
        quote: "Leadership is about making others better as a result of your presence.",
        image: getImage("Nikita"),
        socials: {
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Arnav",
        quote: "A leader is one who knows the way, goes the way, and shows the way.",
        image: getImage("Arnav"),
        socials: {
          linkedin: "#",
          instagram: "#",
        },
      },
    ],
  },
  {
    role: "Vice President",
    members: [
      {
        name: "Tejas",
        quote: "Empowering others is the key to success.",
        image: getImage("Tejas"),
        socials: {
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Shrey Paul",
        quote: "Great leaders don't set out to be a leader, they set out to make a difference.",
        image: getImage("Shrey Paul"),
        socials: {
          linkedin: "#",
          instagram: "#",
        },
      },
    ],
  },
  {
    role: "General Secretary",
    members: [
      {
        name: "Garima Singh",
        quote: "The secret of getting ahead is getting started.",
        image: getImage("Garima Singh"),
        socials: {
          linkedin: "#",
          instagram: "#",
        },
      },
    ],
  },
  {
    role: "Admin Directors",
    members: [
      {
        name: "Dev",
        quote: "Discipline is the bridge between goals and accomplishment.",
        image: getImage("Dev"),
        socials: {
          linkedin: "#",
          instagram: "#",
        },
      },
      {
        name: "Nikhil",
        quote: "Success is the sum of small efforts repeated day in and day out.",
        image: getImage("Nikhil"),
        socials: {
          linkedin: "#",
          instagram: "#",
        },
      },
    ],
  },
  {
    role: "Social Media Director",
    members: [
      {
        name: "Shreyashi Das",
        quote: "Social media is not a media. The key is to listen, engage, and build relationships.",
        image: getImage("Shreyashi Das"),
        socials: {
          linkedin: "#",
          instagram: "#",
        },
      },
    ],
  },
  {
    role: "Design Director",
    members: [
      {
        name: "Sachin Rout",
        quote: "Design is not just what it looks like, but how it works.",
        image: getImage("Sachin Rout"),
        socials: {
          linkedin: "#",
          instagram: "#",
        },
      },
    ],
  },
  {
    role: "Content Director",
    members: [
      {
        name: "Pratham Puri",
        quote: "Content is the reason search began in the first place.",
        image: getImage("Pratham Puri"),
        socials: {
          linkedin: "#",
          instagram: "#",
        },
      },
    ],
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-heading">Our Team</h2>
      <p className="team-description">
        Meet the brilliant minds behind Axiom - a diverse group of thinkers and 
        doers dedicated to fostering intellectual growth and philosophical inquiry.
      </p>
      
      {teamData.map((group, index) => (
        <div key={index} className="team-group">
          <h3 className="team-group-title">{group.role}</h3>
          <div className="team-members">
            {group.members.map((member, idx) => (
              <div key={idx} className="team-member">
                <div className="team-member-image-container">
                  <img 
                    src={member.image} 
                    alt={`Profile of ${member.name}`} 
                    onError={(e) => {
                      console.warn(`Team image for ${member.name} failed to load`);
                      e.target.src = `https://via.placeholder.com/150/00468B/FFFFFF?text=${member.name.charAt(0)}`;
                      e.target.onerror = null; // Prevent infinite loop
                    }}
                  />
                </div>
                <h4 className="team-member-name">{member.name}</h4>
                <p className="team-member-quote">"{member.quote}"</p>
                
                {member.socials && (
                  <div className="team-member-socials">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    <a href={`mailto:${member.name.toLowerCase()}@axiom.nsut.ac.in`} className="social-icon">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <Footer />
    </div>
  );
};

export default Team;