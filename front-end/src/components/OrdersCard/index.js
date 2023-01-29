import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { string, number } from 'prop-types';

export default function OrdersCard({ order }) {
  const { saleDate, id, totalPrice, status: orderStatus } = order;
  return (
    <section>
      <Link
        to={ `${id}` }
      >
        <div data-testid={ `customer_orders__element-order-id-${id}` }>
          {
            `Pedido ${id}`
          }
        </div>

        <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
          {orderStatus}
        </div>

        <div>
          <h2 data-testid={ `customer_orders__element-order-date-${id}` }>
            {saleDate}
          </h2>
          <h2 data-testid={ `customer_orders__element-card-price-${id}` }>
            {totalPrice}
          </h2>
        </div>
      </Link>
    </section>
  );
}

OrdersCard.propTypes = ({
  order: PropTypes.shape({
    saleDate: string,
    id: number,
    totalPrice: string,
    orderStatus: string,
  }),
}).isRequired;
