// import React, { useState, useEffect } from 'react';
// import { Card } from 'antd';
// import {
//   LoadingOutlined,
//   CloudOutlined,
//   FieldTimeOutlined,
// } from '@ant-design/icons';
// import fetchWeatherData from './WeatherServices';
// import { Link } from 'react-router-dom';

// const WeatherCard = ({ city }) => {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchWeatherData(city);
//       setWeatherData(data);
//     };
//     fetchData();
//   }, [city]);

//   return (
//     <Link to={`/weather/${city}`} style={{ textDecoration: 'none' }}>
//       <Card
//         title={city}
//         hoverable={true}
//         style={{ color: 'black', width: 300 }}
//         headStyle={{
//           backgroundColor: '#f0f8ff',
//           borderBottom: '1px solid #ddd',
//         }}
//       >
//         {weatherData ? (
//           <div>
//             <p style={{ marginBottom: '8px' }}>
//               <CloudOutlined style={{ marginRight: '8px', color: '#1890ff' }} />{' '}
//               Temperature: {weatherData.temperature}°C
//             </p>
//             <p style={{ marginBottom: 0 }}>
//               <FieldTimeOutlined
//                 style={{ marginRight: '8px', color: '#1890ff' }}
//               />{' '}
//               Description: {weatherData.description}
//             </p>
//           </div>
//         ) : (
//           <p style={{ marginBottom: 0 }}>
//             <LoadingOutlined style={{ marginRight: '8px', color: '#1890ff' }} />{' '}
//             Loading...
//           </p>
//         )}
//       </Card>
//     </Link>
//   );
// };

// export default WeatherCard;

// --------------------updated the alignment to row direction ----------------------------------import React, { useState, useEffect } from 'react';
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


// import React, { useState, useEffect } from 'react';
// import { Card } from 'antd';
// import {
//   LoadingOutlined,
//   CloudOutlined,
//   FieldTimeOutlined,
// } from '@ant-design/icons';
// import fetchWeatherData from './WeatherServices';
// import { Link } from 'react-router-dom';

// const WeatherCard = ({ city }) => {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchWeatherData(city);
//       setWeatherData(data);
//     };
//     fetchData();
//   }, [city]);

//   return (
//     <Link to={`/weather/${city}`} style={{ textDecoration: 'none' }}>
//       <Card
//         hoverable={true}
//         style={{
//           color: 'black',
//           width: 310,
//           background: '#444',
//           border: 0,
//           display: 'flex',
//           flexDirection: 'row',
//           justifyContent: 'space-between', // Align children horizontally
//         }}
//         headStyle={{ background: 'transparent', borderBottom: 0 }}
//         bodyStyle={{
//           padding: '16px',
//           color: '#fff',
//           display: 'flex',
//           flexDirection: 'row',
//           justifyContent: 'space-between', // Align children horizontally
//           alignItems: 'center', // Center children vertically
//         }}
//       >
//         {/* Left side: City name and temperature */}
//         <div style={{marginTop:0, marginRight: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
//           <h3>{city}</h3>
//           {weatherData && (
//             <p style={{ margin: 0, fontSize: '30px', fontWeight: 'bold' }}>
//               {weatherData.temperature}°C
//             </p>
//           )}
//         </div>

//         {/* Right side: Icon and details */}
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           {weatherData ? (
//             <CloudOutlined style={{ fontSize: '52px', color: '#fff' }} />
//           ) : (
//             <LoadingOutlined style={{ fontSize: '52px', color: '#fff' }} />
//           )}

//           {weatherData && (
//             <div style={{ marginLeft: '16px' }}>
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <FieldTimeOutlined
//                   style={{ marginRight: '8px', fontSize: '10px' }}
//                 />
//                 <p style={{ margin: 0, fontSize: '11px' }}>
//                   Description: {weatherData.description}
//                 </p>
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <FieldTimeOutlined
//                   style={{ marginRight: '8px', fontSize: '10px' }}
//                 />
//                 <p style={{ margin: 0, fontSize: '11px' }}>
//                   Humidity: {weatherData.humidity}%
//                 </p>
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <FieldTimeOutlined
//                   style={{ marginRight: '8px', fontSize: '10px' }}
//                 />
//                 <p style={{ margin: 0, fontSize: '11px' }}>
//                   Pressure: {weatherData.pressure} hPa
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </Card>
//     </Link>
//   );
// };

// export default WeatherCard;
