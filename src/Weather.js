import React, { useState } from "react";
import axios from "axios";
import { API } from "./api";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    const weather = API + city;
    try {
      const response = await axios.get(weather);
      setWeatherData({
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
      });
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.temperature} °C</p>
          <p>Humidity: {weatherData.humidity} %</p>
          <p>Description: {weatherData.description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
