import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import JewelryDesignStudioHomepage from './pages/jewelry-design-studio-homepage';
import { ProductListing } from './pages/ProductListing';
import { ProductDetail } from './pages/ProductDetail';
import { Admin } from './pages/Admin';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<JewelryDesignStudioHomepage />} />
        <Route path="/products" element={<ProductListing/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;