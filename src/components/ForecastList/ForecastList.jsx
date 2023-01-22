import Forecast from "../Forecast/Forecast";
import "./ForecastList.css";

const ForecastList = ({ data }) => {
  const forecastDays = data.forecast.forecastday;

  return (
    <div className="forecast-list">
      {forecastDays.map((day) => (
        <Forecast key={day.date} day={day} />
      ))}
    </div>
  );
};

export default ForecastList;
