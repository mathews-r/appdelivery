import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { string, number } from 'prop-types';

export default function SaleOrdersCard({ order }) {
  const { saleDate, id, totalPrice, status: orderStatus, deliveryAddress } = order;
  return (
    <section>
      <Link
        to={ `${id}` }
      >
        <div data-testid={ `seller_orders__element-order-id-${id}` }>
          {
            `Pedido ${id}`
          }
        </div>

        <div data-testid={ `seller_orders__element-delivery-status-${id}` }>
          {orderStatus}
        </div>

        <div>
          <h2 data-testid={ `seller_orders__element-order-date-${id}` }>
            {saleDate}
          </h2>
          <h2 data-testid={ `seller_orders__element-card-price-${id}` }>
            {totalPrice}
          </h2>
        </div>

        <div>
          <h2 data-testid={ `seller_orders__element-card-address-${id}` }>
            {deliveryAddress}
          </h2>
        </div>
      </Link>
    </section>
  );
}

SaleOrdersCard.propTypes = ({
  order: PropTypes.shape({
    saleDate: string,
    id: number,
    totalPrice: string,
    orderStatus: string,
  }),
}).isRequired;
