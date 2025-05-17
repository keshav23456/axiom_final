import React from "react";
import "./Events.css";
import Footer from "../components/Footer";

// Dynamically load all images and videos from event folders
const importAll = (requireContext) => requireContext.keys().map(requireContext);

// Try/catch blocks to handle potential missing folders gracefully
const wheelOfDoomMedia = (() => {
  try {
    return importAll(
      require.context(
        "../assets/events/wheel of doom",
        false,
        /\.(png|jpe?g|svg|mp4|webm)$/
      )
    );
  } catch (error) {
    console.warn("Could not load Wheel of Doom media");
    return [];
  }
})();

const philowalk = (() => {
  try {
    return importAll(
      require.context(
        "../assets/events/Philo Walk 24",
        false,
        /\.(png|jpe?g|svg|mp4|webm)$/
      )
    );
  } catch (error) {
    console.warn("Could not load Philo Walk media");
    return [];
  }
})();

const jagriti = (() => {
  try {
    return importAll(
      require.context(
        "../assets/events/jagriti",
        false,
        /\.(png|jpe?g|svg|mp4|webm)$/
      )
    );
  } catch (error) {
    console.warn("Could not load Jagriti media");
    return [];
  }
})();

const farewell24 = (() => {
  try {
    return importAll(
      require.context(
        "../assets/events/farewell 24",
        false,
        /\.(png|jpe?g|svg|mp4|webm)$/
      )
    );
  } catch (error) {
    console.warn("Could not load Farewell media");
    return [];
  }
})();

const cpcMedia = (() => {
  try {
    return importAll(
      require.context(
        "../assets/events/cpc",
        false,
        /\.(png|jpe?g|svg|mp4|webm)$/
      )
    );
  } catch (error) {
    console.warn("Could not load CPC media");
    return [];
  }
})();

const Trustfalldisaster = (() => {
  try {
    return importAll(
      require.context(
        "../assets/events/Trustfalldisaster",
        false,
        /\.(png|jpe?g|svg|mp4|webm)$/
      )
    );
  } catch (error) {
    console.warn("Could not load Trust Fall Disaster media");
    return [];
  }
})();

const Scribbleandscramble = (() => {
  try {
    return importAll(
      require.context(
        "../assets/events/scribble and scramble",
        false,
        /\.(png|jpe?g|svg|mp4|webm)$/
      )
    );
  } catch (error) {
    console.warn("Could not load Scribble and Scramble media");
    return [];
  }
})();

// Function to generate placeholder images as fallback
const generatePlaceholder = (eventName, index) => {
  return `/api/placeholder/300/200?text=${eventName.replace(/\s+/g, '+')}-${index}`;
};

// Event data with descriptions
const eventData = [
  {
    title: "Trust Fall Disaster",
    date: "March 20, 2025",
    location: "NSUT fountain ke pass wala ground",
    description: "A thrilling team-building exercise that challenges participants to build trust through guided falls. This event focuses on developing mutual confidence and strengthening bonds between team members in an exciting environment.",
    media: Trustfalldisaster.length > 0 ? Trustfalldisaster : Array.from({ length: 4 }, (_, i) => generatePlaceholder("Trust Fall Disaster", i+1)),
    fallbackImage: "/api/placeholder/300/200?text=Trust+Fall+Event"
  },
  {
    title: "Jagriti 2025",
    date: "February 15, 2025",
    location: "NSUT Auditorium",
    description: "Jagriti, our annual philosophical awakening event, brings together thinkers from various fields to ignite intellectual curiosity. The event features thought-provoking panels, interactive discussions, and philosophical debates that encourage critical thinking.",
    media: jagriti.length > 0 ? jagriti : Array.from({ length: 4 }, (_, i) => generatePlaceholder("Jagriti", i+1)),
    fallbackImage: "/api/placeholder/300/200?text=Jagriti+Event"
  },
  {
    title: "Wheel of Doom",
    date: "April 15, 2025",
    location: "NESCI Ground",
    description: "Experience the thrill of the Wheel of Doom! A captivating event filled with challenges, excitement, and unforgettable moments. Participants spin the wheel and face various philosophical challenges and brain teasers that test their intellectual agility.",
    media: wheelOfDoomMedia.length > 0 ? wheelOfDoomMedia : Array.from({ length: 4 }, (_, i) => generatePlaceholder("Wheel of Doom", i+1)),
    fallbackImage: "/api/placeholder/300/200?text=Wheel+of+Doom"
  },
  {
    title: "CPC - Chai Pe Charcha",
    date: "Weekly",
    location: "NSUT Canteen",
    description: "Join us every week for an engaging discussion over chai. Share ideas, debate philosophical concepts, and connect with like-minded individuals in a casual setting. Each session focuses on a different theme, allowing for diverse perspectives and enriching conversations.",
    media: cpcMedia.length > 0 ? cpcMedia : Array.from({ length: 3 }, (_, i) => generatePlaceholder("Chai Pe Charcha", i+1)),
    fallbackImage: "/api/placeholder/300/200?text=Chai+Pe+Charcha"
  },
  {
    title: "Scribble and Scramble",
    date: "May 5, 2025",
    location: "NSUT NESCI Ground",
    description: "A creative fusion of art and philosophy, Scribble and Scramble challenges participants to express abstract philosophical concepts through artistic means. This event stimulates both the logical and creative sides of the brain, resulting in unique interpretations of complex ideas.",
    media: Scribbleandscramble.length > 0 ? Scribbleandscramble : Array.from({ length: 4 }, (_, i) => generatePlaceholder("Scribble and Scramble", i+1)),
    fallbackImage: "/api/placeholder/300/200?text=Scribble+and+Scramble"
  },
  {
    title: "Philo Walk 24",
    date: "January 25, 2025",
    location: "NSUT Campus",
    description: "Following in the tradition of ancient philosophers who taught while walking, Philo Walk takes participants on a journey through campus while engaging in deep philosophical discussions. The physical movement combined with intellectual discourse creates a unique learning experience.",
    media: philowalk.length > 0 ? philowalk : Array.from({ length: 4 }, (_, i) => generatePlaceholder("Philo Walk", i+1)),
    fallbackImage: "/api/placeholder/300/200?text=Philo+Walk"
  },
  {
    title: "Farewell 2024",
    date: "May 10, 2024",
    location: "NSUT Conference Hall",
    description: "A heartfelt ceremony to bid farewell to our graduating members. The event celebrates their contributions to Axiom and reflects on the philosophical journey we've shared together. It's a night of memories, gratitude, and looking forward to future wisdom.",
    media: farewell24.length > 0 ? farewell24 : Array.from({ length: 4 }, (_, i) => generatePlaceholder("Farewell", i+1)),
    fallbackImage: "/api/placeholder/300/200?text=Farewell+2024"
  },
];

const Events = () => {
  return (
    <div className="events-container">
      <h2 className="events-heading">Events</h2>
      <p className="events-description">
        Explore our exciting events and activities that push the boundaries of philosophical thinking 
        and create memorable experiences for our community.
      </p>
      <div className="events-list">
        {eventData.map((event, index) => (
          <div className="event-section" key={index}>
            <div className="event-header">
              <h3 className="event-title">{event.title}</h3>
              <div className="event-date-location">
                <span className="event-date">
                  <i className="far fa-calendar-alt"></i> {event.date}
                </span>
                <span className="event-location">
                  <i className="fas fa-map-marker-alt"></i> {event.location}
                </span>
              </div>
            </div>
            <p className="event-description">{event.description}</p>

            {/* Images Gallery */}
            {event.media && event.media.some(media => {
              // Check if it's a string or an object with a URL property
              const path = typeof media === 'string' ? media : (media && media.default ? media.default : '');
              return path && /\.(png|jpe?g|svg)$/i.test(path);
            }) && (
              <>
                <h4 className="media-row-title">Event Gallery</h4>
                <div className="event-images-row">
                  {event.media
                    .filter(media => {
                      // Check if it's a string or an object with a URL property
                      const path = typeof media === 'string' ? media : (media && media.default ? media.default : '');
                      return path && /\.(png|jpe?g|svg)$/i.test(path);
                    })
                    .map((image, idx) => {
                      // Get the image source, whether it's a string or an object
                      const imageSrc = typeof image === 'string' ? image : (image && image.default ? image.default : '');
                      return (
                        <div className="media-item" key={idx}>
                          <img 
                            src={imageSrc} 
                            alt={`${event.title} image ${idx + 1}`}
                            onError={(e) => {
                              console.warn(`Failed to load image for ${event.title}:`, imageSrc);
                              e.target.src = event.fallbackImage;
                              e.target.onerror = null; // Prevent infinite loop
                            }}
                          />
                        </div>
                      );
                    })}
                </div>
              </>
            )}

            {/* Videos Gallery */}
            {event.media && event.media.some(media => {
              // Check if it's a string or an object with a URL property
              const path = typeof media === 'string' ? media : (media && media.default ? media.default : '');
              return path && /\.(mp4|webm)$/i.test(path);
            }) && (
              <>
                <h4 className="media-row-title">Event Videos</h4>
                <div className="event-videos-row">
                  {event.media
                    .filter(media => {
                      // Check if it's a string or an object with a URL property
                      const path = typeof media === 'string' ? media : (media && media.default ? media.default : '');
                      return path && /\.(mp4|webm)$/i.test(path);
                    })
                    .map((video, idx) => {
                      // Get the video source, whether it's a string or an object
                      const videoSrc = typeof video === 'string' ? video : (video && video.default ? video.default : '');
                      return (
                        <div className="media-item video-item" key={idx}>
                          <video 
                            controls
                            preload="metadata"
                            src={videoSrc}
                            alt={`${event.title} video ${idx + 1}`}
                            onError={(e) => {
                              console.warn(`Failed to load video for ${event.title}:`, videoSrc);
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      );
                    })}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Events;