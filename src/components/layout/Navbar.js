import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <nav className="navbar">
      <div 
        className="mobile-menu-toggle" 
        onClick={toggleMobileMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
      <div className="logo">
        <span className="logo-text">TechStore</span>
      </div>
      
      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li className={`nav-item ${activeDropdown === 0 ? 'active' : ''}`}>
          <a 
            href="#" 
            className="nav-link" 
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown(0);
            }}
          >
            Categories
          </a>
          <div className="dropdown">
            <div className="dropdown-content">
              <div className="dropdown-section">
                <h3>Computers</h3>
                <ul>
                  <li><a href="#">Laptops</a></li>
                  <li><a href="#">Desktop PCs</a></li>
                  <li><a href="#">Monitors</a></li>
                  <li><a href="#">PC Components</a></li>
                  <li><a href="#">Storage</a></li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h3>Mobile & Tablets</h3>
                <ul>
                  <li><a href="#">iPhones</a></li>
                  <li><a href="#">Android Phones</a></li>
                  <li><a href="#">iPads</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Wearables</a></li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h3>Gaming</h3>
                <ul>
                  <li><a href="#">PlayStation 5</a></li>
                  <li><a href="#">Xbox Series X</a></li>
                  <li><a href="#">Nintendo Switch</a></li>
                  <li><a href="#">Gaming PCs</a></li>
                  <li><a href="#">Accessories</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Today's Deals</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">New Arrivals</a>
        </li>
        <li className={`nav-item ${activeDropdown === 1 ? 'active' : ''}`}>
          <a 
            href="#" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown(1);
            }}
          >
            Brands
          </a>
          <div className="dropdown">
            <div className="dropdown-content">
              <div className="dropdown-section">
                <h3>Popular Brands</h3>
                <ul>
                  <li><a href="#">Apple</a></li>
                  <li><a href="#">Samsung</a></li>
                  <li><a href="#">Sony</a></li>
                  <li><a href="#">Microsoft</a></li>
                  <li><a href="#">Dell</a></li>
                  <li><a href="#">HP</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
      
      <div className="nav-icons">
        <a href="#" className="icon-link">
          <FaSearch />
        </a>
        <a href="#" className="icon-link">
          <FaShoppingCart />
          <span className="cart-count">0</span>
        </a>
        <a href="#" className="icon-link">
          <FaUser />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
