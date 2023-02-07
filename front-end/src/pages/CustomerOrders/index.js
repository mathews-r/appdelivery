import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import OrdersCard from '../../components/OrdersCard';
import api from '../../services/request';

export default function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const getStorage = JSON.parse(localStorage.getItem('user'));
    const { data } = await api.get.getSales(getStorage.token);
    setOrders([...data] || []);
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="d-flex flex-wrap card-group-w-60 justify-content-center gap-3 m-10">
        {
          orders.map((order, index) => (<OrdersCard
            key={ index }
            order={ order }
          />))
        }
      </div>
    </div>
  );
}
