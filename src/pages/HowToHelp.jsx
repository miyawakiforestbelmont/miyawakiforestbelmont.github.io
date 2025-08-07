import { useState } from "react";
import { DollarSign, Heart, HandHeart, Share2, Mail } from "lucide-react";

function HowToHelp() {
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    interest: "planting",
    message: "",
  });

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert("Thank you for your interest! We will contact you soon.");
    setVolunteerForm({
      name: "",
      email: "",
      interest: "planting",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    setVolunteerForm({
      ...volunteerForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="how-to-help">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>How You Can Help</h1>
            <p className="subtitle">
              Every contribution makes our forest dream a reality
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section>
        <div className="container">
          <div className="grid grid-2">
            <div className="card" id="donate">
              <div className="feature-icon">
                <DollarSign size={32} />
              </div>
              <h2>Make a Donation</h2>
              <p>
                Your financial contribution directly supports the purchase of
                native saplings, soil preparation, and maintenance equipment.
                Every dollar brings us closer to our goal of creating a thriving
                forest ecosystem.
              </p>
              <div className="donation-amounts">
                <div className="donation-option">
                  <strong>$25</strong> - Plants 2 native saplings
                </div>
                <div className="donation-option">
                  <strong>$50</strong> - Covers soil preparation for 100 sq ft
                </div>
                <div className="donation-option">
                  <strong>$100</strong> - Sponsors a complete planting section
                </div>
                <div className="donation-option">
                  <strong>$250+</strong> - Major sponsor recognition
                </div>
              </div>
              <a
                href="https://paypal.me/yourproject"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: "1rem" }}
              >
                Donate via PayPal
              </a>
              <p
                style={{
                  fontSize: "0.9rem",
                  marginTop: "1rem",
                  color: "var(--text-light)",
                }}
              >
                Secure donation processing through PayPal. Tax receipts
                available upon request.
              </p>
            </div>

            <div className="card" id="volunteer">
              <div className="feature-icon">
                <HandHeart size={32} />
              </div>
              <h2>Volunteer With Us</h2>
              <p>
                Join our community of environmental advocates! We need
                volunteers for planning, planting, promotion, and ongoing
                maintenance. No experience necessary – we'll provide all the
                training you need.
              </p>
              <form onSubmit={handleVolunteerSubmit} className="volunteer-form">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={volunteerForm.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={volunteerForm.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Primary Interest</label>
                  <select
                    name="interest"
                    value={volunteerForm.interest}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="planting">Planting Day Activities</option>
                    <option value="promoting">
                      Community Outreach & Promotion
                    </option>
                    <option value="helping">
                      General Support & Organization
                    </option>
                    <option value="education">Educational Programs</option>
                    <option value="maintenance">Ongoing Maintenance</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Additional Comments (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={volunteerForm.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Tell us about your experience, availability, or any questions..."
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Join as Volunteer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="section-alt">
        <div className="container">
          <h2>Other Ways to Support</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="feature-icon">
                <Share2 size={24} />
              </div>
              <h3>Spread the Word</h3>
              <p>
                Share our mission on social media, tell friends and family, or
                organize awareness events in your community. Every person who
                learns about our project becomes a potential supporter.
              </p>
              <div style={{ marginTop: "1rem" }}>
                <button
                  className="btn btn-outline"
                  style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                >
                  Share on Facebook
                </button>
                <button
                  className="btn btn-outline"
                  style={{ marginBottom: "0.5rem" }}
                >
                  Share on Twitter
                </button>
              </div>
            </div>

            <div className="card">
              <div className="feature-icon">
                <Heart size={24} />
              </div>
              <h3>Corporate Sponsorship</h3>
              <p>
                Is your business interested in environmental sustainability? We
                offer corporate sponsorship opportunities with recognition on
                our project signage and promotional materials.
              </p>
              <a
                href="/contact"
                className="btn btn-outline"
                style={{ marginTop: "1rem" }}
              >
                Contact Us
              </a>
            </div>

            <div className="card">
              <div className="feature-icon">
                <Mail size={24} />
              </div>
              <h3>Stay Updated</h3>
              <p>
                Subscribe to our newsletter for project updates, volunteer
                opportunities, and environmental education content. Be the first
                to know about our progress!
              </p>
              <div style={{ marginTop: "1rem" }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="form-input"
                  style={{ marginBottom: "0.5rem" }}
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section>
        <div className="container">
          <div
            className="card"
            style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
          >
            <h2>Your Impact</h2>
            <p>
              When you support Miyawaki Forest Action Belmont, you're not just
              planting trees – you're creating a lasting legacy for our
              community. This forest will serve as an educational resource, a
              carbon sink, a wildlife habitat, and a symbol of what we can
              achieve when we work together for environmental sustainability.
            </p>
            <p style={{ fontStyle: "italic", color: "var(--forest-green)" }}>
              "The best time to plant a tree was 20 years ago. The second best
              time is now." – Chinese Proverb
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowToHelp;
