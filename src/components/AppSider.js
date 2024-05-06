import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './AppSider.css';
const { Sider } = Layout;

const AppSider = () => {
  const [selectedKey, setSelectedKey] = useState('home');
  return (
    <Sider width={200} className="sider">
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        onSelect={({ key }) => setSelectedKey(key)}
        className="sider-menu"
      >
        <Menu.Item
          key="home"
          style={{
            color: '#fff',
            backgroundColor: selectedKey === 'home' ? '#555' : '#444',
          }}
        >
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item
          key="search"
          style={{
            color: '#fff',
            backgroundColor: selectedKey === 'search' ? '#555' : '#444',
          }}
        >
          <Link to="/search">Search</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppSider;
