import { Calendar, CheckCircle, Clock, Users, TreePine, Target } from 'lucide-react';

function Updates() {
  const updates = [
    {
      id: 1,
      date: 'July 2025',
      title: 'Project Website Launch',
      description: 'Our official website is now live! Share it with friends and family to help spread awareness about our Miyawaki forest project.',
      status: 'completed',
      icon: <CheckCircle size={24} />
    },
    {
      id: 2,
      date: 'June 2025',
      title: 'Site Selection Completed',
      description: 'After careful evaluation, we have selected the perfect 3,000 sq ft location on the school campus for our forest. The site receives optimal sunlight and has good drainage.',
      status: 'completed',
      icon: <CheckCircle size={24} />
    },
    {
      id: 3,
      date: 'May 2025',
      title: 'Native Species Research',
      description: 'Our team has identified 15 native tree and shrub species that will thrive in our local climate and provide maximum biodiversity benefits.',
      status: 'completed',
      icon: <CheckCircle size={24} />
    },
    {
      id: 4,
      date: 'April 2025',
      title: 'Planning Begins',
      description: 'Official project launch! Community meetings held to discuss the vision, gather support, and begin the planning process for our Miyawaki forest.',
      status: 'completed',
      icon: <CheckCircle size={24} />
    },
    {
      id: 5,
      date: 'August 2025',
      title: 'Volunteer Training Program',
      description: 'We are organizing training sessions for volunteers to learn about the Miyawaki method, proper planting techniques, and forest maintenance.',
      status: 'upcoming',
      icon: <Clock size={24} />
    },
    {
      id: 6,
      date: 'September 2025',
      title: 'Soil Preparation',
      description: 'Begin soil analysis and preparation work. We will test soil composition and add organic materials to create optimal growing conditions.',
      status: 'upcoming',
      icon: <Clock size={24} />
    },
    {
      id: 7,
      date: 'October 2025',
      title: 'Community Planting Day',
      description: 'The big day! Students, families, and community volunteers come together to plant our Miyawaki forest in a single day event.',
      status: 'upcoming',
      icon: <TreePine size={24} />
    }
  ];

  const completedUpdates = updates.filter(update => update.status === 'completed');
  const upcomingUpdates = updates.filter(update => update.status === 'upcoming');

  return (
    <div className="updates">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Project Updates</h1>
            <p className="subtitle">Track our progress as we build our community forest</p>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section>
        <div className="container">
          <div className="grid grid-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <CheckCircle size={48} style={{ color: 'var(--forest-green)', margin: '0 auto 1rem' }} />
              <h3>4</h3>
              <p>Milestones Completed</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <Clock size={48} style={{ color: 'var(--soft-blue)', margin: '0 auto 1rem' }} />
              <h3>3</h3>
              <p>Upcoming Events</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <Target size={48} style={{ color: 'var(--earth-brown)', margin: '0 auto 1rem' }} />
              <h3>Fall 2025</h3>
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
            {updates.map((update, index) => (
              <div key={update.id} className="timeline-item">
                <div className="timeline-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div style={{ color: update.status === 'completed' ? 'var(--forest-green)' : 'var(--soft-blue)' }}>
                      {update.icon}
                    </div>
                    <span style={{ 
                      color: 'var(--text-light)', 
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      <Calendar size={16} />
                      {update.date}
                    </span>
                  </div>
                  <h3>{update.title}</h3>
                  <p>{update.description}</p>
                  <div style={{ 
                    marginTop: '0.5rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    display: 'inline-block',
                    backgroundColor: update.status === 'completed' ? 'rgba(45, 90, 61, 0.1)' : 'rgba(107, 141, 181, 0.1)',
                    color: update.status === 'completed' ? 'var(--forest-green)' : 'var(--soft-blue)'
                  }}>
                    {update.status === 'completed' ? '✓ Completed' : '⏳ Upcoming'}
                  </div>
                </div>
                <div className="timeline-dot" style={{
                  backgroundColor: update.status === 'completed' ? 'var(--forest-green)' : 'var(--soft-blue)'
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section>
        <div className="container">
          <h2>Latest News</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Fundraising Update</h3>
              <div className="progress-bar" style={{ marginBottom: '1rem' }}>
                <div className="progress-fill" style={{ width: '35%' }}></div>
              </div>
              <p><strong>$5,250 raised</strong> of $15,000 goal (35%)</p>
              <p>
                Thanks to our amazing community supporters, we've raised over one-third of our 
                funding goal! Recent donations include support from local businesses, families, 
                and environmental advocates.
              </p>
              <a href="/help" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Contribute Now
              </a>
            </div>

            <div className="card">
              <h3>Volunteer Interest</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Users size={32} style={{ color: 'var(--forest-green)' }} />
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--forest-green)' }}>47</div>
                  <div style={{ color: 'var(--text-light)' }}>Volunteers Registered</div>
                </div>
              </div>
              <p>
                We've received incredible interest from community members wanting to volunteer! 
                Our growing team includes students, parents, teachers, and local environmental 
                enthusiasts.
              </p>
              <a href="/help#volunteer" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                Join the Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-alt">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2>Stay in the Loop</h2>
            <p>
              Get the latest project updates, volunteer opportunities, and environmental 
              education content delivered to your inbox.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="form-input"
                style={{ flex: '1', minWidth: '250px' }}
              />
              <button className="btn btn-primary">
                Subscribe to Updates
              </button>
            </div>
            <p style={{ fontSize: '0.9rem', marginTop: '1rem', color: 'var(--text-light)' }}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Follow Our Journey</h2>
            <p>
              Connect with us on social media for real-time updates, behind-the-scenes content, 
              and community stories.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <button className="btn btn-outline">
                📘 Facebook
              </button>
              <button className="btn btn-outline">
                🐦 Twitter
              </button>
              <button className="btn btn-outline">
                📷 Instagram
              </button>
              <button className="btn btn-outline">
                💼 LinkedIn
              </button>
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
              <h4>Contact Us</h4>
              <p>Email: <a href="mailto:info@miyawakiforestaction.org">info@miyawakiforestaction.org</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Updates;
