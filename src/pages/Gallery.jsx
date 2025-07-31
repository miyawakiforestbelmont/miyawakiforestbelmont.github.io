import { useState } from 'react';
import { Heart, User, MapPin } from 'lucide-react';

function Gallery() {
  // Sample data for foster tree people - replace with actual data
  const [fosterTreePeople] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Downtown",
      image: "/api/placeholder/200/200",
      message: "Excited to help grow our community forest!",
      treeType: "Oak Sapling"
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "Riverside",
      image: "/api/placeholder/200/200",
      message: "For my children's future and cleaner air.",
      treeType: "Maple Sapling"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      location: "Hillside",
      image: "/api/placeholder/200/200",
      message: "Supporting biodiversity in our neighborhood.",
      treeType: "Birch Sapling"
    },
    {
      id: 4,
      name: "Tom Wilson",
      location: "Central",
      image: "/api/placeholder/200/200",
      message: "Every tree makes a difference!",
      treeType: "Pine Sapling"
    },
    {
      id: 5,
      name: "Emma Davis",
      location: "Westside",
      image: "/api/placeholder/200/200",
      message: "Proud to be part of this green initiative.",
      treeType: "Cedar Sapling"
    },
    {
      id: 6,
      name: "Alex Kumar",
      location: "Eastside",
      image: "/api/placeholder/200/200",
      message: "Building a legacy for future generations.",
      treeType: "Elm Sapling"
    }
  ]);

  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Foster a Tree Gallery</h1>
            <p className="subtitle">Meet the amazing people who are fostering saplings for our Miyawaki forest</p>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="section-alt">
        <div className="container">
          <div className="grid grid-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <Heart size={48} style={{ color: 'var(--forest-green)', margin: '0 auto 1rem' }} />
              <h3>{fosterTreePeople.length}</h3>
              <p>Trees Fostered</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <User size={48} style={{ color: 'var(--sage-green)', margin: '0 auto 1rem' }} />
              <h3>{fosterTreePeople.length}</h3>
              <p>Foster Parents</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <MapPin size={48} style={{ color: 'var(--earth-brown)', margin: '0 auto 1rem' }} />
              <h3>6</h3>
              <p>Neighborhoods Represented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section>
        <div className="container">
          <h2>Our Foster Tree Community</h2>
          <div className="gallery-grid">
            {fosterTreePeople.map((person) => (
              <div 
                key={person.id} 
                className="gallery-card"
                onClick={() => setSelectedPerson(person)}
              >
                <div className="gallery-image">
                  <img src={person.image} alt={`${person.name} - Foster Tree Parent`} />
                  <div className="gallery-overlay">
                    <h4>{person.name}</h4>
                    <p><MapPin size={16} /> {person.location}</p>
                  </div>
                </div>
                <div className="gallery-info">
                  <h4>{person.name}</h4>
                  <p className="tree-type">{person.treeType}</p>
                  <p className="message">"{person.message}"</p>
                  <div className="location">
                    <MapPin size={14} />
                    <span>{person.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Foster */}
      <section className="section-alt">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Want to Foster a Tree?</h2>
            <p>
              Join our Foster a Tree program! When you foster a sapling, you're not just supporting 
              our forest project – you're becoming part of a community of environmental stewards 
              dedicated to creating a greener future.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <button 
                className="btn btn-primary"
                onClick={() => window.open('https://aalslasq.donorsupport.co/page/httpsbio4climateorgm', '_blank')}
              >
                Foster a Tree Today
              </button>
            </div>
            <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
              <p>Foster packages start at $25 and include:</p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                <li>• Your photo in our gallery</li>
                <li>• Progress updates on your tree</li>
                <li>• Recognition at our planting event</li>
                <li>• Certificate of environmental stewardship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for selected person */}
      {selectedPerson && (
        <div className="modal-overlay" onClick={() => setSelectedPerson(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedPerson(null)}
            >
              ×
            </button>
            <div className="modal-body">
              <img 
                src={selectedPerson.image} 
                alt={selectedPerson.name}
                className="modal-image"
              />
              <div className="modal-info">
                <h3>{selectedPerson.name}</h3>
                <p className="modal-tree-type">{selectedPerson.treeType}</p>
                <div className="modal-location">
                  <MapPin size={16} />
                  <span>{selectedPerson.location}</span>
                </div>
                <p className="modal-message">"{selectedPerson.message}"</p>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default Gallery;
