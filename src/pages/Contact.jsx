import { useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p className="subtitle">Get in touch with the Miyawaki Forest Action Belmont team</p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section>
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h2>Get in Touch</h2>
              <p>
                Have questions about our project? Want to learn more about how you can help? 
                We'd love to hear from you! Reach out using the contact form or through any 
                of the methods below.
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <strong>Email</strong>
                    <p>miniforestbelmont@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div>
                    <strong>Phone</strong>
                    <p>Number</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div>
                    <strong>Project Location</strong>
                    <p>Belmont High School<br />Belmont, MA</p>
                  </div>
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
          <div className="grid grid-2">
            <div className="card">
              <h3>When will the forest be planted?</h3>
              <p>
                We're planning our community planting day for Fall 2025. The exact date will 
                be announced once we complete our fundraising goal and soil preparation work.
              </p>
            </div>
            
            <div className="card">
              <h3>How can I volunteer?</h3>
              <p>
                Visit our <a href="/help#volunteer">How to Help</a> page to fill out our volunteer 
                interest form. We need help with planting, promotion, organization, and ongoing maintenance.
              </p>
            </div>
            
            <div className="card">
              <h3>Can businesses sponsor the project?</h3>
              <p>
                Absolutely! We welcome corporate partnerships and sponsorships. Contact us to discuss 
                recognition opportunities and how your business can support environmental sustainability.
              </p>
            </div>
            
            <div className="card">
              <h3>Will there be educational programs?</h3>
              <p>
                Yes! The forest will serve as a living laboratory for students to study ecosystem 
                development, native species, and environmental science through hands-on learning.
              </p>
            </div>
            
            <div className="card">
              <h3>How much maintenance will the forest require?</h3>
              <p>
                Miyawaki forests require regular maintenance for the first 2-3 years, including 
                watering and weeding. After that, they become completely self-sustaining ecosystems.
              </p>
            </div>
            
            <div className="card">
              <h3>What native species will be planted?</h3>
              <p>
                We've identified 15 native tree and shrub species that naturally occur in our region. 
                Visit our <a href="/learn">Learn</a> page for more details about the scientific approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Information */}
      <section>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Our Team</h2>
            <p>
              Miyawaki Forest Action Belmont (MFAB) is an intergenerational group of local residents dedicated to establishing Miyawaki forests in Belmont. Our focus is on education and community building, providing Belmont a hands-on place to learn about environmental stewardship and biodiversity.
            </p>
            
            <div style={{ marginTop: '2rem' }}>
              <h3>Project Leadership</h3>
              <p>
                <strong>Jean Devine</strong> <br />
                <strong>Jess Hausman</strong> <br />
                <strong>Ralph Jones</strong> <br />
                <strong>Holly Kong</strong> <br />
                <strong>Ranganath Nayak</strong> <br />
                <strong>Michelle Oishi</strong> <br />
                <strong>Kirsten Waerstad</strong> <br />
                <strong>Sarah Wang</strong> <br />
                <strong>Anne-Marie Lambert</strong>

              </p>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <a href="/help#volunteer" className="btn btn-primary">
                Join Our Team
              </a>
            </div>
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
              <h4>Additional Contact Information</h4>
              <p>Email: <a href="mailto:info@miyawakiforestaction.org">info@miyawakiforestaction.org</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
