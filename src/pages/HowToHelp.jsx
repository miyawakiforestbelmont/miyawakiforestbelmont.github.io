import { useState } from 'react';
import { DollarSign, Heart, HandHeart, Share2, Mail } from 'lucide-react';

function HowToHelp() {
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    interest: 'planting',
    message: ''
  });

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Thank you for your interest! We will contact you soon.');
    setVolunteerForm({ name: '', email: '', interest: 'planting', message: '' });
  };

  const handleInputChange = (e) => {
    setVolunteerForm({
      ...volunteerForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="how-to-help">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>How You Can Help</h1>
            <p className="subtitle">Every contribution makes our forest dream a reality</p>
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
                Your financial contribution directly supports the purchase of native saplings, 
                soil preparation, and maintenance equipment. Every dollar brings us closer to 
                our goal of creating a thriving forest ecosystem.
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
                style={{ marginTop: '1rem' }}
              >
                Donate via PayPal
              </a>
              <p style={{ fontSize: '0.9rem', marginTop: '1rem', color: 'var(--text-light)' }}>
                Secure donation processing through PayPal. Tax receipts available upon request.
              </p>
            </div>

            <div className="card" id="volunteer">
              <div className="feature-icon">
                <HandHeart size={32} />
              </div>
              <h2>Volunteer With Us</h2>
              <p>
                Join our community of environmental advocates! We need volunteers for planning, 
                planting, promotion, and ongoing maintenance. No experience necessary – 
                we'll provide all the training you need.
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
                    <option value="promoting">Community Outreach & Promotion</option>
                    <option value="helping">General Support & Organization</option>
                    <option value="education">Educational Programs</option>
                    <option value="maintenance">Ongoing Maintenance</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Additional Comments (Optional)</label>
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
                Share our mission on social media, tell friends and family, or organize 
                awareness events in your community. Every person who learns about our 
                project becomes a potential supporter.
              </p>
              <div style={{ marginTop: '1rem' }}>
                <button className="btn btn-outline" style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}>
                  Share on Facebook
                </button>
                <button className="btn btn-outline" style={{ marginBottom: '0.5rem' }}>
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
                Is your business interested in environmental sustainability? We offer 
                corporate sponsorship opportunities with recognition on our project 
                signage and promotional materials.
              </p>
              <a href="/contact" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                Contact Us
              </a>
            </div>

            <div className="card">
              <div className="feature-icon">
                <Mail size={24} />
              </div>
              <h3>Stay Updated</h3>
              <p>
                Subscribe to our newsletter for project updates, volunteer opportunities, 
                and environmental education content. Be the first to know about our progress!
              </p>
              <div style={{ marginTop: '1rem' }}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="form-input"
                  style={{ marginBottom: '0.5rem' }}
                />
                <button className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Your Impact</h2>
            <p>
              When you support the Miyawaki Forest Action, you're not just planting trees – 
              you're creating a lasting legacy for our community. This forest will serve as 
              an educational resource, a carbon sink, a wildlife habitat, and a symbol of 
              what we can achieve when we work together for environmental sustainability.
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--forest-green)' }}>
              "The best time to plant a tree was 20 years ago. The second best time is now." 
              – Chinese Proverb
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-alt">
        <div className="container">
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3>Learn More About Miyawaki Forests</h3>
            <ul>
              <li>Our main <a href="https://bio4climate.org/miyawaki-forest-program/" target="_blank" rel="noopener noreferrer">Miyawaki Forest Program</a> page</li>
              <li>Bio4Climate's <a href="https://www.youtube.com/playlist?list=PLsWWRqCX9eSaeVvsc-zUsK4HPt0enmRcc" target="_blank" rel="noopener noreferrer">Miyawaki Forest video playlist</a></li>
              <li>'<a href="https://www.csmonitor.com/Environment/2023/0922/Miyawaki-A-little-forest-with-a-towering-task-video" target="_blank" rel="noopener noreferrer">A Little Forest with a Towering Task</a>' – Short documentary on the Miyawaki planting process and the 'grounded hope' behind the work</li>
              <li>'<a href="https://www.nytimes.com/2023/08/24/climate/tiny-forests-climate-miyawaki.html?unlocked_article_code=S_xwWpdQcIVJSDpMaNcyo-EH_Y2Lw6tOH6xwX_NE6AwkO_FWy8YH_hJdLatSfnn70lg8twstZFrav63MlEM9pPc3d6092cif7kGnuhiFYu8NzMbHBdgveuElb7HdfFvnhIAV_hsq9oaiWB6w00t92Drj7pbUnnzbP-oGoRY4sr0Kx5BXcr0VCLzL7CYXyvYfIoBcZVe9h_9MKEl9f-yEcz_Li0NKOGKr7Bmuch0m6RkWl3sd6AK0WKXd6joit-Q3tAJlQdA-EozMxnFNbRGedk_Iwtq_XUlOUzNuaBELtI6OvvoxJOCl1UVvKsY3KoBg3PCn1xNZmmwtdW8FIDBN_kx5BfQY-WU&smid=url-share" target="_blank" rel="noopener noreferrer">Tiny Forests with Big Benefits</a>' – A feature of our Cambridge forests and other Miyawaki plantings in <em>The New York Times</em></li>
              <li><em><a href="https://www.chelseagreen.com/product/mini-forest-revolution/" target="_blank" rel="noopener noreferrer">Mini-Forest Revolution: Using the Miyawaki Method to Rapidly Rewild the World</a></em> by Hannah Lewis, published by Chelsea Green in June 2022</li>
            </ul>
            <div className="contact-info" style={{ textAlign: 'center', marginTop: '30px' }}>
              <h4>Contact Us</h4>
              <p>Email: <a href="mailto:info@miyawakiforestaction.org">info@miyawakiforestaction.org</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowToHelp;
