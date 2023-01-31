import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import UserProvider from './provider/index';
import ProductsProvider from './provider/productsProvider';

import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import CustomerOrders from './pages/CustomerOrders';
import OrderDetails from './pages/OrderDetails';
import CustomerCheckout from './pages/CustomerCheckout';
import SaleOrders from './pages/SaleOrders';
import SaleOrderDetail from './pages/SaleOrderDetail';
import AdminManage from './pages/Admin';
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
            <Route path="/admin/manage" element={ <AdminManage /> } />
          </Routes>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
