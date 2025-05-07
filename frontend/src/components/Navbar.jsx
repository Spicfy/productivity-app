import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import BeautifulButton from './BeautifulButton';

// You can import these from your icon library, e.g. react-icons or lucide-react
// This is just a placeholder to show structure
const DashboardIcon = () => <span style={{ fontSize: '20px', marginRight: '8px' }}>📊</span>;
const NotificationIcon = () => <span style={{ fontSize: '20px' }}>🔔</span>;
const UserIcon = () => <span>👤</span>;

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('John D.');
  const [notifications, setNotifications] = useState(0);

  const handleAuth = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="nav">
      <h1>
        <span className="icon"><DashboardIcon /></span>
        <span>Dashboard</span>
      </h1>

      <div className="auth">
        {isAuthenticated && (
          <>
            <div className="user-info">
              <div className="user-avatar">
                <UserIcon />
              </div>
              <span className="user-name">{userName}</span>
            </div>
            <div className="nav-actions">
              <div className="notification-icon">
                <NotificationIcon />
                {notifications > 0 && <span className="notification-badge">{notifications}</span>}
              </div>
            </div>
          </>
        )}
        <BeautifulButton onClick={handleAuth} text={isAuthenticated ? "Logout" : "Login"} />
      </div>
    </div>
  );
};

export default Navbar;