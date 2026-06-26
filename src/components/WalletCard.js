import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import './WalletCard.css';

function WalletCard() {
  return (
    <div className="wallet-card">
      <div className="card-header">
        <div className="card-title">
          <h3>Digital Asset Wallet</h3>
          <p>Available balance</p>
        </div>
        <div className="card-status">
          <div className="status-badge">
            <MdCheckCircle size={16} />
            Active
          </div>
        </div>
      </div>

      <div className="balance-section">
        <div className="balance-label">Available Balance</div>
        <div className="balance-amount">$82,100,821.91</div>
      </div>

      <div className="card-details">
        <div className="detail-item">
          <span className="detail-label">Account Number</span>
          <span className="detail-value">•••• •••• •••• 6533</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Valid Thru</span>
          <span className="detail-value">04/29</span>
        </div>
      </div>

      <div className="card-footer">
        <div className="flow-badge">
          Positive flow +$0.00
        </div>
      </div>

      <div className="card-gradient"></div>
    </div>
  );
}

export default WalletCard;
