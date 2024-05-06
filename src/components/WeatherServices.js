import axios from 'axios';
const API_KEY = '60f5fa0f877081516944e81e537c1639';

const fetchWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
  try {
    const response = await axios.get(url);
    const data = response.data;
    
    console.log("weather service", data);
    
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
      wind: data.wind.speed
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

export default fetchWeatherData;
