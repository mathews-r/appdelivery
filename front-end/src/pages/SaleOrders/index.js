import React, { useEffect, useState } from 'react';
import SaleOrdersCard from '../../components/SaleOrdersCard';
import api from '../../service/request';
import NavSeller from '../../components/NavBar/NavSeller';

export default function SaleOrders() {
  const [listSaleOrders, setListSaleOrders] = useState([]);

  const requestApi = async () => {
    const { data } = await api.get.getAllSaleOrders();
    return setListSaleOrders(data);
  };

  useEffect(() => {
    requestApi();
  }, []);

  return (
    <>
      <NavSeller />
      {
        listSaleOrders.map((order, index) => (<SaleOrdersCard
          key={ index }
          order={ order }
        />))
      }

    </>
  );
}
