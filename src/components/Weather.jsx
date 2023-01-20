import WeatherIcon from "./WeatherIcon";

const Weather = (data) => {
  data = data.data;
  let isDay = !!data.current.is_day;
  let bgColor = isDay ? "yellow" : "black";
  let fgColor = isDay ? "black" : "white";

  return (
    <>
      <div
        className="current-weather"
        style={{ backgroundColor: `${bgColor}`, color: `${fgColor}` }}
      >
        <h3>
          {data.location.name}, {data.location.country}
        </h3>
        <p>{data.location.localtime}</p>
        <h1>{data.current.temp_c}°</h1>
        <WeatherIcon code={data.current.condition.code} />
      </div>
    </>
  );
};

export default Weather;
