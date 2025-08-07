import { TreePine, MapPin, Calendar, Users } from "lucide-react";

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>About the Miyawaki Forest Project</h1>
            <p className="subtitle">
              Creating a native forest ecosystem for future generations
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>What is a Miyawaki Forest?</h2>
              <p>
                The Miyawaki Forest is an ultra dense, biodiverse pocket forest
                that recreates the complexity of natural forests and the
                relationships and processes that help them grow strong and
                resilient. By giving home to a vast array of native species,
                they boost the biodiversity of the area and nurture pollinators,
                supporting and restoring ecosystems.
              </p>
              <p>
                They sequester carbon in the soil, reduce air pollution and soil
                contamination, improve water absorption to buffer against
                flooding and erosion, and cool the surrounding area to mitigate
                the urban heat island effect. They also create a living
                classroom for people and communities to learn about native
                ecology, engage in stewardship, and experience the
                interconnectedness of the natural world.
              </p>
            </div>
            <div className="card">
              <h3>Project Details</h3>
              <div className="project-details">
                <div className="detail-item">
                  <MapPin className="detail-icon" />
                  <div>
                    <strong>Location:</strong>
                    <p>Belmont High School, MA</p>
                  </div>
                </div>
                <div className="detail-item">
                  <TreePine className="detail-icon" />
                  <div>
                    <strong>Size:</strong>
                    <p>3,000 square feet</p>
                  </div>
                </div>
                <div className="detail-item">
                  <Calendar className="detail-icon" />
                  <div>
                    <strong>Planting Date:</strong>
                    <p>Fall 2025</p>
                  </div>
                </div>
                <div className="detail-item">
                  <Users className="detail-icon" />
                  <div>
                    <strong>Community Effort:</strong>
                    <p>Students and local residents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-alt">
        <div className="container">
          <h2>Why This Matters for Our Community</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Environmental Benefits</h3>
              <ul>
                <li>
                  <strong>Air Quality:</strong> Trees filter pollutants and
                  produce oxygen
                </li>
                <li>
                  <strong>Carbon Capture:</strong> Dense forests absorb
                  significant CO₂
                </li>
                <li>
                  <strong>Biodiversity:</strong> Native species support local
                  wildlife
                </li>
                <li>
                  <strong>Soil Health:</strong> Root systems prevent erosion and
                  improve soil
                </li>
                <li>
                  <strong>Climate Control:</strong> Natural cooling and humidity
                  regulation
                </li>
              </ul>
            </div>
            <div className="card">
              <h3>Educational Impact</h3>
              <ul>
                <li>
                  <strong>Living Laboratory:</strong> Students study real
                  ecosystem development
                </li>
                <li>
                  <strong>Environmental Awareness:</strong> Hands-on
                  conservation experience
                </li>
                <li>
                  <strong>Community Pride:</strong> Shared ownership of
                  environmental progress
                </li>
                <li>
                  <strong>STEM Learning:</strong> Biology, ecology, and
                  environmental science
                </li>
                <li>
                  <strong>Responsibility:</strong> Caring for our local
                  environment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Science */}
      <section>
        <div className="container">
          <h2>The Science Behind Miyawaki Forests</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>Native Species Selection</h3>
              <p>
                We carefully select indigenous tree and shrub species that
                naturally occur in our region. This ensures the forest is
                perfectly adapted to local climate, soil, and wildlife.
              </p>
            </div>
            <div className="card">
              <h3>Multi-Layer Planting</h3>
              <p>
                Trees are planted in four layers: shrub, sub-tree, tree, and
                canopy layers. This mimics natural forest structure and
                maximizes biodiversity and space utilization.
              </p>
            </div>
            <div className="card">
              <h3>Dense Plantation</h3>
              <p>
                Saplings are planted 3-5 times denser than normal, creating
                competition that drives rapid vertical growth and natural
                selection of the strongest trees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-alt">
        <div className="container">
          <h2>Project Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Planning Phase</h3>
                <p>
                  <strong>Spring 2025</strong>
                </p>
                <p>
                  Site selection, soil analysis, native species research, and
                  community engagement.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Preparation</h3>
                <p>
                  <strong>Summer 2025</strong>
                </p>
                <p>
                  Soil preparation, fundraising completion, volunteer training,
                  and sapling procurement.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Planting Event</h3>
                <p>
                  <strong>Fall 2025</strong>
                </p>
                <p>
                  Community planting day with students, families, and volunteers
                  working together.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Growth & Monitoring</h3>
                <p>
                  <strong>2026-2028</strong>
                </p>
                <p>
                  Regular maintenance, growth monitoring, and educational
                  programs for students.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
