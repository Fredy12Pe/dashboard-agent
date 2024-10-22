import React from 'react';
import '../css/SatisfactionCard.css';

function SatisfactionCard() {
  return (
    <div className="satisfaction-card">
      <h3>Satisfaction Rate</h3>
      <p>From all projects</p>
      <div className="satisfaction-chart">
        {/* Add circular progress chart here */}
        <div className="satisfaction-percentage">95%</div>
      </div>
      <p>Based on likes</p>
    </div>
  );
}

export default SatisfactionCard;