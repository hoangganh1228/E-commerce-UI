// src/layouts/AdminLayout.js
import React, { useState } from 'react';
import Sidebar from '../components/admin/Sidebar';
import TopBar from '../components/admin/TopBar';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="admin-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className={`admin-main ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <TopBar onToggleSidebar={toggleSidebar} />
        <main className="admin-content">
          <div className="container-fluid">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;