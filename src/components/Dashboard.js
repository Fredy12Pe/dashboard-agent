import React from 'react';
import '../css/Dashboard.css';
import StatCard from './StatCard';
import WelcomeCard from './WelcomeCard';
import SatisfactionCard from './SatisfactionCard';
import ReferralCard from './ReferralCard';
import SalesOverviewCard from './SalesOverviewCard';
import ActiveUsersCard from './ActiveUsersCard';
import ProjectsCard from './ProjectsCard';
import OrdersOverviewCard from './OrdersOverviewCard';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stat-cards">
        <StatCard title="Today's Money" value="$53,000" change="+55%" icon="💰" />
        <StatCard title="Today's Users" value="2,300" change="+5%" icon="👥" />
        <StatCard title="New Clients" value="+3,052" change="-14%" icon="🆕" />
        <StatCard title="Total Sales" value="$173,000" change="+8%" icon="🛒" />
      </div>
      <div className="main-cards">
        <WelcomeCard />
        <SatisfactionCard />
        <ReferralCard />
        <SalesOverviewCard />
        <ActiveUsersCard />
        <ProjectsCard />
        <OrdersOverviewCard />
      </div>
    </div>
  );
}

export default Dashboard;