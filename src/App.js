import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar ,Exchanges,Homepage,Cryptocurrencies,CryptoDetails,News } from './components';
import './components/App.css';
const App = () => {
  return (
    <div classname="app">
      <div classname="navbar">
        <Navbar />
      </div>
      <div className='main'>
      <Layout>
        <div className='routes'>
          <Routes>
            <Route exact path="/" Component={Homepage} />            
            <Route exact path="/exchanges" Component={Exchanges}/>             
            <Route exact path="/cryptocurrencies" Component={Cryptocurrencies}/>             
            <Route exact path="/crypto/:coinId" Component={CryptoDetails}/>
            <Route exact path="/news" Component={News} />
          </Routes>
        </div>
      </Layout>
      
      <div className='footer'  >
      <Typography.Title  level={5} style={{color:'white', textAlign:'center'}}>
        Cryptoverse <br/>
        All Rights Reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
      </div>
    </div>
    </div>
  )
}

export default App