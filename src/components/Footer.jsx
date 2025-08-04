import { Mail, Github, Twitter, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="Miyawaki Forest Action Logo" style={{ height: '32px', width: 'auto' }} />
              <span> Belmont</span>
            </div>
            <p className="footer-description">
              Creating native forests for a sustainable future through community-driven environmental action.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about">About the Project</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/updates">Updates</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul className="footer-links">
              <li><a href="https://aalslasq.donorsupport.co/page/httpsbio4climateorgm" target="_blank" rel="noopener noreferrer">Donate To Support Our Forest</a></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScRDSFIKrJNC6zxtKziQb_s1JcpBHgwy1k5pStNhDgsBQfy3g/viewform" target="_blank" rel="noopener noreferrer">Join Us As a Volunteer</a></li>
              <li><a href="/updates">Latest Updates</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="mailto:contact@miyawakirest.org" aria-label="Email">
                <Mail size={20} />
              </a>

            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Miyawaki Forest Action Belmont. All rights reserved.</p>
          <p>Built with 💚 for a greener future</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
