## Weather Forecast App ☀️ ️

This is a simple web application that lets you check the current weather for any city! ️

### Features:

- Enter a city name and see the current weather conditions.
- Get details like:
  - City name
  - Current temperature (in Celsius)
  - Weather conditions (e.g., Cloudy, Sunny, Rainy)
  - Wind speed (in km/h)
  - Rain probability (percentage)
  - Sunlight hours (difference between sunrise and sunset)
- A dynamic weather icon based on the conditions, fetched from the Giphy API!

### Demo

Check out a live demo (if available) or see it in action by following the installation instructions below.

### Technologies Used:

- **HTML/CSS:** Building the webpage structure and styling.
- **JavaScript:** Fetching and displaying weather data.
- **Visual Crossing Weather API:** Provides real-time weather information.
- **Giphy API:** Supplies weather-related icons based on conditions.

### Installation:

1. **Clone the Repository:**

```bash
git clone https://github.com/yourusername/weather-forecast-app.git
```

2. **Navigate to the Project Directory:**

```bash
cd weather-forecast-app
```

3. **Install Dependencies (if any):**

If you're using a bundler like Webpack, install dependencies with:

```bash
npm install
```

4. **Build the Project (if using Webpack):**

```bash
npm run build
```

### Usage:

1. Open `index.html` in your browser.
2. Enter a city name in the input field and click "Check."
3. The current weather details and a corresponding icon will be displayed for the entered city.

### APIs:

This project utilizes two APIs:

1. **Visual Crossing Weather API:** Provides current weather details like temperature, wind speed, rain probability, sunrise/sunset times, etc.
2. **Giphy API:** Fetches weather-related GIFs or images based on weather conditions.

### API Keys:

To run this project, you'll need API keys for both services:

- **Visual Crossing Weather API Key:** Sign up on their website to obtain one.
- **Giphy API Key:** Create a Giphy Developer account to get a key.

**Important:** Add your API keys to the respective fetch calls within the JavaScript file (`script.js`). Here's an example placeholder:

```javascript
const weatherApiKey = "YOUR_VISUAL_CROSSING_API_KEY";
const giphyApiKey = "YOUR_GIPHY_API_KEY";
```

### Project Structure:

```
weather-forecast-app/
│
├── dist/  # Built files (if using Webpack)
├── src/
│   ├── index.html  # HTML template
│   ├── style.css   # Styling for the web page
│   ├── script.js    # Main logic for fetching and displaying weather
│   ├── icons/      # SVG icons used for weather details
│   └── README.md    # Project readme file
└── package.json  # Project metadata and npm scripts
```

### Future Improvements:

- Error handling for invalid cities or unavailable APIs.
- Displaying forecasts for future days.
- User interface enhancements.
- Temperature unit conversion (Celsius to Fahrenheit).

### License:

This project is open-source.

Feel free to customize this `README.md` further or add details about new features implemented!
