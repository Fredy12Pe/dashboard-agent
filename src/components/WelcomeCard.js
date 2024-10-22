import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import '../css/WelcomeCard.css';

function WelcomeCard() {
  return (
    <div className="welcome-card">
      <div className="spline-container">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/VuzI29KVhBg3S6RJ/scene.splinecode" />
        </Suspense>
      </div>
      <div className="welcome-content">
        <div className="welcome-text">
          <h2>Welcome back,</h2>
          <h1>Fredy Pedro</h1>
          <p>Glad to see you again!<br />Ask me anything.</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;