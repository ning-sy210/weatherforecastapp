import "./App.css";
import DateTimeField from "./components/DateTimeField";
import LocationList from "./components/LocationList";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  return (
    <div>
      <DateTimeField />
      <LocationList />
      <WeatherDisplay />
    </div>
  );
}

export default App;
