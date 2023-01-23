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
  const displaySunrise = day.astro.sunrise.replace(" AM", "");
  const displaySunset = day.astro.sunset.replace(" PM", "");

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
            {hour.wind_dir} {hour.wind_kph} ({hour.gust_kph})
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
          <div>
            <h4>{displayDate}</h4>
            <img
              src={day.day.condition.icon}
              alt="weather icon"
              className="weather-icon"
            />
          </div>
        </div>
        <div className="forecast-header-cell">
          <h4>H: {day.day.maxtemp_c}°</h4>
        </div>
        <div className="forecast-header-cell">
          <h4>L: {day.day.mintemp_c}°</h4>
        </div>
        <div className="forecast-header-cell">
          <div className="sun-up-down">
            <img className="sun-up-down-img" src={sunriseLogo} />
            <p>{displaySunrise}</p>
          </div>
        </div>
        <div className="forecast-header-cell">
          <div className="sun-up-down">
            <img className="sun-up-down-img" src={sunsetLogo} />
            <p>{displaySunset}</p>
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
              <h4>kp/h (gust)</h4>
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
