import { useState } from 'react';
import { ExternalLink, Users, TreePine, Target } from 'lucide-react';
import mainPic from '../assets/mainpic.png';

function Home() {
  const [activeTab, setActiveTab] = useState('info');

  const tabs = [
    { id: 'info', label: 'Miyawaki Forest Info', icon: <TreePine size={20} /> },
    { id: 'updates', label: 'Updates & Events', icon: <Target size={20} /> },
    { id: 'about', label: 'Who We Are & Supporters', icon: <Users size={20} /> },
  ];

  const handleDonateClick = () => {
    window.open('https://aalslasq.donorsupport.co/page/httpsbio4climateorgm', '_blank');
  };

  const handleVolunteerClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScRDSFIKrJNC6zxtKziQb_s1JcpBHgwy1k5pStNhDgsBQfy3g/viewform', '_blank');
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-image-container">
              <img 
                src={mainPic} 
                alt="Community members gathered around the forest site" 
                className="hero-image"
              />
              <p className="hero-caption">Community members outlining the upcoming shape of the mini-forest! Photo by David Mussina</p>
            </div>
            <div className="hero-text">
              <h1>Miyawaki Forest Action</h1>
              <p className="subtitle">Join the Movement, Boosting Biodiversity In Belmont!</p>
              <div className="cta-buttons">
                <button onClick={handleDonateClick} className="btn btn-primary">
                  <ExternalLink size={20} />
                  Donate To Support Our Forest
                </button>
                <button onClick={handleVolunteerClick} className="btn btn-secondary">
                  <ExternalLink size={20} />
                  Join Us As a Volunteer
                </button>
              </div>
            </div>
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
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="tab-content">
              {activeTab === 'info' && (
                <div className="tab-panel">
                  <h2>What is a Miyawaki Forest?</h2>
                  <div className="grid grid-2">
                    <div>
                      <p>
                        The Miyawaki Forest is an ultra dense, biodiverse pocket forest that recreates the complexity of natural forests and the relationships and processes that help them grow strong and resilient. By giving home to a vast array of native species, they boost the biodiversity of the area and nurture pollinators, supporting and restoring ecosystems.
                      </p>
                      <p>
                        They sequester carbon in the soil, reduce air pollution and soil contamination, improve water absorption to buffer against flooding and erosion, and cool the surrounding area to mitigate the urban heat island effect. They also create a living classroom for people and communities to learn about native ecology, engage in stewardship, and experience the interconnectedness of the natural world.
                      </p>
                    </div>
                    <div className="benefits-list">
                      <h3>Benefits:</h3>
                      <ul>
                        <li><strong>Rapid Growth:</strong> 10x faster than conventional forests</li>
                        <li><strong>High Density:</strong> 30x denser vegetation</li>
                        <li><strong>Self-Sustaining:</strong> No maintenance after 2-3 years</li>
                        <li><strong>Biodiversity:</strong> Supports native wildlife</li>
                        <li><strong>Carbon Capture:</strong> Excellent CO₂ absorption</li>
                        <li><strong>Community Impact:</strong> Educational and environmental benefits</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'updates' && (
                <div className="tab-panel">
                  <h2>Latest Updates & Upcoming Events</h2>
                  <div className="timeline-compact">
                    <div className="timeline-item-compact completed">
                      <div className="timeline-date">July 2025</div>
                      <div className="timeline-content-compact">
                        <h4>Project Website Launch</h4>
                        <p>Our official website is now live! Share it to help spread awareness.</p>
                      </div>
                    </div>
                    <div className="timeline-item-compact completed">
                      <div className="timeline-date">June 2025</div>
                      <div className="timeline-content-compact">
                        <h4>Site Selection Completed</h4>
                        <p>Perfect 3,000 sq ft location selected with optimal conditions.</p>
                      </div>
                    </div>
                    <div className="timeline-item-compact upcoming">
                      <div className="timeline-date">August 2025</div>
                      <div className="timeline-content-compact">
                        <h4>Volunteer Training Program</h4>
                        <p>Training sessions for volunteers on planting techniques.</p>
                      </div>
                    </div>
                    <div className="timeline-item-compact upcoming">
                      <div className="timeline-date">October 2025</div>
                      <div className="timeline-content-compact">
                        <h4>Community Planting Day</h4>
                        <p>The big day! Community comes together to plant our forest.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'about' && (
                <div className="tab-panel">
                  <h2>Who We Are</h2>
                  <div className="grid grid-2">
                    <div>
                      <h3>Our Team</h3>
                      <p>
                        The Miyawaki Forest Action is led by a dedicated team of educators, environmental 
                        scientists, community organizers, and passionate volunteers committed to creating 
                        positive environmental change in our community.
                      </p>
                      <div className="team-list">
                        <p><strong>Dr. Sarah Johnson</strong> - Environmental Science Educator</p>
                        <p><strong>Mike Chen</strong> - Community Organizer</p>
                        <p><strong>Lisa Rodriguez</strong> - Native Plant Specialist</p>
                        <p><strong>Tom Wilson</strong> - Project Coordinator</p>
                      </div>
                    </div>
                    <div>
                      <h3>Our Supporters</h3>
                      <p>
                        This project is made possible by the generous support of our community members, 
                        local businesses, and environmental advocates who believe in creating a greener future.
                      </p>
                      <div className="supporters-stats">
                        <div className="stat-item">
                          <div className="stat-number">47</div>
                          <div className="stat-label">Volunteers</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-number">120+</div>
                          <div className="stat-label">Donors</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-number">8</div>
                          <div className="stat-label">Local Businesses</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-alt">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Ready to Make a Difference?</h2>
            <p>Join our mission to create a thriving native forest ecosystem. Every contribution, big or small, helps us reach our goal.</p>
            <div className="cta-buttons">
              <button onClick={handleDonateClick} className="btn btn-primary">
                <ExternalLink size={20} />
                Donate Today
              </button>
              <button onClick={handleVolunteerClick} className="btn btn-secondary">
                <ExternalLink size={20} />
                Volunteer With Us
              </button>
            </div>
            
            <div className="resources-section" style={{ textAlign: 'left', marginTop: '40px' }}>
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
        </div>
      </section>
    </div>
  );
}

export default Home;
