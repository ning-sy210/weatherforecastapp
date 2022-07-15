import React, { useEffect, useRef } from "react";

import axios from "axios";

import LocationSelector from "./LocationSelector";
import WeatherDisplay from "./WeatherDisplay";
import { DATE_FORMAT, TIME_FORMAT } from "../App";

const WeatherLocationWidget = ({ date, time, location, dispatch }) => {
  const allLocations = useRef([]);
  const currDate = useRef("");
  const currTime = useRef("");

  useEffect(() => {
    if (!date || !time) return;

    currDate.current = date.format(DATE_FORMAT);
    currTime.current = time.format(TIME_FORMAT);
    const weatherForecastURL = `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=${currDate.current}T${currTime.current}`;

    axios
      .get(weatherForecastURL)
      .then((res) => {
        console.log(res.data);
        allLocations.current = res.data["items"][0]["forecasts"];
      })
      .catch((err) => console.log(err));
  }, [date, time]);

  return (
    <div>
      <LocationSelector
        selectedLocation={location}
        locationList={allLocations.current}
        dispatch={dispatch}
      />
      <WeatherDisplay
        location={allLocations.current.find((loc) => loc["area"] === location)}
      />
    </div>
  );
};

export default WeatherLocationWidget;
