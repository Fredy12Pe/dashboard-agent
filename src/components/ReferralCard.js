import React from 'react';
import '../css/ReferralCard.css';

function ReferralCard() {
  return (
    <div className="referral-card">
      <h3>Referral Tracking</h3>
      <div className="referral-stats">
        <div>
          <p>Invited</p>
          <h2>145 people</h2>
        </div>
        <div>
          <p>Bonus</p>
          <h2>1,465</h2>
        </div>
      </div>
      <div className="safety-score">
        <h2>9.3</h2>
        <p>Safety Score</p>
      </div>
    </div>
  );
}

export default ReferralCard;