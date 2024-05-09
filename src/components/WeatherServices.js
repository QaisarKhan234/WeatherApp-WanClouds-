import axios from 'axios';
import { API_KEY, BASE_URL } from './config';

const fetchWeatherData = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    // console.log('weather service', data);

    return {
      temperature: data.main.temp,
      description: data.weather[0].description,
      visibility: data.visibility,
      timezone: data.timezone,
      feellike: data.main.feels_like,
      humidity: data.main.humidity,
      tempmax: data.main.temp_max,
      tempmin: data.main.temp_min,
      pressure: data.main.pressure,
      wind: data.wind.speed,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

export default fetchWeatherData;
