import { useReducer } from "react";
import "./App.css";

import DateTimeField from "./components/DateTimeField";
import TrafficImageFetcher from "./components/TrafficImageFetcher";
import WeatherLocationWidget from "./components/WeatherLocationWidget";

export const ACTIONS = {
  SET_DATE: "set-date",
  SET_TIME: "set-time",
  SET_LOCATION: "set-location",
};

export const DATE_FORMAT = "yyyy-MM-DD";
export const TIME_FORMAT = "HH:mm:ss";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_DATE:
      return { ...state, date: action.payload.date };
    case ACTIONS.SET_TIME:
      return { ...state, time: action.payload.time };
    case ACTIONS.SET_LOCATION:
      return { ...state, location: action.payload.location };
    default:
      return state;
  }
}

function App() {
  const [appState, dispatch] = useReducer(reducer, {
    date: "",
    time: "",
    location: {},
  });

  return (
    <div>
      <DateTimeField
        date={appState["date"]}
        time={appState["time"]}
        dispatch={dispatch}
      />
      <WeatherLocationWidget
        date={appState["date"]}
        time={appState["time"]}
        location={appState["location"]}
        dispatch={dispatch}
      />
      <TrafficImageFetcher
        date={appState["date"]}
        time={appState["time"]}
        location={appState["location"]}
      />
    </div>
  );
}

export default App;
