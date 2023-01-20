import weatherConditionData from "../assets/data/weather-conditions";
import { useState, useEffect } from "react";

const WeatherIcon = ({ code }) => {
  const [icon, setIcon] = useState("");

  console.log(weatherConditionData);

  useEffect(() => {
    for (let i = 0; i < weatherConditionData.length; i++) {
      if (code === weatherConditionData[i].code) {
        console.log("setting icon at " + weatherConditionData[i].code);
        setIcon(weatherConditionData[i].icon);

        // return <img src={require(`../assets/images/${icon}`).default} />;
      }
    }

    console.log(icon);
  }, [code]);
};

export default WeatherIcon;
