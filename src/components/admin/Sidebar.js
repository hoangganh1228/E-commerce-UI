// src/components/admin/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    {
      path: '/admin/dashboard',
      icon: 'fa fa-tachometer-alt',
      label: 'Dashboard'
    },
    {
      path: '/admin/products',
      icon: 'fa fa-box',
      label: 'Products'
    },
    {
      path: '/admin/orders',
      icon: 'fa fa-shopping-cart',
      label: 'Orders'
    },
    {
      path: '/admin/users',
      icon: 'fa fa-users',
      label: 'Users'
    },
    {
      path: '/admin/settings',
      icon: 'fa fa-cog',
      label: 'Settings'
    }
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="sidebar-overlay d-lg-none" 
          onClick={onClose}
        ></div>
      )}
      
      <div className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/admin/dashboard" className="sidebar-brand">
            <h4>Furni Admin</h4>
          </Link>
          <button 
            className="sidebar-close d-lg-none"
            onClick={onClose}
          >
            <i className="fa fa-times"></i>
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path}
                  className={`nav-link ${isActiveLink(item.path) ? 'active' : ''}`}
                  onClick={onClose}
                >
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="nav-link">
            <i className="fa fa-external-link-alt"></i>
            <span>Visit Store</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;