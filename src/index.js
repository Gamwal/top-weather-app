import "./style.css";

const form = document.querySelector("form");
const city = document.querySelector("#city");
const time = document.querySelector("#time");
const currentTemperature = document.querySelector("#current-temp");
const weatherCondition = document.querySelector("#weather-condition");
const windSpeed = document.querySelector("#wind-speed");
const rainProbability = document.querySelector("#rain-probability");
const sunlightHours = document.querySelector("#sunlight-hours");
const weatherIcon = document.querySelector("#weather-icon");
const searchError = document.querySelector("#input-error");

async function getWeather(location) {
  try {
    const weather = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=current&key=GUHZGQTVEAY646WALNRC65VYJ&contentType=json`
    );
    if (!weather.ok) {
      throw new Error(
        `Error fetching weather for ${location}: ${weather.statusText}`
      );
    }
    const weatherResponse = await weather.json();
    console.log(weatherResponse.currentConditions);
    updateWeatherInfo(weatherResponse);
  } catch (error) {
    console.error(`Failed to fetch weather data: ${error.message}`);
    searchError.textContent = "Location doesn't exist";
  }
}

function updateWeatherInfo(response) {
  city.textContent = response.address;
  time.textContent = response.currentConditions.datetime;
  currentTemperature.textContent = `${response.currentConditions.temp}°C`;
  weatherCondition.textContent = response.currentConditions.conditions;
  windSpeed.textContent = `${response.currentConditions.windspeed} km/h`;
  rainProbability.textContent = `${response.currentConditions.precipprob} %`;
  sunlightHours.textContent = `${getTimeDifferenceInHours(
    response.currentConditions.sunset,
    response.currentConditions.sunrise
  )} hrs`;
  getWeatherIconSrc(response.currentConditions.conditions);
}

function convertToTimeObject(timeString) {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, seconds, 0);
  return date;
}

function getTimeDifferenceInHours(timeString1, timeString2) {
  const time1 = convertToTimeObject(timeString1);
  const time2 = convertToTimeObject(timeString2);

  const diffMilliseconds = Math.abs(time2 - time1);
  const diffHours = diffMilliseconds / (1000 * 60 * 60);
  return Math.round(diffHours);
}

form.addEventListener("submit", (event) => {
  const input = document.querySelector("input");
  getWeather(input.value);
  event.preventDefault();

  input.addEventListener("blur", () => {
    searchError.textContent = "";
  });
});

async function getWeatherIconSrc(text) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=1xKHdKHBMf7o728Cg75YU1g7Ek2iLs7c&s=${text}`
    );
    if (!response.ok) {
      console.error("Error fetching GIF");
    }
    const jsonresponse = await response.json();
    weatherIcon.src = jsonresponse.data.images.original.url;
  } catch (error) {
    console.error("Could not fetch ICON src");
    weatherIcon.src = "./icons/weather-cloudy-clock.svg";
  }
}

// getWeather("Abuja");
