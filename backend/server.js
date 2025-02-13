require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { getWeather } = require("./services/weatherService");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/weather/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const data = await getWeather(city);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌎 Server running on port ${PORT}`));
