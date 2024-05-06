// WeatherDetail.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from 'antd';
import fetchWeatherData from './WeatherServices';
import './WeatherDetail.css';
import { CloudOutlined, LoadingOutlined, ThunderboltOutlined, FireOutlined } from '@ant-design/icons'; // Import additional icons if needed

const WeatherDetail = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      console.log('weather Detail', data);
    };
    fetchData();
  }, [city]);

  const getWeatherIcon = () => {
    if (!weatherData) {
      return <LoadingOutlined className="weather-card-icon" />;
    } else if (weatherData.temperature > 30) {
      return <FireOutlined className="weather-card-icon" />;
    } else if (weatherData.temperature < 10) {
      return <ThunderboltOutlined className="weather-card-icon" />;
    } else {
      return <CloudOutlined className="weather-card-icon" />;
    }
  };

  return (
    <div>
      <h2 style={{ color: 'rgba(0,0,0,0.5)' }}>{city} Weather Detail</h2>
      <Card className="card">
        {weatherData ? (
          <div>
            <div className="container">
              <div className="top">
                <div className="top1">
                  <div className="location">
                    <p>{city}</p>
                  </div>
                  <div className="temp">
                    <p>{weatherData.temperature}°C</p>
                  </div>
                  <div>
                    <p>
                      <span className="lightertext">Time Zone </span>{' '}
                      <span className="bold"> {weatherData.timezone}</span>{' '}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="lightertext">Max Temp</span>{' '}
                      <span className="bold"> {weatherData.tempmax}</span>{' '}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="lightertext">Min Temp </span>{' '}
                      <span className="bold"> {weatherData.tempmin}</span>{' '}
                    </p>
                  </div>
                </div>

                <div className="description">
                  <p>{weatherData.description}</p>
                  <div>
                    {getWeatherIcon()}
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="feels">
                  <p className="bold">{weatherData.feellike}</p>
                  <p>Feels like </p>
                </div>
                <div className="humidity">
                  <p className="bold">{weatherData.humidity}%</p>
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  <p className="bold">{weatherData.pressure} Pa</p>
                  <p>Pressure</p>
                </div>
                <div className="wind">
                  <p className="bold">{weatherData.wind} MPH</p>
                  <p>Wind</p>
                </div>
              </div>
            </div>
            <Link to="/">
              <Button type="light" className="back-button">
                Back
              </Button>
            </Link>
          </div>
        ) : (
          <p><LoadingOutlined/></p>
        )}
      </Card>
    </div>
  );
};

export default WeatherDetail;
