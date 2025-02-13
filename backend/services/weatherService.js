const axios = require("axios");

const getWeather = async (city) => {
  const apiKey = process.env.WEATHER_API_KEY;
  if (!apiKey) throw new Error("API key missing in environment variables");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = { getWeather };
