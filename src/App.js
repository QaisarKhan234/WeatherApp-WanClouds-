// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Topbar from './components/Topbar';
// import Sidebar from './components/Sidebar';
// import WeatherCard from './components/WeatherCard';
// import WeatherForm from './components/WeatherForm';
// import './App.css';
// import MyFooter from './components/MyFooter';
// import WeatherDetail from './components/WeatherDetail';
// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Topbar />
//         <div className="main-container">
//           <Sidebar />
//           <div className="content">
//             <Routes>
//               <Route exact path="/" element={<Home />} />
//               <Route path="/search" element={<Search />} />
//               <Route path="/weather/:city" element={<WeatherDetail />} />
//             </Routes>
//           </div>
//         </div>
//         <MyFooter />
//       </div>
//     </Router>
//   );
// };

// const cities = ['Islamabad', 'Karachi', 'Lahore', 'Peshawar'];

// const Home = () => {
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//       {cities.map((city, index) => (
//         <WeatherCard key={index} city={city} />
//       ))}
//     </div>
//   );
// };

// const Search = () => {
//   return <WeatherForm />;
// };

// export default App;

// import React, { useState } from 'react';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import WeatherCard from './components/WeatherCard';
// import WeatherForm from './components/WeatherForm';
// import WeatherDetail from './components/WeatherDetail';

// const { Header, Content, Sider, Footer } = Layout;

// const App = () => {
//   const [selectedKey, setSelectedKey] = useState('home');
//   const [selectHeaderKey, setSelectHeaderKey] = useState('home');
//   return (
//     <Router>
//       <Layout>
//         <Header
//           style={{
//             background: '#292727',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             borderBottom: '1px solid #ccc',
//             marginBottom: '1px',

//           }}
//         >
//           <div className="demo-logo" />
//           <Menu
//             theme="dark"
//             mode="horizontal"
//             selectedKeys={[selectHeaderKey]}
//             style={{
//               flex: 1,
//               minWidth: 0,
//               background: '#292727',
//             }}
//             onSelect={({ key }) => setSelectHeaderKey(key)}
//           >
//             <Menu.Item
//               key="home"
//               style={{
//                 color: '#fff',
//                 backgroundColor:
//                   selectHeaderKey === 'home' ? '#555' : '#292727',
//               }}
//             >
//               <Link to="/">Home</Link>
//             </Menu.Item>
//             <Menu.Item
//               key="search"
//               style={{
//                 color: '#fff',
//                 backgroundColor:
//                   selectHeaderKey === 'search' ? '#555' : '#292727',
//               }}
//             >
//               <Link to="/search">Search</Link>
//             </Menu.Item>
//           </Menu>
//           <Link to="/">
//             <div
//               className="weather-app-text"
//               style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem' }}
//             >
//               Weather App{' '}
//             </div>
//           </Link>
//         </Header>

//         <Layout>
//           <Sider
//             width={200}
//             style={{
//               background: '#444',
//             }}
//           >
//             <Menu
//               mode="inline"
//               selectedKeys={[selectedKey]}
//               style={{
//                 borderRight: 0,
//                 background: '#444',
//                 color: '#fff',
//               }}
//               onSelect={({ key }) => setSelectedKey(key)}
//             >
//               <Menu.Item
//                 key="home"
//                 style={{
//                   color: '#fff',
//                   backgroundColor: selectedKey === 'home' ? '#555' : '#444',
//                 }}
//               >
//                 <Link to="/">Home</Link>
//               </Menu.Item>
//               <Menu.Item
//                 key="search"
//                 style={{
//                   color: '#fff',
//                   backgroundColor: selectedKey === 'search' ? '#555' : '#444',
//                 }}
//               >
//                 <Link to="/search">Search</Link>
//               </Menu.Item>
//             </Menu>
//           </Sider>
//           <Layout
//             style={{
//               padding: '0 24px 24px',
//             }}
//           >
//             <Breadcrumb
//               style={{
//                 margin: '16px 0',
//               }}
//             >
//               <Breadcrumb.Item>Home</Breadcrumb.Item>
//               <Breadcrumb.Item>App</Breadcrumb.Item>
//             </Breadcrumb>
//             <Content
//               style={{
//                 padding: 24,
//                 margin: 0,
//                 minHeight: 400,
//               }}
//             >
//               <Routes>
//                 <Route exact path="/" element={<Home />} />
//                 <Route path="/search" element={<Search />} />
//                 <Route path="/weather/:city" element={<WeatherDetail />} />
//               </Routes>
//             </Content>
//           </Layout>
//         </Layout>
//         <Footer
//           style={{
//             textAlign: 'center',
//             backgroundColor: '#292727',
//             color: '#fff',
//             padding: '20px',
//             position: 'fixed',
//             bottom: 0,
//             width: '100%',
//             borderTop: '1px solid #ccc',
//           }}
//         >
//           © {new Date().getFullYear()} Weather App Created by Qaisar Khan
//         </Footer>
//       </Layout>
//     </Router>
//   );
// };

// const cities = ['Islamabad', 'Karachi', 'Lahore', 'Peshawar'];

// const Home = () => {
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//       {cities.map((city, index) => (
//         <WeatherCard key={index} city={city} />
//       ))}
//     </div>
//   );
// };

// const Search = () => {
//   return <WeatherForm />;
// };

// export default App;

// import React, { useState } from 'react';
// import { Layout, Menu, Breadcrumb } from 'antd';
// import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import WeatherCard from './components/WeatherCard';
// import WeatherForm from './components/WeatherForm';
// import WeatherDetail from './components/WeatherDetail';

// const { Header, Content, Sider, Footer } = Layout;

// const App = () => {
//   const [selectedKey, setSelectedKey] = useState('home');
//   const [selectHeaderKey, setSelectHeaderKey] = useState('home');
//   return (
//     <Router>
//       <Layout style={{ minHeight: '100vh' }}>
//         <Header
//           style={{
//             background: '#292727',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             borderBottom: '1px solid #ccc',
//             marginBottom: '1px',
//             position: 'fixed',
//             width: '100%',
//             zIndex: 1000,
//           }}
//         >
//           <div className="demo-logo" />
//           <Menu
//             theme="dark"
//             mode="horizontal"
//             selectedKeys={[selectHeaderKey]}
//             style={{
//               flex: 1,
//               minWidth: 0,
//               background: '#292727',
//               borderBottom: '1px solid #ccc',
//             }}
//             onSelect={({ key }) => setSelectHeaderKey(key)}
//           >
//             <Menu.Item
//               key="home"
//               style={{
//                 color: '#fff',
//                 backgroundColor:
//                   selectHeaderKey === 'home' ? '#555' : '#292727',
//               }}
//             >
//               <Link to="/">Home</Link>
//             </Menu.Item>
//             <Menu.Item
//               key="search"
//               style={{
//                 color: '#fff',
//                 backgroundColor:
//                   selectHeaderKey === 'search' ? '#555' : '#292727',
//               }}
//             >
//               <Link to="/search">Search</Link>
//             </Menu.Item>
//           </Menu>
//           <Link to="/">
//             <div
//               className="weather-app-text"
//               style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem' }}
//             >
//               Weather App{' '}
//             </div>
//           </Link>
//         </Header>

//         <Layout style={{ marginTop: '64px' }}>
//           <Sider
//             width={200}
//             style={{
//               background: '#444',
//               height: 'calc(100vh - 64px)',
//               position: 'fixed',
//               left: 0,
//               zIndex: 100,
//             }}
//           >
//             <Menu
//               mode="inline"
//               selectedKeys={[selectedKey]}
//               style={{
//                 borderRight: 0,
//                 background: '#444',
//                 color: '#fff',
//               }}
//               onSelect={({ key }) => setSelectedKey(key)}
//             >
//               <Menu.Item
//                 key="home"
//                 style={{
//                   color: '#fff',
//                   backgroundColor: selectedKey === 'home' ? '#555' : '#444',
//                 }}
//               >
//                 <Link to="/">Home</Link>
//               </Menu.Item>
//               <Menu.Item
//                 key="search"
//                 style={{
//                   color: '#fff',
//                   backgroundColor: selectedKey === 'search' ? '#555' : '#444',
//                 }}
//               >
//                 <Link to="/search">Search</Link>
//               </Menu.Item>
//             </Menu>
//           </Sider>
//           <Layout style={{ marginLeft: '200px' }}>
//             <Content
//               style={{
//                 padding: '0 24px 24px',
//                 marginTop: '64px',
//                 overflowY: 'auto',
//                 marginBottom: '60px'
//               }}
//             >
//               <Breadcrumb
//                 style={{
//                   margin: '16px 0',
//                 }}
//               >
//                 <Breadcrumb.Item>Home</Breadcrumb.Item>
//                 <Breadcrumb.Item>App</Breadcrumb.Item>
//               </Breadcrumb>
//               <Routes>
//                 <Route exact path="/" element={<Home />} />
//                 <Route path="/search" element={<Search />} />
//                 <Route path="/weather/:city" element={<WeatherDetail />} />
//               </Routes>
//             </Content>
//           </Layout>
//         </Layout>
//         <Footer
//           style={{
//             textAlign: 'center',
//             backgroundColor: '#292727',
//             color: '#fff',
//             padding: '20px',
//             borderTop: '1px solid #ccc',
//             position: 'fixed',
//             bottom: '0px', // Adjust this value based on your sider width
//             width: '100%',
//             zIndex: 1000,
//           }}
//         >
//           © {new Date().getFullYear()} Weather App Created by Qaisar Khan
//         </Footer>
//       </Layout>
//     </Router>
//   );
// };

// const cities = ['Islamabad', 'Karachi', 'Lahore', 'Peshawar'];

// const Home = () => {
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//       {cities.map((city, index) => (
//         <WeatherCard key={index} city={city} />
//       ))}
//     </div>
//   );
// };

// const Search = () => {
//   return <WeatherForm />;
// };

// export default App;

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
          
          <Layout style={{marginLeft: '220px', marginRight: '20px'}}>
            <Content
              className='content'
            >
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
        <NotificationContainer/>
        <AppFooter />
      </Layout>
    </Router>
  );
};

const cities = ['Islamabad', 'Karachi', 'Lahore', 'Peshawar', 'kalam'];

const Home = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' , marginBottom: '80px'}}>
      {cities.map((city, index) => (
        <WeatherCard key={index} city={city}/>
      ))}
    </div>
  );
};

const Search = () => {
  return <WeatherForm allowedCities={cities}/>;
};

export default App;
