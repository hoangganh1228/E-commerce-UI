// src/components/admin/TopBar.js
import React, { useState } from 'react';

const TopBar = ({ onToggleSidebar }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    window.location.href = '/';
  };

  return (
    <div className="admin-topbar">
      <div className="topbar-left">
        <button 
          className="sidebar-toggle"
          onClick={onToggleSidebar}
        >
          <i className="fa fa-bars"></i>
        </button>
        
        <div className="breadcrumb">
          <span>Admin Panel</span>
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-item">
          <button className="notification-btn">
            <i className="fa fa-bell"></i>
            <span className="notification-badge">3</span>
          </button>
        </div>

        <div className="topbar-item user-menu">
          <button 
            className="user-btn"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <img 
              src="/images/admin/icons/user-avatar.png" 
              alt="Admin" 
              className="user-avatar"
            />
            <span className="user-name">Admin</span>
            <i className="fa fa-chevron-down"></i>
          </button>

          {showUserMenu && (
            <div className="user-dropdown">
              <a href="#" className="dropdown-item">
                <i className="fa fa-user"></i>
                Profile
              </a>
              <a href="#" className="dropdown-item">
                <i className="fa fa-cog"></i>
                Settings
              </a>
              <div className="dropdown-divider"></div>
              <button 
                className="dropdown-item"
                onClick={handleLogout}
              >
                <i className="fa fa-sign-out-alt"></i>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;