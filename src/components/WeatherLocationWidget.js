import React, { useEffect, useRef } from "react";

import axios from "axios";

import LocationSelector from "./LocationSelector";
import WeatherDisplay from "./WeatherDisplay";
import { DATE_FORMAT, TIME_FORMAT } from "../App";

const WeatherLocationWidget = ({ date, time, location, dispatch }) => {
  const allLocations = useRef([]);

  useEffect(() => {
    if (!date || !time) return;

    const curr_date = date.format(DATE_FORMAT);
    const curr_time = time.format(TIME_FORMAT);
    const weatherForecastURL = `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=${curr_date}T${curr_time}`;

    axios
      .get(weatherForecastURL)
      .then((res) => {
        console.log(res.data);
        allLocations.current = res.data["area_metadata"];
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
      <WeatherDisplay />
    </div>
  );
};

export default WeatherLocationWidget;
