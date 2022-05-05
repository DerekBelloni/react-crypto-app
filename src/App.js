import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
        <div className="main">
          <div className="footer"></div>
        </div>
      </div>
    </div>
  )
}

export default App