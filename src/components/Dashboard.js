import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import WalletCard from './WalletCard';
import StatsCard from './StatsCard';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-subtitle">
        Let's take a detailed look at your financial situation today.
      </div>

      <div className="wallet-section">
        <WalletCard />
      </div>

      <div className="stats-grid">
        <StatsCard 
          title="Monthly Volume"
          value="0 tx"
          subtitle="Live activity across your wallet this month"
        />
        <StatsCard 
          title="Savings Target"
          value="0%"
          subtitle="$0.00 of $10,000.00"
        />
        <StatsCard 
          title="Wallet Status"
          value="Secure"
          subtitle="Treasury controls enabled"
        />
      </div>

      <div className="footer-section">
        <div className="accepted-payments">
          <span>Accepted payments</span>
          <div className="payment-logos">
            <div className="payment-badge visa">VISA</div>
            <div className="payment-badge paypal">PayPal</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
