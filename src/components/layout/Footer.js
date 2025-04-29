import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">TechStore</span>
            </div>
            <p className="company-description">
              Your ultimate destination for cutting-edge technology and premium electronics.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul className="footer-links">
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="payment-methods">
            <span>We Accept:</span>
            {/* Replace with actual payment method icons */}
            <span>💳 💵 💸</span>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Tinotenda Zhakata. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
