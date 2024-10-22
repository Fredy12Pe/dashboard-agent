import React from 'react';
import '../css/StatCard.css';

function StatCard({ title, value, change, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-info">
        <p className="stat-title">{title}</p>
        <h2 className="stat-value">{value}</h2>
        <p className="stat-change">{change}</p>
      </div>
      <div className="stat-icon">{icon}</div>
    </div>
  );
}

export default StatCard;