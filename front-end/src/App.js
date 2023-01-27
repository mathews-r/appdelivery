import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/custome_products';
import UserProvider from './provider/index';
import ProductsProvider from './provider/productsProvider';
import './style.css';
import CustomerCheckout from './pages/CustomerCheckout';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <Routes>
            <Route path="/" element={ <Navigate to="/login" /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/customer/products" element={ <CustomerProducts /> } />
            <Route path="/customer/checkout" element={ <CustomerCheckout /> } />
          </Routes>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
