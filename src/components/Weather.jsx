const Weather = (data) => {
  data = data.data;
  let isDay = !!data.current.is_day;
  let bgColor = isDay ? "yellow" : "black";
  console.log(isDay);

  return (
    <>
      <div
        className="current-weather"
        style={{ backgroundColor: `${bgColor}` }}
      >
        {isDay}
      </div>
    </>
  );
};

export default Weather;
