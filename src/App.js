import React, { useState, useEffect } from "react";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import Weather from "./components/Weather";
import "./App.css";

console.log(process.env.REACT_APP_API_KEY);

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    console.log(weather);
  }, [weather, forecast]);

  const handleSearch = (location) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&aqi=no&lang=sv`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      {weather && <Weather data={weather} />}
    </>
  );
}

export default App;
