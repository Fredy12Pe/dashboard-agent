import React, { useState } from 'react';
import { FaHome, FaChartBar, FaCreditCard, FaCog, FaUser, FaSignInAlt, FaRocket } from 'react-icons/fa';


function LeftNavbar() {
  const [activeItem, setActiveItem] = useState(null);

  const navItems = [
    { icon: FaHome, text: 'Dashboard' },
    { icon: FaChartBar, text: 'Tables' },
    { icon: FaCreditCard, text: 'Billing' },
    { icon: FaCog, text: 'RTL' },
  ];

  const accountItems = [
    { icon: FaUser, text: 'Profile' },
    { icon: FaSignInAlt, text: 'Sign In' },
    { icon: FaRocket, text: 'Sign Up' },
  ];

  return (
    <div className="left-navbar">
      <div className="logo-group">
        <div className="logo">Sage Ai</div>
        <hr className="logo-divider" />
      </div>

      {navItems.map((item, index) => (
        <div 
          key={index}
          className={`nav-item ${activeItem === index ? 'active' : ''}`}
          onClick={() => setActiveItem(index)}
        >
          <span className="nav-icon-background">
            <item.icon className="nav-icon" />
          </span>
          <span className="nav-text">{item.text}</span>
        </div>
      ))}

      <div className="section-title">ACCOUNT PAGES</div>
      {accountItems.map((item, index) => (
        <div 
          key={index + navItems.length}
          className={`nav-item ${activeItem === index + navItems.length ? 'active' : ''}`}
          onClick={() => setActiveItem(index + navItems.length)}
        >
          <span className="nav-icon-background">
            <item.icon className="nav-icon" />
          </span>
          <span className="nav-text">{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default LeftNavbar;