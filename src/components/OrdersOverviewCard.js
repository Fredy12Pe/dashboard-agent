import React from 'react';
import '../css/OrdersOverviewCard.css';

function OrdersOverviewCard() {
  const orders = [
    { description: '$2400, Design changes', date: '22 DEC 7:20 PM' },
    { description: 'New order #4219423', date: '21 DEC 11:21 PM' },
    { description: 'Server Payments for April', date: '21 DEC 9:28 PM' },
    { description: 'New card added for order #3210145', date: '20 DEC 3:52 PM' },
    { description: 'Unlock packages for Development', date: '19 DEC 11:35 PM' },
    { description: 'New order #9851258', date: '18 DEC 4:41 PM' }
  ];

  return (
    <div className="orders-overview-card">
      <h3>Orders overview</h3>
      <p>+30% this month</p>
      <ul className="orders-list">
        {orders.map((order, index) => (
          <li key={index}>
            <div className="order-icon"></div>
            <div className="order-details">
              <p>{order.description}</p>
              <small>{order.date}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersOverviewCard;