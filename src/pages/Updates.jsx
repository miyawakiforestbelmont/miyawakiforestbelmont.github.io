import {
  Calendar,
  CheckCircle,
  Clock,
  Users,
  TreePine,
  Target,
} from "lucide-react";
import { useState, useEffect } from "react";

function Updates() {
  const [timelineUpdates, setTimelineUpdates] = useState([]);
  const [newsUpdates, setNewsUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  // Your existing hardcoded timeline data as fallback
  const fallbackUpdates = [
    {
      id: 1,
      date: "July 2025",
      title: "Project Website Launch",
      description:
        "Our official website is now live! Share it with friends and family to help spread awareness about our Miyawaki forest project.",
      status: "completed",
      icon: <CheckCircle size={24} />,
    },
    {
      id: 2,
      date: "June 2025",
      title: "Site Selection Completed",
      description:
        "After careful evaluation, we have selected the perfect 3,000 sq ft location on the school campus for our forest. The site receives optimal sunlight and has good drainage.",
      status: "completed",
      icon: <CheckCircle size={24} />,
    },
    {
      id: 3,
      date: "May 2025",
      title: "Native Species Research",
      description:
        "Our team has identified 15 native tree and shrub species that will thrive in our local climate and provide maximum biodiversity benefits.",
      status: "completed",
      icon: <CheckCircle size={24} />,
    },
    {
      id: 4,
      date: "April 2025",
      title: "Planning Begins",
      description:
        "Official project launch! Community meetings held to discuss the vision, gather support, and begin the planning process for our Miyawaki forest.",
      status: "completed",
      icon: <CheckCircle size={24} />,
    },
    {
      id: 5,
      date: "August 2025",
      title: "Volunteer Training Program",
      description:
        "We are organizing training sessions for volunteers to learn about the Miyawaki method, proper planting techniques, and forest maintenance.",
      status: "upcoming",
      icon: <Clock size={24} />,
    },
    {
      id: 6,
      date: "September 2025",
      title: "Soil Preparation",
      description:
        "Begin soil analysis and preparation work. We will test soil composition and add organic materials to create optimal growing conditions.",
      status: "upcoming",
      icon: <Clock size={24} />,
    },
    {
      id: 7,
      date: "October 2025",
      title: "Community Planting Day",
      description:
        "The big day! Students, families, and community volunteers come together to plant our Miyawaki forest in a single day event.",
      status: "upcoming",
      icon: <TreePine size={24} />,
    },
  ];

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Load timeline updates from CMS (if they exist)
        try {
          const timelineData = await import("../content/timeline.json");
          if (timelineData.updates || timelineData.default.updates) {
            const updatesWithIcons = timelineData.updates.map((update) => ({
              ...update,
              icon:
                update.status === "completed" ? (
                  <CheckCircle size={24} />
                ) : update.status === "upcoming" ? (
                  <Clock size={24} />
                ) : (
                  <TreePine size={24} />
                ),
            }));
            setTimelineUpdates(updatesWithIcons);
          } else {
            setTimelineUpdates(fallbackUpdates);
          }
        } catch (error) {
          console.log("No timeline.json found, using fallback data");
          setTimelineUpdates(fallbackUpdates);
        }

        // Load news updates from CMS
        try {
          const newsModules = import.meta.glob("../content/updates/*.json");
          const newsPromises = Object.entries(newsModules).map(
            async ([path, importFn]) => {
              const updateData = await importFn();
              const filename = path.split("/").pop().replace(".json", "");

              return {
                ...updateData.default,
                slug: filename,
              };
            }
          );

          const loadedNews = await Promise.all(newsPromises);
          // Sort by date, newest first
          loadedNews.sort((a, b) => new Date(b.date) - new Date(a.date));
          setNewsUpdates(loadedNews);
        } catch (error) {
          console.log("No news updates found");
          setNewsUpdates([]);
        }
      } catch (error) {
        console.error("Error loading content:", error);
        setTimelineUpdates(fallbackUpdates);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  const completedUpdates = timelineUpdates.filter(
    (update) => update.status === "completed"
  );
  const upcomingUpdates = timelineUpdates.filter(
    (update) => update.status === "upcoming"
  );

  if (loading) {
    return (
      <div className="updates">
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Loading Updates...</h1>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="updates">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Project Updates</h1>
            <p className="subtitle">
              Track our progress as we build our community forest
            </p>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section>
        <div className="container">
          <div className="grid grid-3">
            <div className="card" style={{ textAlign: "center" }}>
              <CheckCircle
                size={48}
                style={{ color: "var(--forest-green)", margin: "0 auto 1rem" }}
              />
              <h3>{completedUpdates.length}</h3>
              <p>Milestones Completed</p>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <Clock
                size={48}
                style={{ color: "var(--soft-blue)", margin: "0 auto 1rem" }}
              />
              <h3>{upcomingUpdates.length}</h3>
              <p>Upcoming Events</p>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <Target
                size={48}
                style={{ color: "var(--earth-brown)", margin: "0 auto 1rem" }}
              />
              <h3>October 4, 2025</h3>
              <p>Target Planting Date</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-alt">
        <div className="container">
          <h2>Project Timeline</h2>
          <div className="timeline">
            {timelineUpdates.map((update, index) => (
              <div key={update.id} className="timeline-item">
                <div className="timeline-content">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        color:
                          update.status === "completed"
                            ? "var(--forest-green)"
                            : "var(--soft-blue)",
                      }}
                    >
                      {update.icon}
                    </div>
                    <span
                      style={{
                        color: "var(--text-light)",
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                    >
                      <Calendar size={16} />
                      {update.date}
                    </span>
                  </div>
                  <h3>{update.title}</h3>
                  <p>{update.description}</p>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      display: "inline-block",
                      backgroundColor:
                        update.status === "completed"
                          ? "rgba(45, 90, 61, 0.1)"
                          : "rgba(107, 141, 181, 0.1)",
                      color:
                        update.status === "completed"
                          ? "var(--forest-green)"
                          : "var(--soft-blue)",
                    }}
                  >
                    {update.status === "completed"
                      ? "✓ Completed"
                      : "⏳ Upcoming"}
                  </div>
                </div>
                <div
                  className="timeline-dot"
                  style={{
                    backgroundColor:
                      update.status === "completed"
                        ? "var(--forest-green)"
                        : "var(--soft-blue)",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CMS News Updates */}
      {newsUpdates.length > 0 && (
        <section>
          <div className="container">
            <h2>Latest News</h2>
            <div className="grid grid-2">
              {newsUpdates.slice(0, 4).map((update) => (
                <div key={update.slug} className="card">
                  {update.featured_image && (
                    <img
                      src={update.featured_image}
                      alt={update.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginBottom: "1rem",
                      }}
                    />
                  )}
                  <h3>{update.title}</h3>
                  <p
                    style={{
                      color: "var(--text-light)",
                      fontSize: "0.9rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {new Date(update.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p>{update.summary}</p>
                  {update.tags && update.tags.length > 0 && (
                    <div style={{ marginTop: "1rem" }}>
                      {update.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            display: "inline-block",
                            padding: "0.25rem 0.5rem",
                            margin: "0.25rem 0.25rem 0 0",
                            backgroundColor: "rgba(45, 90, 61, 0.1)",
                            color: "var(--forest-green)",
                            borderRadius: "12px",
                            fontSize: "0.8rem",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Original Static Content */}
      <section>
        <div className="container">
          <h2>Community Engagement</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Volunteer Interest</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <Users size={32} style={{ color: "var(--forest-green)" }} />
                <div>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "var(--forest-green)",
                    }}
                  >
                    47
                  </div>
                  <div style={{ color: "var(--text-light)" }}>
                    Volunteers Registered
                  </div>
                </div>
              </div>
              <p>
                We've received incredible interest from community members
                wanting to volunteer! Our growing team includes students,
                parents, teachers, and local environmental enthusiasts.
              </p>
              <a
                href="/help#volunteer"
                className="btn btn-outline"
                style={{ marginTop: "1rem" }}
              >
                Join the Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Updates;
