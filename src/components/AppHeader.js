import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './AppHeader.css';
const { Header } = Layout;

const AppHeader = () => {
  const [selectHeaderKey, setSelectHeaderKey] = useState('home')
  return (
    <Header className="header">
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[selectHeaderKey]}
        onSelect={({ key }) => setSelectHeaderKey(key)}
        className="header-menu"
      >
        <Menu.Item
          key="home"
          style={{
            color: '#fff',
            backgroundColor: selectHeaderKey === 'home' ? '#555' : '#292727',
          }}
        >
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item
          key="search"
          style={{
            color: '#fff',
            backgroundColor: selectHeaderKey === 'search' ? '#555' : '#292727',
          }}
        >
          <Link to="/search">Search</Link>
        </Menu.Item>
      </Menu>
      <Link to="/" className="weather-app-text">
        Weather App
      </Link>
    </Header>
  );
};

export default AppHeader;
