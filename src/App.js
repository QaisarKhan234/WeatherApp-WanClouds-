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

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />

        <Layout style={{ marginTop: '64px' }}>
          <AppSider />

          <Layout style={{ marginLeft: '220px', marginRight: '20px' }}>
            <Content className="content">
              <Breadcrumb
                style={{
                  margin: '20px 6px',
                }}
              >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
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
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        marginBottom: '80px',
      }}
    >
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
