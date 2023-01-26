import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/custome_products.js';
import UserProvider from './provider/index';
import ProductsProvider from './provider/productsProvider';

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
          </Routes>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
