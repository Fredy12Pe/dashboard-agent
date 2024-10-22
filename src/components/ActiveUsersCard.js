import React from 'react';
import '../css/ActiveUsersCard.css';

function ActiveUsersCard() {
  return (
    <div className="active-users-card">
      <div className="users-chart">
        {/* Add bar chart here */}
      </div>
      <h3>Active Users</h3>
      <p>(+23) than last week</p>
      <div className="user-stats">
        <div>
          <h4>Users</h4>
          <p>32,984</p>
        </div>
        <div>
          <h4>Clicks</h4>
          <p>2,42m</p>
        </div>
        <div>
          <h4>Sales</h4>
          <p>2,400$</p>
        </div>
        <div>
          <h4>Items</h4>
          <p>320</p>
        </div>
      </div>
    </div>
  );
}

export default ActiveUsersCard;