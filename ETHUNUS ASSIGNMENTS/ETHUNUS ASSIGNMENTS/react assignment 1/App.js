import React, { useState } from "react";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({
    temp: 20,
    city: "Bhopal",
    time: "12:15",
    day: "Monday",
    condition: "mist",
  });
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    
    setWeatherData({
      temp: 24,
      city: city,
      time: "1:45",
      day: "Tuesday",
      condition: "clear",
    });
  };

  return (
    <div className="container">
      <h1 className="heading">Weather App</h1>
      <div className="weather-info">
        <div className="left">
          <div className="temp">{weatherData.temp}</div>
          <div className="city">{weatherData.city}</div>
          <div className="datetime">
            {weatherData.time} {weatherData.day}
          </div>
          <div className="condition">{weatherData.condition}</div>
        </div>
        <div className="right">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City name"
            className="input-box"
          />
          <button onClick={fetchWeather} className="search-button">
            Search Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
