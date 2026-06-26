import React, { useState, useEffect } from 'react';
import {
  MdSearch,
  MdLocationOn,
  MdCloud,
  MdCloudRain,
  MdWaterDrop,
  MdAir,
  MdVisibility,
  MdCompress,
  MdRefresh,
} from 'react-icons/md';
import { WiCloudy, WiRain, WiClear, WiSnow, WiThunderstorm } from 'react-icons/wi';
import './WeatherDashboard.css';

function WeatherDashboard() {
  const [city, setCity] = useState('Skopje');
  const [searchInput, setSearchInput] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('metric'); // metric for Celsius, imperial for Fahrenheit

  const API_KEY = 'cb8bc3c2e0e49587142aa4e986b32d15'; // Free OpenWeatherMap API key
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  // Fetch weather data
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=${unit}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found');
        }
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setWeather(data);
      setCity(cityName);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchWeather(city);
  }, [unit]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      fetchWeather(searchInput);
      setSearchInput('');
    }
  };

  // Get weather icon
  const getWeatherIcon = (main) => {
    switch (main) {
      case 'Clear':
        return <WiClear size={80} className="weather-icon clear" />;
      case 'Clouds':
        return <WiCloudy size={80} className="weather-icon cloudy" />;
      case 'Rain':
        return <WiRain size={80} className="weather-icon rain" />;
      case 'Snow':
        return <WiSnow size={80} className="weather-icon snow" />;
      case 'Thunderstorm':
        return <WiThunderstorm size={80} className="weather-icon thunderstorm" />;
      default:
        return <WiCloudy size={80} className="weather-icon" />;
    }
  };

  return (
    <div className="weather-container">
      {/* Header */}
      <div className="weather-header">
        <h1>🌤️ Weather Dashboard</h1>
        <p>Real-time weather information from OpenWeatherMap API</p>
      </div>

      {/* Search Section */}
      <div className="weather-search-section">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-wrapper">
            <MdSearch size={20} className="search-icon" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search for a city..."
              className="search-input"
            />
          </div>
          <button type="submit" className="search-btn">
            Search
          </button>
          <button
            type="button"
            onClick={() => fetchWeather(city)}
            className="refresh-btn"
            title="Refresh weather"
          >
            <MdRefresh size={20} />
          </button>
        </form>

        {/* Unit Toggle */}
        <div className="unit-toggle">
          <button
            className={`unit-btn ${unit === 'metric' ? 'active' : ''}`}
            onClick={() => setUnit('metric')}
          >
            °C
          </button>
          <button
            className={`unit-btn ${unit === 'imperial' ? 'active' : ''}`}
            onClick={() => setUnit('imperial')}
          >
            °F
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading weather data...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error-state">
          <p className="error-icon">⚠️</p>
          <p className="error-text">{error}</p>
          <p className="error-hint">Please try searching for another city</p>
        </div>
      )}

      {/* Weather Data */}
      {weather && !loading && (
        <div className="weather-content">
          {/* Main Weather Card */}
          <div className="main-weather-card">
            <div className="weather-top">
              <div className="location-info">
                <h2>
                  <MdLocationOn size={24} />
                  {weather.name}, {weather.sys.country}
                </h2>
                <p className="description">{weather.weather[0].description}</p>
              </div>
              <div className="weather-icon-container">
                {getWeatherIcon(weather.weather[0].main)}
              </div>
            </div>

            <div className="temperature-section">
              <div className="temp-main">
                <span className="temp-value">{Math.round(weather.main.temp)}°</span>
                <span className="temp-unit">{unit === 'metric' ? 'C' : 'F'}</span>
              </div>
              <div className="temp-details">
                <p>
                  <span>Feels like:</span> {Math.round(weather.main.feels_like)}°
                </p>
                <p>
                  <span>Min:</span> {Math.round(weather.main.temp_min)}° / <span>Max:</span>{' '}
                  {Math.round(weather.main.temp_max)}°
                </p>
              </div>
            </div>
          </div>

          {/* Weather Details Grid */}
          <div className="weather-details-grid">
            {/* Humidity */}
            <div className="detail-card">
              <div className="detail-header">
                <MdWaterDrop size={24} className="detail-icon humidity" />
                <h3>Humidity</h3>
              </div>
              <p className="detail-value">{weather.main.humidity}%</p>
              <p className="detail-desc">Relative humidity</p>
            </div>

            {/* Wind Speed */}
            <div className="detail-card">
              <div className="detail-header">
                <MdAir size={24} className="detail-icon wind" />
                <h3>Wind Speed</h3>
              </div>
              <p className="detail-value">
                {(weather.wind.speed * 3.6).toFixed(1)} km/h
              </p>
              <p className="detail-desc">
                Direction: {weather.wind.deg}°
              </p>
            </div>

            {/* Pressure */}
            <div className="detail-card">
              <div className="detail-header">
                <MdCompress size={24} className="detail-icon pressure" />
                <h3>Pressure</h3>
              </div>
              <p className="detail-value">{weather.main.pressure} hPa</p>
              <p className="detail-desc">Atmospheric pressure</p>
            </div>

            {/* Visibility */}
            <div className="detail-card">
              <div className="detail-header">
                <MdVisibility size={24} className="detail-icon visibility" />
                <h3>Visibility</h3>
              </div>
              <p className="detail-value">{(weather.visibility / 1000).toFixed(1)} km</p>
              <p className="detail-desc">Visibility range</p>
            </div>

            {/* Cloud Coverage */}
            <div className="detail-card">
              <div className="detail-header">
                <MdCloud size={24} className="detail-icon cloud" />
                <h3>Cloud Coverage</h3>
              </div>
              <p className="detail-value">{weather.clouds.all}%</p>
              <p className="detail-desc">Cloud percentage</p>
            </div>

            {/* UV Index / Sunrise */}
            <div className="detail-card">
              <div className="detail-header">
                <span className="detail-icon-text">☀️</span>
                <h3>Sunrise/Sunset</h3>
              </div>
              <p className="detail-value">
                {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
              </p>
              <p className="detail-desc">
                Set: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="additional-info">
            <div className="info-card">
              <h4>Coordinates</h4>
              <p>Latitude: {weather.coord.lat.toFixed(4)}°</p>
              <p>Longitude: {weather.coord.lon.toFixed(4)}°</p>
            </div>
            <div className="info-card">
              <h4>Current Conditions</h4>
              <p>Weather: {weather.weather[0].main}</p>
              <p>Timezone: UTC {weather.timezone > 0 ? '+' : ''}{(weather.timezone / 3600).toFixed(0)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherDashboard;
