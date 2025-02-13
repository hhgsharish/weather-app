from flask import render_template, request
import requests
from app import app

# Replace with your OpenWeatherMap API key
API_KEY = '3618c91528830e92c240f43a685b3a14'
BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

@app.route('/', methods=['GET', 'POST'])
def index():
    weather_data = None
    if request.method == 'POST':
        city = request.form.get('city')
        if city:
            params = {'q': city, 'appid': API_KEY, 'units': 'metric'}
            response = requests.get(BASE_URL, params=params)
            if response.status_code == 200:
                weather_data = response.json()
    return render_template('index.html', weather_data=weather_data)