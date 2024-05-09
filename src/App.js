import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherCard from './components/WeatherCard';
import WeatherForm from './components/WeatherForm';
import WeatherDetail from './components/WeatherDetail';
import AppHeader from './components/AppHeader';
import AppSider from './components/AppSider';
import AppFooter from './components/AppFooter';
import { NotificationContainer } from 'react-notifications';
import './App.css';
const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <AppHeader />
        <Layout className="layout">
          <AppSider />

          <Layout className="contentLayout">
            <Content className="content">
              <Breadcrumb className="breadCrump">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Weather App</Breadcrumb.Item>
              </Breadcrumb>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/weather/:city" element={<WeatherDetail />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
        <NotificationContainer />
        <AppFooter />
      </Layout>
    </Router>
  );
};

const cities = ['Islamabad', 'Karachi', 'Lahore', 'Peshawar', 'kalam'];

const Home = () => {
  return (
    <div className="home">
      {cities.map((city, index) => (
        <WeatherCard key={index} city={city} />
      ))}
    </div>
  );
};

const Search = () => {
  return <WeatherForm allowedCities={cities} />;
};

export default App;
