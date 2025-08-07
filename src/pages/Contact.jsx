import { useState } from "react";
import { Chrono } from "react-chrono";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Send,
  ExternalLink,
} from "lucide-react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const items = [
    {
      title: "May 2024",
      cardTitle: "Miyawaki Forest Project",
      cardSubtitle: "Kickoff Meeting",
      cardDetailedText:
        "We launched the Miyawaki Forest Project with a kickoff meeting on January 15, 2023.",
    },
    {
      title: "June 2024",
      cardTitle: "Community Workshops",
      cardSubtitle: "Hands-on Workshops",
      cardDetailedText:
        "We held a series of workshops to engage the community and educate them about the project.",
    },
    {
      title: "Planting Day",
      cardTitle: "First Planting Day",
      cardSubtitle: "Community Planting Event",
      cardDetailedText:
        "The first community planting day took place on March 10, 2023.",
    },
    {
      title: "Maintenance",
      cardTitle: "Ongoing Maintenance",
      cardSubtitle: "Regular Care",
      cardDetailedText:
        "We conduct regular maintenance activities to ensure the health and growth of the Miyawaki forest.",
    },
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
    <div className="contact">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p className="subtitle">
              Get in touch with the Miyawaki Forest Action Belmont team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Team */}
      <section>
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h2>Get in Touch</h2>
              <p>
                Have questions about our project? Want to learn more about how
                you can help? Reach out to our email
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <strong>Email</strong>
                    <p>miniforestbelmont@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <h2>Our Team</h2>
              <p>
                Miyawaki Forest Action Belmont (MFAB) is an intergenerational
                group of local residents dedicated to establishing Miyawaki
                forests in Belmont. Our focus is on education and community
                building, providing Belmont a hands-on place to learn about
                environmental stewardship and biodiversity.
              </p>
              <p>
                This forest is brought together with Biodiversity For a Livable
                Climate, installer of Miyawaki Forests.
              </p>

              <div style={{ marginTop: "1.5rem" }}>
                <h3>Project Leadership</h3>
                <div style={{ fontSize: "0.95rem", lineHeight: "1.4" }}>
                  <strong>Jean Devine</strong> <br />
                  <strong>Jess Hausman</strong> <br />
                  <strong>Ralph Jones</strong> <br />
                  <strong>Holly Kong</strong> <br />
                  <strong>Ranganath Nayak</strong> <br />
                  <strong>Michelle Oishi</strong> <br />
                  <strong>Kirsten Waerstad</strong> <br />
                  <strong>Sarah Wang</strong> <br />
                  <strong>Anne-Marie Lambert</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-alt">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
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
              />
            </div>
          </div>
          <div className="grid grid-2" style={{ marginTop: "2rem" }}>
            <div className="card">
              <h3>How can I volunteer?</h3>
              <p>
                Visit our <a href="/help#volunteer">How to Help</a> page to fill
                out our volunteer interest form. We need help with planting,
                promotion, organization, and ongoing maintenance.
              </p>
            </div>

            <div className="card">
              <h3>Why is the forest located at the High School?</h3>
              <p>
                The forest will serve as a living laboratory for students to
                study ecosystem development, native species, and environmental
                science through hands-on learning.
              </p>
            </div>

            <div className="card">
              <h3>How much maintenance will the forest require?</h3>
              <p>
                Miyawaki forests require regular maintenance for the first 2-3
                years, including watering and weeding. After that, they become
                completely self-sustaining ecosystems.
              </p>
            </div>

            <div className="card">
              <h3>What native species will be planted?</h3>
              <p>
                We've identified 15 native tree and shrub species that naturally
                occur in our region. Visit our <a href="/learn">Learn</a> page
                for more details about the scientific approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-alt">
        <div className="container">
          <div className="card" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2>Ready to Make a Difference?</h2>
            <p>
              Join our mission to create a thriving native forest ecosystem.
              Every contribution, big or small, helps us reach our goal.
            </p>
            <div className="cta-buttons">
              <button onClick={handleDonateClick} className="btn btn-primary">
                <ExternalLink size={20} />
                Donate Today
              </button>
              <button
                onClick={handleVolunteerClick}
                className="btn btn-secondary"
              >
                <ExternalLink size={20} />
                Volunteer With Us
              </button>
            </div>
            <br />
            <h3>References and Resources</h3>
            <ul>
              <li>
                Our main{" "}
                <a
                  href="https://bio4climate.org/miyawaki-forest-program/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Miyawaki Forest Program
                </a>{" "}
                page
              </li>
              <li>
                Bio4Climate's{" "}
                <a
                  href="https://www.youtube.com/playlist?list=PLsWWRqCX9eSaeVvsc-zUsK4HPt0enmRcc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Miyawaki Forest video playlist
                </a>
              </li>
              <li>
                '
                <a
                  href="https://www.csmonitor.com/Environment/2023/0922/Miyawaki-A-little-forest-with-a-towering-task-video"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A Little Forest with a Towering Task
                </a>
                ' – Short documentary on the Miyawaki planting process and the
                'grounded hope' behind the work
              </li>
              <li>
                '
                <a
                  href="https://www.nytimes.com/2023/08/24/climate/tiny-forests-climate-miyawaki.html?unlocked_article_code=S_xwWpdQcIVJSDpMaNcyo-EH_Y2Lw6tOH6xwX_NE6AwkO_FWy8YH_hJdLatSfnn70lg8twstZFrav63MlEM9pPc3d6092cif7kGnuhiFYu8NzMbHBdgveuElb7HdfFvnhIAV_hsq9oaiWB6w00t92Drj7pbUnnzbP-oGoRY4sr0Kx5BXcr0VCLzL7CYXyvYfIoBcZVe9h_9MKEl9f-yEcz_Li0NKOGKr7Bmuch0m6RkWl3sd6AK0WKXd6joit-Q3tAJlQdA-EozMxnFNbRGedk_Iwtq_XUlOUzNuaBELtI6OvvoxJOCl1UVvKsY3KoBg3PCn1xNZmmwtdW8FIDBN_kx5BfQY-WU&smid=url-share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tiny Forests with Big Benefits
                </a>
                ' – A feature of our Cambridge forests and other Miyawaki
                plantings in <em>The New York Times</em>
              </li>
              <li>
                <em>
                  <a
                    href="https://www.chelseagreen.com/product/mini-forest-revolution/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mini-Forest Revolution: Using the Miyawaki Method to Rapidly
                    Rewild the World
                  </a>
                </em>{" "}
                by Hannah Lewis, published by Chelsea Green in June 2022
              </li>
            </ul>
            <div
              className="contact-info"
              style={{ textAlign: "center", marginTop: "30px" }}
            >
              <h4>Additional Contact Information</h4>
              <p>
                Email:{" "}
                <a href="mailto:info@miyawakiforestaction.org">
                  info@miyawakiforestaction.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
