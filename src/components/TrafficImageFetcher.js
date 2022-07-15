import React, { useEffect, useState } from "react";
import axios from "axios";

const TrafficImageFetcher = ({ date, time, location }) => {
  const trafficImagesURL = `https://api.data.gov.sg/v1/transport/traffic-images`;
  //   const trafficImagesURL = `https://api.data.gov.sg/v1/transport/traffic-images?date_time=${date}T${time}`;
  const [camera, setCamera] = useState(null);

  function locateCamera(data) {
    const allCameras = data["items"][0]["cameras"];
    const loc = "location";
    const latitude = "latitude";
    const longitude = "longitude";

    const cam = allCameras.find(
      (camera) =>
        camera[loc][latitude] === location[latitude] &&
        camera[loc][longitude] === location[longitude]
    );
    setCamera(cam);
  }

  useEffect(() => {
    axios
      .get(trafficImagesURL)
      .then((res) => {
        // locateCamera(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("err"));
  }, [date, time, location]);

  return;
  //   return <img src={camera["image"]} />;
};

export default TrafficImageFetcher;
