import React from "react";

const WeatherDisplay = ({ location }) => {
  if (Object.keys(location).length === 0) return;

  return (
    <div className="vertical-align">
      <span>Weather Forecast:</span>
      <span className="bold-text">{location["forecast"]}</span>
    </div>
  );
};

export default WeatherDisplay;
