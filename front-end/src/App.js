import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/custome_products.js';
import SaleOrders from './pages/SaleOrders';
import SaleOrderDetail from './pages/SaleOrderDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
      <Route path="/seller/orders" element={ <SaleOrders /> } />
      <Route path="/seller/orders/:id" element={ <SaleOrderDetail /> } />
    </Routes>

  );
}

export default App;
