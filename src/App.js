import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/client/style.scss';

// Layout
import ClientLayout from './layout/ClientLayout';

// Pages
import Home from './pages/client/Home';
import Shop from './pages/client/Shop';
import About from './pages/client/About';
import Blog from './pages/client/Blog';
import Services from './pages/client/Service';
import Contact from './pages/client/Contact';
import Cart from './pages/client/Cart';

// Route config
const clientRoutes = [
  { path: '/', component: <Home /> },
  { path: '/shop', component: <Shop /> },
  { path: '/about', component: <About /> },
  { path: '/services', component: <Services /> },
  { path: '/blog', component: <Blog /> },
  { path: '/contact', component: <Contact /> },
  { path: '/cart', component: <Cart /> },
];

function App() {
  return (
    <Router>
      <Routes>
        {clientRoutes.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={<ClientLayout>{component}</ClientLayout>}
          />
        ))}

        {/* Catch all - 404 */}
        <Route
          path="*"
          element={
            <ClientLayout>
              <div className="container py-5 text-center">
                <h1>404 - Page Not Found</h1>
                <a href="/" className="btn btn-primary mt-3">Go Home</a>
              </div>
            </ClientLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
