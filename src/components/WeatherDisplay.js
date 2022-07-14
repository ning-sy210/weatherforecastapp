import React from "react";

import partlyCloudy from "../images/partly_cloudy.png";

const WeatherDisplay = () => {
  return (
    <div className="vertical-align">
      <img src={partlyCloudy} alt="Partly Cloudy" />
      <div>Partly Cloudy</div>
    </div>
  );
};

export default WeatherDisplay;
