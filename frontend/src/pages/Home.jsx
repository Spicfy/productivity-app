import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import './Home.css';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="main-content">
          {/* Your page content goes here */}
          <div className="content-wrapper">
           
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;