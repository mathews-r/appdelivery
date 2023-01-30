import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import UserProvider from './provider/index';
import ProductsProvider from './provider/productsProvider';

import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/custome_products';
import CustomerOrders from './pages/CustomerOrders';
import OrderDetails from './pages/OrderDetails';
import CustomerCheckout from './pages/CustomerCheckout';
import SaleOrders from './pages/SaleOrders';
import SaleOrderDetail from './pages/SaleOrderDetail';

import './style.css';

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
            <Route path="/seller/orders" element={ <SaleOrders /> } />
            <Route path="/seller/orders/:id" element={ <SaleOrderDetail /> } />
            <Route path="/customer/orders" element={ <CustomerOrders /> } />
            <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
          </Routes>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
