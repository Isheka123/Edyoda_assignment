import React from 'react';
import { useState } from 'react';
import './Header.css'; 
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import {dropdown} from '../assets/dropdown.png'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import dropdownIcon from "../assets/dropdown.png";

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };
  
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header className="header">
    <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Programs</a></li>
                  
                </ul>
            </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li className={`dropdown ${openDropdown === 'courses' ? 'active' : ''}`}>
            <a href="#" onClick={() => toggleDropdown('courses')}>
              Courses
              <img
                src={dropdownIcon}
                alt="Dropdown Icon"
                className={`dropdown-icon ${openDropdown === 'courses' ? 'active' : ''}`}
              />
              {openDropdown === 'courses' && (
                <div className="dropdown-content">
                  <a href="#">Course1 </a>
                  <a href="#">Course2 </a>
                </div>
              )}
            </a>
          </li>
          <li className={`dropdown ${openDropdown === 'programs' ? 'active' : ''}`}>
            <a href="#" onClick={() => toggleDropdown('programs')}>
              Programs
              <img
                src={dropdownIcon}
                alt="Dropdown Icon"
                className={`dropdown-icon ${openDropdown === 'programs' ? 'active' : ''}`}
              />
              {openDropdown === 'programs' && (
                <div className="dropdown-content">
                  <a href="#">Program1 </a>
                  <a href="#">Program2 </a>
                </div>
              )}
            </a>
          </li>
        </ul>
      </nav>
    
    
      <div className="right-side">
      <div className="menu-icon" onClick={toggleMobileMenu}>
  <FontAwesomeIcon icon={faBars} />
</div>
        <div className="search" onClick={toggleSearch}>
          <span className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          {showSearch && (
            <input type="text" placeholder="Search" className="search-input" />
          )}
          </div>
          <div className="login">
        <a href="#">Log in</a>
      </div>
      <div className="join-now">
        <button>JOIN NOW</button>
      </div>
        </div>
    
    
     
    </header>
  );
};

export default Header;
