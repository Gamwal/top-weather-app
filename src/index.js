import "./style.css";

async function getWeather(location) {
  try {
    const weather = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current&key=GUHZGQTVEAY646WALNRC65VYJ&contentType=json`
    );
    if (!weather.ok) {
      throw new Error(
        `Error fetching weather for ${location}: ${weather.statusText}`
      );
    }
    const weatherResponse = await weather.json();
    console.log(extractWeatherInfo(weatherResponse));
  } catch (error) {
    console.error(`Failed to fetch weather data: ${error.message}`);
    throw Error(`Location ${location} doesn't exist`);
  }
}

function extractWeatherInfo(response) {
  return response.currentConditions;
}

getWeather("Abuja");
