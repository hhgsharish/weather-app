import React, { useState, useEffect } from "react";

function Weather({ city }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!city || !process.env.REACT_APP_API_URL) return;
    
    fetch(`${process.env.REACT_APP_API_URL}/${city}`)
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch(() => setWeather(null));
  }, [city]);

  return (
    <div>
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Enter a city to see weather</p>
      )}
    </div>
  );
}

export default Weather;
