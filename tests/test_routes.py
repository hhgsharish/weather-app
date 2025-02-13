import unittest
from app import app

class TestWeatherApp(unittest.TestCase):
    def setUp(self):
        # Create a test client
        self.app = app.test_client()
        self.app.testing = True

    def test_index_page(self):
        # Test the index page
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Weather App', response.data)

    def test_valid_city(self):
        # Test with a valid city
        response = self.app.post('/', data={'city': 'London'})
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'London', response.data)

    def test_invalid_city(self):
        # Test with an invalid city
        response = self.app.post('/', data={'city': 'InvalidCityName123'})
        self.assertEqual(response.status_code, 200)
        self.assertNotIn(b'InvalidCityName123', response.data)

    def test_forecast_data(self):
        # Test if forecast data is displayed
        response = self.app.post('/', data={'city': 'Paris'})
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'5-Day Forecast', response.data)

if __name__ == '__main__':
    unittest.main()
