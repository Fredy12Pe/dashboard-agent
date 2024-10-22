import React from 'react';
import { FaSearch, FaBell, FaCog, FaUser } from 'react-icons/fa';

function TopNavbar() {
  return (
    <nav className="top-navbar">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="nav-actions">
        <div className="search-bar">
          <input type="text" placeholder="Type here..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
        <button className="nav-button"><FaUser /> Sign In</button>
        <button className="nav-button"><FaCog /></button>
        <button className="nav-button"><FaBell /></button>
      </div>
    </nav>
  );
}

export default TopNavbar;