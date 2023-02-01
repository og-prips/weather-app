import { useState } from "react";
import sunriseLogo from "../../assets/images/sunrise.png";
import sunsetLogo from "../../assets/images/sunset.png";
import "./Forecast.css";

const Forecast = ({ day }) => {
  const [expanded, setExpanded] = useState(false);

  const displayDate = new Date(day.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  const forecastHours = day.hour.map((hour) => {
    const dateHours = new Date(hour.time).getHours();
    const displayHour = dateHours.toString().padStart(2, "0");
    const displayTemp = Math.round(hour.temp_c);
    const displayFeelsLike = Math.round(hour.feelslike_c);

    return (
      <div key={hour.time} className="forecast-content-row">
        <div className="forecast-content-cell">
          <div>
            <p>{displayHour}</p>
            <img src={hour.condition.icon} alt="weather icon" />
          </div>
        </div>
        <div className="forecast-content-cell">
          <p>{displayTemp}</p>
        </div>
        <div className="forecast-content-cell">
          <p>{displayFeelsLike}</p>
        </div>
        <div className="forecast-content-cell">
          <p>{hour.precip_mm}</p>
        </div>
        <div className="forecast-content-cell">
          <p>
            {hour.wind_dir} {Math.round(hour.wind_kph / 3.6)} (
            {Math.round(hour.gust_kph / 3.6)})
          </p>
        </div>
        <div className="forecast-content-cell">
          <p>{hour.cloud} %</p>
        </div>
        <div className="forecast-content-cell">
          <p>{hour.chance_of_rain} %</p>
        </div>
        <div className="forecast-content-cell">
          <p>{hour.humidity} %</p>
        </div>
      </div>
    );
  });

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="forecast-table">
      <div onClick={toggleExpanded} className="forecast-header">
        <div className="forecast-header-cell">
          <h4 className="forecast-header-cell-date">{displayDate}</h4>
        </div>
        <div className="forecast-header-cell">
          <div>
            <img
              src={day.day.condition.icon}
              alt="weather icon"
              className="weather-icon"
            />
            <h4>{Math.round(day.day.avgtemp_c)}°</h4>
          </div>
        </div>
        <div className="forecast-header-cell">
          <h4>H: {Math.round(day.day.maxtemp_c)}°</h4>
        </div>
        <div className="forecast-header-cell">
          <h4>L: {Math.round(day.day.mintemp_c)}°</h4>
        </div>
        <div className="forecast-header-cell">
          <div className="sun-up-down">
            <img className="sun-up-down-img" src={sunriseLogo} alt="sunrise" />
            <p>{day.astro.sunrise}</p>
          </div>
        </div>
        <div className="forecast-header-cell">
          <div className="sun-up-down">
            <img className="sun-up-down-img" src={sunsetLogo} alt="sunset" />
            <p>{day.astro.sunset}</p>
          </div>
        </div>
        <span className="expand">
          {expanded ? (
            <i className="arrow up"></i>
          ) : (
            <i className="arrow down"></i>
          )}
        </span>
      </div>

      {expanded && (
        <div className="forecast-content">
          <div className="forecast-content-header">
            <div className="forecast-content-header-cell">
              <h4>hour</h4>
            </div>
            <div className="forecast-content-header-cell">
              <h4>temp</h4>
            </div>
            <div className="forecast-content-header-cell">
              <h4>feels like</h4>
            </div>
            <div className="forecast-content-header-cell">
              <h4>mm</h4>
            </div>
            <div className="forecast-content-header-cell">
              <h4>m/s (gust)</h4>
            </div>
            <div className="forecast-content-header-cell">
              <h4>cloud</h4>
            </div>
            <div className="forecast-content-header-cell">
              <h4>rain prob.</h4>
            </div>
            <div className="forecast-content-header-cell">
              <h4>humidity</h4>
            </div>
          </div>
          {forecastHours}
        </div>
      )}
    </div>
  );
};

export default Forecast;
