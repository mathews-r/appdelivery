import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { string, number } from 'prop-types';
import moment from 'moment';

export default function SaleOrdersCard({ order }) {
  const { saleDate, id, totalPrice, status: orderStatus, deliveryAddress } = order;
  return (
    <section className="card text-center mb-3" style={ { width: '18rem' } }>
      <div className="card-body">
        <h5
          className="card-title"
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          Status:
          {' '}
          {orderStatus}
        </h5>

        <p
          className="card-text"
          data-testid={ `seller_orders__element-order-date-${id}` }
        >
          Date:
          {' '}
          {moment(saleDate).format('DD/MM/YYYY')}
        </p>

        <p
          className="card-text"
          data-testid={ `seller_orders__element-card-price-${id}` }
        >
          Total Price: R$
          {totalPrice}
        </p>

        <p data-testid={ `seller_orders__element-card-address-${id}` }>
          Address Delivery:
          {' '}
          {deliveryAddress}
        </p>

        <Link
          to={ `${id}` }
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid={ `seller_orders__element-order-id-${id}` }
          >
            {
              `Order n° ${id}`
            }
          </button>
        </Link>

      </div>
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
