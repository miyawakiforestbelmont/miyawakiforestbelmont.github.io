import { useState, useEffect } from "react";
import { ExternalLink, Users, TreePine, Target, X } from "lucide-react";

function Home() {
  const [activeTab, setActiveTab] = useState("info");
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [supporters, setSupporters] = useState([]);

  useEffect(() => {
    const loadSupporters = async () => {
      try {
        const supportersData = await import("../content/supporters.json");
        if (supportersData.supporters) {
          setSupporters(supportersData.supporters);
        }
      } catch (error) {
        console.log("No supporters.json found, using empty array");
        setSupporters([]);
      }
    };
    loadSupporters();
  }, []);

  const tabs = [
    { id: "info", label: "Miyawaki Forest Info", icon: <TreePine size={20} /> },
    { id: "location", label: "Where To Find It", icon: <Target size={20} /> },
    { id: "about", label: "Supporters", icon: <Users size={20} /> },
  ];

  const handleDonateClick = () => {
    window.open(
      "https://aalslasq.donorsupport.co/page/httpsbio4climateorgm",
      "_blank"
    );
  };

  const handleVolunteerClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScRDSFIKrJNC6zxtKziQb_s1JcpBHgwy1k5pStNhDgsBQfy3g/viewform",
      "_blank"
    );
  };

  const openFullscreen = (imageSrc, altText) => {
    setFullscreenImage({ src: imageSrc, alt: altText });
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-image-container">
              <img
                src="/mainpic.png"
                alt="Community members gathered around the forest site"
                className="hero-image"
                onClick={() =>
                  openFullscreen(
                    "/mainpic.png",
                    "Community members gathered around the forest site"
                  )
                }
              />
              <p className="hero-caption">
                <span style={{ fontStyle: "italic" }}>
                  Community members outlining the upcoming shape of the
                  mini-forest!
                </span>{" "}
                <br />
                Photo by David Mussina
              </p>
            </div>
            <div className="hero-text">
              <h1 style={{ textAlign: "left", marginTop: "-3rem" }}>
                Miyawaki Forest Action Belmont
              </h1>
              <p
                className="subtitle"
                style={{ fontSize: "1.4rem", textAlign: "left" }}
              >
                Join the Movement, Boosting Biodiversity In Belmont!
              </p>
              <div className="cta-buttons">
                <button onClick={handleDonateClick} className="btn btn-primary">
                  <ExternalLink size={20} />
                  Donate To Support Our Forest
                </button>
                <button
                  onClick={handleVolunteerClick}
                  className="btn btn-secondary"
                >
                  <ExternalLink size={20} />
                  Join Us As a Volunteer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Community Planting Day Section */}
      <section className="section-alt">
        <div className="container">
          <div
            className="card"
            style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
          >
            <h2>Community Planting Day</h2>
            <p style={{ fontSize: "1.6rem", color: "#496914ff" }}>
              <br />
              Our planting date is <strong>
                Saturday, October 4th 2025
              </strong>{" "}
              from <br />
              <strong>10 AM to 6 PM</strong> at the Triangle in front of Belmont
              High School by Clay Pit Pond, 221 Concord Ave.
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
              <br></br>Our rain date is October 5th
              <br></br>
              <br></br>
              We are seeking volunteers to help bring Belmont's first
              mini-forest to life by planting hundreds of native plants. If
              you’d like to be part of this transformative project, please fill
              out this sign-up form to express your interest in volunteering.
              The forest will need stewards and volunteers to plant seedlings,
              spread mulch, and organize materials. All ages able to participate
              in planting are encouraged to join!
              <br></br>
              <br></br>
              After the planting, for the next three growing seasons, volunteers
              will maintain and monitor the forest. This including weeding,
              litter removal and data collection. More information on how to get
              involved with post-planting will be released later!
            </p>
            {/* More content will be added here later */}
          </div>
        </div>
      </section>
      {/* Tabbed Content Section */}
      <section>
        <div className="container">
          <div className="tabs-container">
            <div className="tabs-nav">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  id={tab.id}
                  className={`tab-button ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {activeTab === "info" && (
                <div className="tab-panel" id="info">
                  <h2>What is a Miyawaki Forest?</h2>
                  <div className="gridz grid-2z">
                    <div>
                      <p>
                        A Miyawaki Forest is a dense planting of native trees
                        and shrubs using Dr. Miyawaki's methods to recreate old
                        growth forests. By amending the soil and planting the
                        seedlings closely together in an area the size of a
                        small swimming pool, the forest grows in a third of the
                        usual time.
                      </p>
                      <p>
                        The native trees create an ecosystem that accelerates
                        the plants' growth and provides a biodiverse habitat for
                        native pollinators.
                      </p>
                      <p
                        style={{
                          fontStyle: "italic",
                          borderLeft: "4px solid #ccc",
                          paddingLeft: "1rem",
                          color: "#555555ff",
                        }}
                      >
                        "Real forests consisting of potential natural vegetation
                        are formed from tall trees, which are the primary trees,
                        and beneath them, semi-tall trees, short trees, and
                        bottom weeds, with the entire forest functioning as a
                        whole system. They are resistant to natural disasters,
                        and do not collapse easily... In addition to such local
                        functions, globally, they absorb carbon and can be
                        expected to curb global warming by solidifying the
                        carbon and maintaining it within the forest for
                        countless years. Naturally, live trees die after several
                        hundred years. But the semi-tall trees and short trees
                        underneath them have successor trees in waiting. When
                        one tree dies, these successor trees quickly dominate
                        the space it left behind. As a result, forest systems
                        sustain themselves semi permanently."
                        <br />
                        <br />
                        <strong style={{ color: "#555555ff" }}>
                          Dr. Akira Miyawaki
                        </strong>
                        ,{" "}
                        <a
                          href="https://af-info.or.jp/en/blueplanet/list-2006.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Speech for accepting the Blue Planet Prize in 2006
                        </a>
                      </p>
                    </div>
                    <br></br>
                    <div className="benefits-section">
                      <h2 style={{ marginLeft: "-1rem" }}>
                        The Mini-Forest will:
                      </h2>
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <ul
                          className="benefits-list"
                          style={{ flex: "1", margin: "0" }}
                        >
                          <li>
                            <strong>Ameliorate</strong> storm water issues at
                            the high school
                          </li>
                          <li>
                            <strong>Filter</strong> air and water pollutants
                          </li>
                          <li>
                            <strong>Dampen</strong> noise
                          </li>
                          <li>
                            <strong>Cool</strong> during high temperatures
                          </li>
                          <li>
                            <strong>Provide</strong> much needed habitat for
                            pollinators and birds
                          </li>
                        </ul>
                        <figure>
                          <img
                            src="/forestbenefits.png"
                            alt="Forest benefits illustration"
                            style={{
                              width: "600px",
                              height: "auto",
                              borderRadius: "8px",
                              flexShrink: 0,
                              marginTop: "-3rem",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              openFullscreen(
                                "/forestbenefits.png",
                                "Forest benefits illustration"
                              )
                            }
                          />
                          <figcaption
                            style={{ fontSize: "0.7rem", textAlign: "center" }}
                          >
                            Click to enlarge
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "location" && (
                <div className="tab-panel" id="location">
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ flex: "1" }}>
                      <figure>
                        <img
                          src="/3dview.png"
                          alt="3D view of forest location"
                          style={{
                            width: "100%",
                            maxWidth: "830px",
                            height: "auto",
                            borderRadius: "8px",
                            // marginBottom: "0.6rem",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            openFullscreen(
                              "/3dview.png",
                              "3D view of forest location"
                            )
                          }
                        />
                        <figcaption
                          style={{ fontSize: "0.7rem", textAlign: "center" }}
                        >
                          3D view of forest location, click to enlarge
                        </figcaption>
                      </figure>
                      <br />
                      <div style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
                        <p>
                          Mini-forest with surrounding mantle of perennials.
                          North and south native plant gardens outlined in blue.
                        </p>
                        <p style={{ fontSize: "1rem" }}>
                          Belmont High School's front lawn
                          <br />
                          221 Concord Ave, Belmont MA 02478
                        </p>
                      </div>
                    </div>
                    <figure>
                      <img
                        src="/2dview.png"
                        alt="2D view of forest location"
                        style={{
                          width: "300px",
                          height: "400px",
                          borderRadius: "8px",
                          flexShrink: 0,
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          openFullscreen(
                            "/2dview.png",
                            "2D view of forest location"
                          )
                        }
                      />
                      <figcaption
                        style={{ fontSize: "0.7rem", textAlign: "center" }}
                      >
                        2D view of forest location, click to enlarge
                      </figcaption>
                    </figure>
                  </div>
                </div>
              )}

              {activeTab === "updates" && (
                <div className="tab-panel">
                  <h2>Latest Updates & Upcoming Events</h2>
                  <div className="timeline-compact">
                    <div className="timeline-item-compact completed">
                      <div className="timeline-date">July 2025</div>
                      <div className="timeline-content-compact">
                        <h4>Project Website Launch</h4>
                        <p>
                          Our official website is now live! Share it to help
                          spread awareness.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item-compact completed">
                      <div className="timeline-date">June 2025</div>
                      <div className="timeline-content-compact">
                        <h4>Site Selection Completed</h4>
                        <p>
                          Perfect 3,000 sq ft location selected with optimal
                          conditions.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item-compact upcoming">
                      <div className="timeline-date">August 2025</div>
                      <div className="timeline-content-compact">
                        <h4>Volunteer Training Program</h4>
                        <p>
                          Training sessions for volunteers on planting
                          techniques.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item-compact upcoming">
                      <div className="timeline-date">October 2025</div>
                      <div className="timeline-content-compact">
                        <h4>Community Planting Day</h4>
                        <p>
                          Our planting date is Saturday, October 4th 2025 from
                          10 AM to 6 PM at the Triangle in front of Belmont High
                          School by Clay Pit Pond, 221 Concord Ave.
                          <br></br>
                          <br></br>Our rain date is October 5th
                          <br></br>
                          <br></br>
                          We are seeking volunteers to help bring Belmont's
                          first mini-forest to life by planting hundreds of
                          native plants. If you’d like to be part of this
                          transformative project, please fill out this sign-up
                          form to express your interest in volunteering. All
                          ages able to participate in planting are encouraged to
                          join!
                          <br></br>
                          <br></br>
                          The forest will need stewards and volunteers to plant
                          seedlings, spread mulch, and organize materials.
                          <br></br>
                          <br></br>
                          After the planting, for the next three growing
                          seasons, volunteers will maintain and monitor the
                          forest. This including weeding, litter removal and
                          data collection. More information on how to get
                          involved with post-planting will be released later!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "about" && (
                <div className="tab-panel">
                  <div className="gridz grid-2z">
                    <div>
                      <h3>Testimonials</h3>

                      <div className="team-list">
                        <p>
                          "I am extremely excited at the prospect of having this
                          forest established on the Belmont Highschool (BHS)
                          campus. My belief is that the Miyawaki forest project
                          will not only further enhance biodiversity at BHS, but
                          will continue to educate students and community
                          members about the benefits and beauty of creating
                          habitats for native plants and creatures, and
                          offsetting the impact of the constructed environment
                          such as runoff. The forest will also be a valuable
                          educational resource for the school. There are clear
                          benefits for a science and engineering curriculum,
                          which are enhanced by opportunities to observe and
                          collect data from the natural world. But beyond that,
                          the space can be used for mindfulness, creative
                          inspiration, and reflection. My support for this
                          program is unequivocal..."<br></br>
                          <br></br>
                          <strong>
                            Isaac Taylor, Principal, Belmont High School
                          </strong>
                        </p>
                        <p>
                          "Belmont's Shade Tree Committee heartily endorses the
                          Miyawaki forest project at the high school. The
                          Miyawaki forest will grow faster than traditional
                          plantings, creating a dense micro forest in just a few
                          years. Native trees and shrubs will increase the
                          diversity of Belmont's canopy (in keeping with a 2023
                          recommendation from the town tree inventory report!)
                          and will support local wildlife. It's a wonderful
                          opportunity to engage students townwide, as well as
                          the community at large. Generations of Belmont
                          residents will benefit from the forest for years to
                          come."<br></br>
                          <br></br>
                          <strong>Belmont Shade Tree Committee</strong>
                        </p>
                      </div>
                    </div>
                    <br></br>

                    <div>
                      <h3>Community Supporters</h3>
                      <p>
                        This project is made possible by the generous support of
                        our community members, and environmental advocates who
                        believe in creating a greener future.
                      </p>
                      <br />
                      <div
                        className="grid grid-2"
                        style={{ marginLeft: "7rem" }}
                      >
                        {supporters.length > 0 ? (
                          <>
                            <div>
                              <ul>
                                {supporters
                                  .slice(0, Math.ceil(supporters.length / 2))
                                  .map((supporter, index) => (
                                    <li key={index}>{supporter.name}</li>
                                  ))}
                              </ul>
                            </div>
                            <div>
                              <ul>
                                {supporters
                                  .slice(Math.ceil(supporters.length / 2))
                                  .map((supporter, index) => (
                                    <li
                                      key={
                                        index + Math.ceil(supporters.length / 2)
                                      }
                                    >
                                      {supporter.name}
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          <div>
                            <p>Loading supporters...</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div className="modal-overlay" onClick={closeFullscreen}>
          <div
            className="fullscreen-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeFullscreen}>
              <X size={24} />
            </button>
            <img
              src={fullscreenImage.src}
              alt={fullscreenImage.alt}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "95vw",
                maxHeight: "95vh",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
