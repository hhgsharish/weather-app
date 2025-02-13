import React, { useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");

  return (
    <div>
      <h1>Weather App 🌦️</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Weather city={city} />
    </div>
  );
}

export default App;
