import React from "react";

const Weather = ({ data }) => {
  const { app_max_temp, app_min_temp, datetime, uv, weather } = data;
  return (
    <div className="weather-box">
      <p className="main">{datetime}</p>
      <p className="small">{weather.description}</p>
      <p classname="med">Temp: {app_max_temp}%</p>
      <p classname="med">Max: {app_max_temp}%</p>
      <p className="med">Min: {app_min_temp}%</p>
      <p className="med">UV: {uv}</p>
    </div>
  );
};

export default Weather;
