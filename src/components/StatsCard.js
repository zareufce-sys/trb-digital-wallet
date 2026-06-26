import React from 'react';
import './StatsCard.css';

function StatsCard({ title, value, subtitle }) {
  return (
    <div className="stats-card">
      <div className="stats-header">
        <h4>{title}</h4>
      </div>
      <div className="stats-value">{value}</div>
      <div className="stats-subtitle">{subtitle}</div>
    </div>
  );
}

export default StatsCard;
