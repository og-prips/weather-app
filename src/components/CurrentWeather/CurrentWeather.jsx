import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  const isDay = !!data.current.is_day;
  const bgColor = isDay ? "#7fc5e3" : "#07091a";
  const fgColor = isDay ? "black" : "white";

  return (
    <>
      <div
        className="current-weather"
        style={{ backgroundColor: `${bgColor}`, color: `${fgColor}` }}
      >
        <div>
          <h3>
            {data.location.name}, {data.location.country}
          </h3>
          <p>{data.location.localtime}</p>
        </div>
        <div>
          <h1>{data.current.temp_c}°</h1>
          <img src={data.current.condition.icon} />
        </div>

        {/* <WeatherIcon code={data.current.condition.code} /> */}
      </div>
    </>
  );
};

export default CurrentWeather;
