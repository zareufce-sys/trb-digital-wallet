import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherDashboard from './pages/WeatherDashboard';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherDashboard />
  </React.StrictMode>
);
