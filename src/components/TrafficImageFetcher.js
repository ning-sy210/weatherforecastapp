import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { DATE_FORMAT, TIME_FORMAT } from "../App";

function locateCamera(data, coordinates) {
  const allCameras = data["items"][0]["cameras"];
  const loc = "location";
  const latitude = "latitude";
  const longitude = "longitude";

  const DIFFERENCE = 0.05;

  const camera = allCameras.find(
    (camera) =>
      Math.abs(camera[loc][latitude].toFixed(3) - coordinates[latitude]) <=
        DIFFERENCE &&
      Math.abs(camera[loc][longitude].toFixed(3) - coordinates[longitude]) <=
        DIFFERENCE
  );
  return camera;
}

const TrafficImageFetcher = ({ date, time, location }) => {
  const [camera, setCamera] = useState(null);
  const currDate = useRef("");
  const currTime = useRef("");

  useEffect(() => {
    currDate.current = date.format(DATE_FORMAT);
    currTime.current = time.format(TIME_FORMAT);
    const trafficImagesURL = `https://api.data.gov.sg/v1/transport/traffic-images?date_time=${currDate.current}T${currTime.current}`;

    axios
      .get(trafficImagesURL)
      .then((res) => {
        setCamera(locateCamera(res.data, location["coordinates"]));
      })
      .catch((err) => console.log(err));
  }, [date, time, location]);

  return camera ? (
    <img src={camera["image"]} alt="Camera footage" className="img" />
  ) : (
    "No image found :("
  );
};

export default TrafficImageFetcher;
