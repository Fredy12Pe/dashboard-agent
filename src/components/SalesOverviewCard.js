import React from 'react';
import '../css/SalesOverviewCard.css';

function SalesOverviewCard() {
  return (
    <div className="sales-overview-card">
      <h3>Sales overview</h3>
      <p>(+5) more in 2021</p>
      <div className="sales-chart">
        {/* Add area chart here */}
      </div>
    </div>
  );
}

export default SalesOverviewCard;