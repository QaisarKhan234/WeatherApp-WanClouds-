import { Card } from 'antd';
import {
  LoadingOutlined,
  CloudOutlined,
  FieldTimeOutlined,
  FireOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import fetchWeatherData from './WeatherServices';
import { Link } from 'react-router-dom';
import './WeatherCard.css';
import { useEffect, useState } from 'react';

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherData(city);
      console.log(data);
      setWeatherData(data);
    };
    fetchData();
  }, [city]);

  const getWeatherIcon = () => {
    if (!weatherData) {
      return <LoadingOutlined className="weather-card-icon" />;
    } else if (weatherData.temperature > 30) {
      return <CloudOutlined className="weather-card-icon" />;
    } else if (weatherData.temperature < 10) {
      return <ThunderboltOutlined className="weather-card-icon" />;
    } else {
      return <FireOutlined className="weather-card-icon" />;
    }
  };

  return (
    <Link to={`/weather/${city}`} style={{ textDecoration: 'none' }}>
      <Card
        hoverable
        className="weather-card"
        headStyle={{ background: 'transparent', borderBottom: 0 }}
        bodyStyle={{
          padding: '16px',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className="weather-card-header">
          <h3 className="weather-card-city">{city}</h3>
          {getWeatherIcon()}
        </div>
        <div className="weather-card-details">
          {weatherData && (
            <>
              <p className="weather-card-temperature">
                {weatherData.temperature}°C
              </p>
              <div className="weather-card-info">
                <div className="weather-info">
                  <FieldTimeOutlined className="weather-info-icon" />
                  <p className="weather-info-text">
                    Description: {weatherData.description}
                  </p>
                </div>
                <div className="weather-info">
                  <FieldTimeOutlined className="weather-info-icon" />
                  <p className="weather-info-text">
                    Humidity: {weatherData.humidity}%
                  </p>
                </div>
                <div className="weather-info">
                  <FieldTimeOutlined className="weather-info-icon" />
                  <p className="weather-info-text">
                    Pressure: {weatherData.pressure} hPa
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default WeatherCard;

