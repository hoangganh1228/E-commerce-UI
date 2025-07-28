import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/client/style.scss'; // Đảm bảo file này tồn tại và đúng cú pháp

// Layout
import ClientLayout from './layout/ClientLayout';

// Pages
import Home from './pages/client/Home';
import Shop from './pages/client/Shop';
import About from './pages/client/About';
import Blog from './pages/client/Blog';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <ClientLayout>
            <Home />
          </ClientLayout>
        } />
        <Route path="/shop" element={
          <ClientLayout>
            <Shop />
          </ClientLayout>
        } />
        <Route path="/about" element={
          <ClientLayout>
            <About />
          </ClientLayout>
        } />
        <Route path="/blog" element={
          <ClientLayout>
            <Blog />
          </ClientLayout>
        } />
        
        {/* Catch all - 404 */}
        <Route path="*" element={
          <ClientLayout>
            <div className="container py-5 text-center">
              <h1>404 - Page Not Found</h1>
              <a href="/" className="btn btn-primary mt-3">Go Home</a>
            </div>
          </ClientLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
