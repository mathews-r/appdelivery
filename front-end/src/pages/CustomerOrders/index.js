import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import OrdersCard from '../../components/OrdersCard';
import api from '../../service/request';

export default function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    // const getStorage = JSON.parse(localStorage.getItem('user'));
    const { data } = await api.get.getSales();
    setOrders([...data] || []);
  }
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div>
      <NavBar />
      {
        orders.map((order, index) => <OrdersCard key={ index } order={ order } />)
      }
    </div>
  );
}
