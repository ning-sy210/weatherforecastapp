import "./App.css";

import DateTimeField from "./components/DateTimeField";
import LocationList from "./components/LocationList";
import TrafficImageFetcher from "./components/TrafficImageFetcher";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  return (
    <div>
      <DateTimeField />
      <LocationList />
      <WeatherDisplay />
      <TrafficImageFetcher />
    </div>
  );
}

export default App;
