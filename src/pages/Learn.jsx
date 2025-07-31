import { BookOpen, Leaf, TreePine, Users, Zap, Shield } from 'lucide-react';

function Learn() {
  return (
    <div className="learn">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Learn About Miyawaki Forests</h1>
            <p className="subtitle">Discover the science and benefits of rapid forest restoration</p>
          </div>
        </div>
      </section>

      {/* Main Article */}
      <section>
        <div className="container">
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <BookOpen size={48} style={{ color: 'var(--forest-green)', marginBottom: '1rem' }} />
              <h2>What is a Miyawaki Forest?</h2>
            </div>
            
            <p>
              The Miyawaki method, developed by renowned Japanese botanist Dr. Akira Miyawaki, 
              is a revolutionary approach to forest restoration that creates dense, native forests 
              in just 2-3 years instead of the typical 20-30 years required for natural forest development.
            </p>
            
            <p>
              This innovative technique involves planting native species in a specific multilayered 
              pattern at high density, creating competition among plants that drives rapid vertical 
              growth. The result is a self-sustaining ecosystem that requires minimal maintenance 
              after establishment.
            </p>
            
            <h3>The Miyawaki Method Process</h3>
            <ol>
              <li><strong>Site Analysis:</strong> Comprehensive study of soil, climate, and native vegetation</li>
              <li><strong>Species Selection:</strong> Identification of indigenous plants that naturally occur in the area</li>
              <li><strong>Soil Preparation:</strong> Enhancement of soil quality with organic materials</li>
              <li><strong>Dense Planting:</strong> Planting saplings 3-5 times closer than conventional methods</li>
              <li><strong>Maintenance:</strong> Regular watering and weeding for the first 2-3 years</li>
              <li><strong>Self-Sustaining Forest:</strong> After 3 years, the forest becomes completely independent</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-alt">
        <div className="container">
          <h2>Benefits of Miyawaki Forests</h2>
          <div className="grid grid-2">
            <div className="card">
              <div className="feature-icon">
                <Zap size={24} />
              </div>
              <h3>Faster Growth</h3>
              <p>
                Miyawaki forests grow 10 times faster than conventional forests due to dense 
                planting and species competition. What typically takes decades can be achieved 
                in just a few years, providing immediate environmental benefits.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon">
                <Leaf size={24} />
              </div>
              <h3>Supports Biodiversity</h3>
              <p>
                Native species plantations attract indigenous wildlife, creating habitats for 
                birds, insects, small mammals, and beneficial microorganisms. This builds a 
                complete, balanced ecosystem that supports local biodiversity.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon">
                <TreePine size={24} />
              </div>
              <h3>Carbon Capture</h3>
              <p>
                Dense forests are highly effective carbon sinks, absorbing significant amounts 
                of CO₂ from the atmosphere. A single Miyawaki forest can sequester more carbon 
                per square foot than traditional forests due to its density.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <h3>Community Involvement</h3>
              <p>
                Creating a Miyawaki forest is a community effort that brings people together 
                for environmental action. It provides educational opportunities and fosters 
                environmental stewardship among participants of all ages.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon">
                <Shield size={24} />
              </div>
              <h3>Environmental Protection</h3>
              <p>
                These forests provide natural air filtration, noise reduction, temperature 
                regulation, and soil erosion control. They create microclimates that cool 
                surrounding areas and improve local air quality significantly.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon">
                <BookOpen size={24} />
              </div>
              <h3>Educational Value</h3>
              <p>
                Miyawaki forests serve as living laboratories where students can observe 
                ecosystem development, study native species, and learn about environmental 
                science through hands-on experience and long-term observation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section>
        <div className="container">
          <h2>Learn More</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Watch: Introduction to Miyawaki Forests</h3>
              <div style={{ 
                background: 'var(--cream)', 
                height: '200px', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1rem',
                border: '2px dashed var(--sage-green)'
              }}>
                <p style={{ color: 'var(--text-light)', textAlign: 'center' }}>
                  📹 Video Placeholder<br />
                  <small>Educational video about Miyawaki method</small>
                </p>
              </div>
              <p>
                This educational video explains the science behind the Miyawaki method 
                and showcases successful forest projects from around the world.
              </p>
            </div>

            <div className="card">
              <h3>Success Stories</h3>
              <div style={{ 
                background: 'var(--cream)', 
                height: '200px', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1rem',
                border: '2px dashed var(--sage-green)'
              }}>
                <p style={{ color: 'var(--text-light)', textAlign: 'center' }}>
                  📸 Image Gallery Placeholder<br />
                  <small>Before/after photos of forest projects</small>
                </p>
              </div>
              <p>
                Explore before and after photos of Miyawaki forest projects from around 
                the world, showcasing the incredible transformation possible in just a few years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Background */}
      <section className="section-alt">
        <div className="container">
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>The Science Behind the Method</h2>
            <p>
              Dr. Akira Miyawaki's research identified that most existing forests in developed 
              areas are not true native forests but secondary forests that developed after 
              human disturbance. His method recreates the original native forest structure 
              that would have existed before human intervention.
            </p>
            
            <h3>Key Scientific Principles:</h3>
            <ul>
              <li>
                <strong>Potential Natural Vegetation (PNV):</strong> Understanding what species 
                would naturally grow in a specific area without human interference
              </li>
              <li>
                <strong>Multi-layer Structure:</strong> Planting shrubs, sub-trees, trees, and 
                canopy species together to recreate natural forest layers
              </li>
              <li>
                <strong>Competition-driven Growth:</strong> Dense planting creates natural 
                selection pressure, encouraging rapid vertical growth
              </li>
              <li>
                <strong>Symbiotic Relationships:</strong> Native species work together, sharing 
                nutrients and supporting each other's growth
              </li>
            </ul>
            
            <p>
              This approach has been successfully implemented in over 40 countries, from urban 
              areas in Japan to degraded lands in Africa, proving its effectiveness across 
              diverse climates and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Ready to Get Involved?</h2>
            <p>
              Now that you understand the incredible potential of Miyawaki forests, 
              join us in creating one for our community. Your support can help us 
              build a thriving ecosystem for future generations.
            </p>
            <div className="cta-buttons">
              <a href="/help" className="btn btn-primary">
                Support Our Project
              </a>
              <a href="/about" className="btn btn-outline">
                Learn About Our Specific Plan
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
              <h4>Contact Us</h4>
              <p>Email: <a href="mailto:info@miyawakiforestaction.org">info@miyawakiforestaction.org</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Learn;
