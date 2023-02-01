import React, { useState, useEffect } from "react";
import ForecastList from "./components/ForecastList/ForecastList";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import loadingLogo from "./assets/images/loading.svg";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (location) {
      handleSearch(`${location.lat},${location.long}`);
    }
  }, [location]);

  const handleError = (errorCode) => {
    if (errorCode === 1003 || errorCode === 1006) {
      setError("Location not found");
    } else {
      setError("Something went wrong, please try again later");
    }
  };

  const handleSearch = (location) => {
    setError(false);
    setLoading(true);
    console.log("fetching");
    console.log(location);

    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=6&aqi=no&lang=en`
    )
      .then((response) => {
        setLoading(false);

        if (response.status === 200) {
          return response.json();
        } else {
          return response.json().then((data) => {
            handleError(data.error.code);
          });
        }
      })
      .then((data) => {
        setWeather(data);
      });
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      {loading && (
        <div className="loading">
          <img src={loadingLogo} alt="loading" />
        </div>
      )}
      {error && <h1 className="warning">{error}</h1>}
      {weather && <CurrentWeather data={weather} />}
      {weather && <ForecastList data={weather} />}
    </>
  );
}

export default App;
