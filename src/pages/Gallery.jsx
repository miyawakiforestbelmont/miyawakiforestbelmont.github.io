import { useState } from "react";
import { Heart, User, MapPin } from "lucide-react";
import { Chrono } from "react-chrono";

function Gallery() {
  // Sample data for foster tree people - replace with actual data
  const [fosterTreePeople] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Downtown",
      image: "/api/placeholder/200/200",
      message: "Excited to help grow our community forest!",
      treeType: "Oak Sapling",
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "Riverside",
      image: "/api/placeholder/200/200",
      message: "For my children's future and cleaner air.",
      treeType: "Maple Sapling",
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      location: "Hillside",
      image: "/api/placeholder/200/200",
      message: "Supporting biodiversity in our neighborhood.",
      treeType: "Birch Sapling",
    },
    {
      id: 4,
      name: "Tom Wilson",
      location: "Central",
      image: "/api/placeholder/200/200",
      message: "Every tree makes a difference!",
      treeType: "Pine Sapling",
    },
    {
      id: 5,
      name: "Emma Davis",
      location: "Westside",
      image: "/api/placeholder/200/200",
      message: "Proud to be part of this green initiative.",
      treeType: "Cedar Sapling",
    },
    {
      id: 6,
      name: "Alex Kumar",
      location: "Eastside",
      image: "/api/placeholder/200/200",
      message: "Building a legacy for future generations.",
      treeType: "Elm Sapling",
    },
  ]);

  const [selectedPerson, setSelectedPerson] = useState(null);

  const items = [
    {
      title: "November 12, 2024",
      cardTitle: "School Committee Meeting",
    },
    {
      title: "April 23, 2025",
      cardTitle: "Potential Natural Vegetation Research for the Planting List ",
      cardSubtitle: "Research Phase",
      cardDetailedText:
        "Based on the soil conditions at the Belmont High School site, botanist Walter Kittredge recommended using a High-terrace Floodplain Forest as a model. This forest community now serves as the reference and inspiration for our planting list.",
    },
    {
      title: "March 26, 2025",
      cardTitle: "Site Assessment",
      cardSubtitle: "Assessment",
      cardDetailedText:
        "While assessing the soil with Bio4Climate, we encountered a layer of clay at a depth of ~12 inches. A lab test of the soil showed that the top layer is sandy loam. We confirmed the soil texture with a simple ribbon test. We then surveyed the existing vegetation on the site, around the pond, and in a nearby grove as part of our Potential Natural Vegetation (PNV) research",
    },
    {
      title: "October 4th, 2025",
      cardTitle: "Community Planting Day",
    },
    // {
    //   title: "Future",
    //   cardTitle: "Perennial Collar Installation",
    // },
  ];

  const customForestTheme = {
    // Base colors - lighter for better readability
    cardBgColor: "#ffffff", // Pure white for cards
    toolbarBgColor: "#ffffff", // White toolbar
    toolbarBtnBgColor: "#f8f9fa", // Light gray for toolbar buttons

    // Enhanced theme properties with lighter forest colors
    iconColor: "#28502e", // --forest-green for better contrast
    buttonHoverBgColor: "#e8f5e8", // Very light green hover
    buttonActiveBgColor: "#47682c", // --sage-green active state
    buttonActiveIconColor: "#ffffff", // White icon on sage-green

    // Borders and effects using lighter forest theme
    buttonBorderColor: "rgba(40, 80, 46, 0.1)", // Very light forest-green border
    buttonHoverBorderColor: "#47682c", // --sage-green
    shadowColor: "rgba(27, 47, 51, 0.1)", // Very light shadow
    glowColor: "rgba(71, 104, 44, 0.2)", // Light sage-green glow

    // Search and dark toggle with lighter colors
    searchHighlightColor: "rgba(71, 104, 44, 0.1)", // Very light sage-green
    darkToggleActiveBgColor: "#f8f9fa", // Light gray
    darkToggleActiveIconColor: "#28502e", // Forest-green icon

    // Text colors - darker for readability
    titleColor: "#1b2f33", // --text-dark for good contrast
    titleColorActive: "#28502e", // --forest-green
    cardTitleColor: "#1b2f33", // --text-dark
    cardSubtitleColor: "#47682c", // --text-light
    cardTextColor: "#1b2f33", // --text-dark

    // Additional light theme properties
    primary: "#28502e", // --forest-green
    secondary: "#47682c", // --sage-green
    background: "#ffffff", // White background
    foreground: "#1b2f33", // Dark text
  };

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Foster a Tree Gallery</h1>
            <p className="subtitle">
              Meet the amazing people who are fostering saplings for our
              Miyawaki forest
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="section-alt">
        <div className="container">
          <div className="grid grid-3">
            <div className="card" style={{ textAlign: "center" }}>
              <Heart
                size={48}
                style={{ color: "var(--forest-green)", margin: "0 auto 1rem" }}
              />
              <h3>{fosterTreePeople.length}</h3>
              <p>Trees Fostered</p>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <User
                size={48}
                style={{ color: "var(--sage-green)", margin: "0 auto 1rem" }}
              />
              <h3>{fosterTreePeople.length}</h3>
              <p>Foster Parents</p>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <MapPin
                size={48}
                style={{ color: "var(--earth-brown)", margin: "0 auto 1rem" }}
              />
              <h3>6</h3>
              <p>Neighborhoods Represented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section>
        <div className="container">
          <h2>Our Foster Tree Community</h2>
          <div className="gallery-grid">
            {fosterTreePeople.map((person) => (
              <div
                key={person.id}
                className="gallery-card"
                onClick={() => setSelectedPerson(person)}
              >
                <div className="gallery-image">
                  <img
                    src={person.image}
                    alt={`${person.name} - Foster Tree Parent`}
                  />
                  <div className="gallery-overlay">
                    <h4>{person.name}</h4>
                    <p>
                      <MapPin size={16} /> {person.location}
                    </p>
                  </div>
                </div>
                <div className="gallery-info">
                  <h4>{person.name}</h4>
                  <p className="tree-type">{person.treeType}</p>
                  <p className="message">"{person.message}"</p>
                  <div className="location">
                    <MapPin size={14} />
                    <span>{person.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-alt">
        <div className="container">
          <div className="card">
            <h3>What is the forest's timeline?</h3>
            {/* <p>
                      We're planning our community planting day for Fall 2025. The
                      exact date will be announced once we complete our fundraising
                      goal and soil preparation work.
                    </p> */}
            <div style={{ width: "auto", height: "auto" }}>
              <Chrono
                items={items}
                mode="HORIZONTAL"
                theme={customForestTheme}
                textDensity="HIGH"
                timelinePointDimension={22}
              />
            </div>
            Click a dot in the timeline to get more information
          </div>
        </div>
      </section>

      {/* How to Foster */}
      <section className="section-alt">
        <div className="container">
          <div
            className="card"
            style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
          >
            <h2>Want to Foster a Tree?</h2>
            <p>
              Join our Foster a Tree program! When you foster a sapling, you're
              not just supporting our forest project – you're becoming part of a
              community of environmental stewards dedicated to creating a
              greener future.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <button
                className="btn btn-primary"
                onClick={() =>
                  window.open(
                    "https://aalslasq.donorsupport.co/page/httpsbio4climateorgm",
                    "_blank"
                  )
                }
              >
                Foster a Tree Today
              </button>
            </div>
            <div
              style={{
                marginTop: "1rem",
                fontSize: "0.9rem",
                color: "var(--text-light)",
              }}
            >
              <p>Foster packages start at $25 and include:</p>
              <ul
                style={{ listStyle: "none", padding: 0, marginTop: "0.5rem" }}
              >
                <li>• Your photo in our gallery</li>
                <li>• Progress updates on your tree</li>
                <li>• Recognition at our planting event</li>
                <li>• Certificate of environmental stewardship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for selected person */}
      {selectedPerson && (
        <div className="modal-overlay" onClick={() => setSelectedPerson(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedPerson(null)}
            >
              ×
            </button>
            <div className="modal-body">
              <img
                src={selectedPerson.image}
                alt={selectedPerson.name}
                className="modal-image"
              />
              <div className="modal-info">
                <h3>{selectedPerson.name}</h3>
                <p className="modal-tree-type">{selectedPerson.treeType}</p>
                <div className="modal-location">
                  <MapPin size={16} />
                  <span>{selectedPerson.location}</span>
                </div>
                <p className="modal-message">"{selectedPerson.message}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
