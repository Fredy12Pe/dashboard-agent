import React from 'react';
import LeftNavbar from './components/LeftNavbar';
import TopNavbar from './components/TopNavbar';
import Dashboard from './components/Dashboard';
import './css/App.css';
import './css/TopNavbar.css';




function App() {
  return (
    <div className="app-container">
      <LeftNavbar />
      <div className="main-content">
        <TopNavbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;