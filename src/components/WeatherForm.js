import React, { useState } from 'react';
import { Input, Button, Card, Row, Col } from 'antd';
import {
  CloudOutlined,
  FieldTimeOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import fetchWeatherData from './WeatherServices';
import './WeatherForm.css';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const WeatherForm = ({ allowedCities }) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    try {
      event.preventDefault();
      if (!city) {
        setWeatherData(null);
        return;
      }

      const lowercaseCity = city.toLowerCase();
      const lowercaseAllowedCities = allowedCities.map((city) =>
        city.toLowerCase()
      );

      if (!lowercaseAllowedCities.includes(lowercaseCity)) {
        setWeatherData(null);
        NotificationManager.warning(
          'Weather not available for this city',
          'Success',
          3000
        );
        return;
      }

      setLoading(true);

      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setLoading(false);
      NotificationManager.success(
        'Weather data retrieved successfully.',
        'Success',
        3000
      );
    } catch (error) {
      setLoading(false);
      setWeatherData(null);
      NotificationManager.error(
        'Failed to fetch weather data. Please try again later.',
        'Error',
        3000
      );
    }
  };

  const getWeatherIcon = () => {
    if (!weatherData) {
      return <CloudOutlined className="weather-data-icon" />;
    }

    if (weatherData.description === 'Clear') {
      return <CloudOutlined className="weather-data-icon" />;
    } else if (weatherData.description === 'Clouds') {
      return <CloudOutlined className="weather-data-icon" />;
    } else if (weatherData.description === 'Rain') {
      return <FieldTimeOutlined className="weather-data-icon" />;
    } else if (weatherData.description === 'Thunderstorm') {
      return <ThunderboltOutlined className="weather-data-icon" />;
    } else {
      return <CloudOutlined className="weather-data-icon" />;
    }
  };

  return (
    <div className="weather-form">
      <Card
        title="Search Weather"
        headStyle={{ backgroundColor: '#444', borderBottom: 0, color: '#fff' }}
        bodyStyle={{ background: '#444', color: '#fff' }}
      >
        <Row gutter={[16, 16]} align="middle" justify="space-between">
          <Col xs={24} sm={16} md={18} lg={18} xl={20}>
            <Input
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onPressEnter={handleSearch}
            />
          </Col>
          <Col xs={24} sm={8} md={6} lg={6} xl={4}>
            <Button
              type="light"
              onClick={handleSearch}
              className="weather-search-button"
              loading={loading}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Card>
      {weatherData && (
        <Card
          title={<span style={{ color: '#fff' }}>{city}</span>}
          className="weather-data-card"
          headStyle={{ background: 'transparent', borderBottom: 0 }}
        >
          <div className="weather-data-section">
            {getWeatherIcon()}
            <p className="weather-data-text">{weatherData.temperature}°C</p>
          </div>
          <div style={{ marginTop: '16px' }}>
            <div className="weather-data-section">
              <FieldTimeOutlined className="weather-data-icon1" />
              <p className="weather-data-text1">
                Description: {weatherData.description}
              </p>
            </div>
            <div className="weather-data-section">
              <FieldTimeOutlined className="weather-data-icon1" />
              <p className="weather-data-text1">
                Humidity: {weatherData.humidity}%
              </p>
            </div>
            <div className="weather-data-section">
              <FieldTimeOutlined className="weather-data-icon1" />
              <p className="weather-data-text1">
                Pressure: {weatherData.pressure} hPa
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default WeatherForm;
