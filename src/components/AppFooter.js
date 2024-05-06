import React from 'react';
import { Layout } from 'antd';
import './AppFooter.css'
const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="footer">
      © {new Date().getFullYear()} Weather App Created by Qaisar Khan
    </Footer>
  );
};

export default AppFooter;
