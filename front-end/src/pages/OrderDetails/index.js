import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import api from '../../service/request';

export default function OrderDetails() {
  const { id: idVenda } = useParams();
  const [orders, setOrders] = useState({ products: [] });
  const salerName = 'testeq';

  async function getOrders() {
    const getStorage = JSON.parse(localStorage.getItem('user'));
    const { data } = await api.get.getSaleById(idVenda, getStorage.token);
    console.log(data);
    setOrders({ ...data });
  }
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <section>
      <NavBar />
      <h2>Detalhe do Pedido</h2>
      <div>
        <div>
          <h3
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {orders.id}
          </h3>
          <h3
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`P. Vend: ${orders.seller}`}
          </h3>
          <h3
            data-testid="Group customer_order_details__element-order-details-label-order-date"
          >
            {orders.saleDate}

          </h3>
          <h3
            data-testid={
              `customer_order_details__element-order-details-label-delivery-status${
                orders.status}`
            }
          >
            {orders.status}

          </h3>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      </div>
      <table className="score-board-table">
        <thead>
          <tr>
            <th>item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.products.map((product, index = 1) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={ `customer_order_details__element-order-table-name-${index}` }
                >
                  {product.name}

                </td>
                <td
                  data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
                >
                  {product.SalesProducts.quantity}

                </td>
                <td
                  data-testid={ `customer_order_details__element-order-table-unit-price-${index}` }
                >
                  {product.price}

                </td>
                <td
                  data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
                >
                  {product.price * product.SalesProducts.quantity}
                </td>
              </tr>))
          }
        </tbody>
      </table>
      <h1
        data-testid="customer_order_details__element-order-total-price"
      >
        {`Total: R$ ${orders.totalPrice}`}

      </h1>
    </section>
  );
}
