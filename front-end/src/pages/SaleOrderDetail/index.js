import moment from 'moment/moment';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../service/request';
import NavSeller from '../../components/NavBar/NavSeller';

function SaleOrderDetail() {
  const { id: idVenda } = useParams();
  const [orders, setOrders] = useState({ products: [] });
  const [select, setSelect] = useState();

  const { seller, totalPrice } = orders;

  async function getOrders() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const { data } = await api.get.getSaleById(idVenda, token);
    setSelect(data.status);
    setOrders({ ...data });
  }

  const updateStatus = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    if (select) {
      await api.put.updateStatus(token, select, idVenda);
    }
  };

  useEffect(() => updateStatus(), [select]);

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <NavSeller />
      <h2 className="text-center">Order Details</h2>
      <div className="card border-warning mb-3">
        <div className="card-header">
          <h4 data-testid="seller_order_details__element-order-details-label-order-id">
            Order Number
            {' '}
            {orders.id}
          </h4>
        </div>

        <div className="card-body">
          <h5
            className="card-title"
            data-testid="seller_order_details__element-order-details-label-seller-name"
          >
            Seller:
            {' '}
            {`P. Vend: ${seller && seller.name}`}
          </h5>
          <h5
            data-testid={
              'seller_order_details__'
              + 'element-order-details-label-order-date'
            }
          >
            Date:
            {' '}
            {moment(orders.saleDate).format('DD/MM/YYYY')}
          </h5>

          <h5
            data-testid={
              'seller_order_details__element-order'
                + '-details-label-delivery-status'
            }
          >
            Status:
            {' '}
            {select && (select || 'Pendente')}
          </h5>

        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.products.map((product, index = 1) => (
            <tr key={ index }>
              <td
                data-testid={
                  `seller_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `seller_order_details__element-order-table-name-${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${index}`
                }
              >
                {product.SalesProducts.quantity}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${index}`
                }
              >
                R$
                {' '}
                {product.price}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${index}`
                }
              >
                R$
                {' '}
                {(
                  parseFloat(product.price) * product.SalesProducts.quantity
                ).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p data-testid="seller_order_details__element-order-total-price">
          Total Price: R$
          {totalPrice && totalPrice.replace('.', ',')}
        </p>
      </div>
      <button
        type="button"
        className="btn btn-warning"
        data-testid="seller_order_details__button-preparing-check"
        disabled={ select !== 'Pendente' }
        onClick={ () => setSelect('Preparando') }
      >
        Preparar pedido
      </button>

      <button
        className="btn btn-success"
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        disabled={ select !== 'Preparando' }
        onClick={ () => setSelect('Em Trânsito') }
      >
        Saiu para entrega
      </button>
    </>
  );
}

export default SaleOrderDetail;
