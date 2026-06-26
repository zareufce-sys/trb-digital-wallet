# 🌤️ Weather Dashboard

A modern, responsive weather dashboard application built with React that fetches real-time weather data from the OpenWeatherMap API.

## Features

🌍 **Real-time Weather Data**
- Fetch current weather for any city worldwide
- Accurate temperature, humidity, and wind speed
- Weather conditions with descriptive icons
- Coordinates (latitude/longitude)

🔍 **City Search**
- Search for weather in any city
- Error handling for invalid cities
- Quick city suggestions
- Search history support

🌡️ **Temperature Units**
- Toggle between Celsius (°C) and Fahrenheit (°F)
- Real-time conversion
- Unit preference persistence

📊 **Detailed Weather Information**
- Temperature (current, feels like, min, max)
- Humidity percentage
- Wind speed and direction
- Atmospheric pressure
- Visibility range
- Cloud coverage
- Sunrise/Sunset times
- Timezone information

🎨 **Modern Design**
- Dark theme with gradient backgrounds
- Smooth animations and transitions
- Responsive layout for all devices
- Weather-specific icons and colors
- Professional UI components

⚡ **Performance**
- Fast data fetching
- Optimized rendering
- Minimal dependencies
- Smooth user experience

## Tech Stack

- **React 18** - UI library
- **React Icons** - Icon library (Material Design & Weather Icons)
- **OpenWeatherMap API** - Weather data source
- **CSS3** - Styling with animations
- **JavaScript ES6+** - Modern JavaScript
- **Fetch API** - HTTP requests

## Getting Started

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager
- Internet connection (for API calls)

### Installation

1. Clone the repository
```bash
git clone https://github.com/zareufce-sys/trb-digital-wallet.git
cd trb-digital-wallet
git checkout weather-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Information

### OpenWeatherMap API
- **Service:** Free weather data API
- **Endpoint:** https://api.openweathermap.org/data/2.5/weather
- **Free Tier:** Yes (1,000 calls/day)
- **API Key:** cb8bc3c2e0e49587142aa4e986b32d15 (included in app)

### API Response includes:
```json
{
  "coord": { "lon": 21.4280, "lat": 42.0031 },
  "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds" }],
  "main": {
    "temp": 15.2,
    "feels_like": 14.8,
    "temp_min": 13.5,
    "temp_max": 16.9,
    "pressure": 1013,
    "humidity": 72
  },
  "visibility": 10000,
  "wind": { "speed": 3.5, "deg": 230 },
  "clouds": { "all": 65 },
  "sys": {
    "country": "MK",
    "sunrise": 1624856400,
    "sunset": 1624909200
  },
  "timezone": 7200,
  "name": "Skopje"
}
```

## Usage

### Search for Weather
1. Type a city name in the search box
2. Press Enter or click the Search button
3. Weather data will be displayed

### Change Temperature Unit
1. Click the °C or °F button
2. All temperatures will convert automatically

### Refresh Weather Data
1. Click the refresh icon button
2. Current weather will be updated

### View Weather Details
- **Main Card:** Temperature, location, and weather condition
- **Detail Cards:** Humidity, wind speed, pressure, visibility, clouds, sunrise/sunset
- **Additional Info:** Coordinates and timezone

## Weather Icons

The app uses weather-specific icons:
- ☀️ **Clear:** Sunny weather
- ☁️ **Clouds:** Cloudy weather
- 🌧️ **Rain:** Rainy conditions
- ❄️ **Snow:** Snowy weather
- ⛈️ **Thunderstorm:** Severe weather

## Data Structure

### Weather Object
```javascript
{
  coord: { lon, lat },           // Location coordinates
  weather: [{ main, description }],
  main: {
    temp,                         // Current temperature
    feels_like,                   // Feels like temperature
    temp_min, temp_max,          // Min/Max temperature
    pressure,                     // Atmospheric pressure
    humidity                      // Humidity percentage
  },
  visibility,                     // Visibility in meters
  wind: { speed, deg },          // Wind speed and direction
  clouds: { all },               // Cloud coverage %
  sys: {
    country,                      // Country code
    sunrise, sunset               // Unix timestamps
  },
  timezone,                       // Timezone offset in seconds
  name                            // City name
}
```

## Configuration

### Change API Key
Edit `src/pages/WeatherDashboard.js`:
```javascript
const API_KEY = 'your-api-key-here';
```

### Change Default City
Edit `src/pages/WeatherDashboard.js`:
```javascript
const [city, setCity] = useState('Your City');
```

## Project Structure

```
src/
├── pages/
│   ├── WeatherDashboard.js     # Main component
│   └── WeatherDashboard.css    # Styling
├── index-weather.js            # Entry point
└── index.css                   # Global styles
```

## Features Breakdown

### Search Functionality
- Real-time search input
- Error handling for invalid cities
- Search form submission
- Clear search field after search

### Temperature Display
- Large, prominent temperature display
- Gradient text effect
- Feels-like temperature
- Min/Max temperatures
- Unit conversion support

### Weather Details
- **Humidity:** Water vapor percentage
- **Wind Speed:** Speed in km/h with direction
- **Pressure:** Atmospheric pressure in hPa
- **Visibility:** Distance in kilometers
- **Cloud Coverage:** Percentage of clouds
- **Sunrise/Sunset:** Times in 24-hour format

### Responsive Design
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Error Handling

### Network Errors
- "Failed to fetch weather data" - Connection issue
- Retry automatically with refresh button

### Invalid City
- "City not found" - City doesn't exist
- Try another city name

### API Errors
- Rate limit exceeded (reset daily)
- API maintenance or downtime

## Performance Optimization

- Lazy loading of weather icons
- Efficient re-rendering with React hooks
- Optimized API calls
- Responsive image handling
- CSS animations for smooth transitions

## Security

- API key is public (free tier)
- No sensitive data stored
- CORS-friendly API
- No authentication required

## Customization

### Change Colors
Edit `src/pages/WeatherDashboard.css`:
```css
/* Primary Colors */
color: #ff4444;      /* Red */
color: #ffaa00;      /* Orange */
color: #4488ff;      /* Blue */
```

### Add Features
- Multiple cities forecast
- 5-day forecast
- Weather alerts
- Save favorite cities
- Weather comparison
- Historical data

## Limitations

- Single city search (no multi-city)
- Current weather only (no forecast)
- No historical data
- Free tier API limits (1000 calls/day)
- No offline mode

## Build for Production

```bash
npm run build
```

Creates optimized production build in the `build` folder.

## Deployment

### Netlify
```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Vercel
```bash
npm run build
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/repo-name"
npm run build
npm run deploy
```

## License

MIT License - Open source and free to use

## Support

For issues or suggestions, open an issue on GitHub.

## Related Resources

- **OpenWeatherMap API:** https://openweathermap.org/api
- **React Documentation:** https://react.dev
- **React Icons:** https://react-icons.github.io/react-icons
- **CSS Animations:** https://developer.mozilla.org/en-US/docs/Web/CSS/animation

---

**Made with ❤️ using React & OpenWeatherMap API**
