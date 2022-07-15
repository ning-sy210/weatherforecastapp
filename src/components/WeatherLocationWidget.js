import React, { useEffect, useRef } from "react";

import axios from "axios";

import LocationSelector from "./LocationSelector";
import WeatherDisplay from "./WeatherDisplay";
import { DATE_FORMAT, TIME_FORMAT } from "../App";

function makeCompact(locationData) {
  const areaMetaData = locationData["area_metadata"];
  const forecasts = locationData["items"][0]["forecasts"];

  const output = [];

  for (let i = 0; i < areaMetaData.length; i++) {
    const newData = {
      ...forecasts[i],
      coordinates: areaMetaData[i]["label_location"],
    };
    output.push(newData);
  }

  return output;
}

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
        allLocations.current = makeCompact(res.data);
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
      <WeatherDisplay location={location} />
    </div>
  );
};

export default WeatherLocationWidget;
