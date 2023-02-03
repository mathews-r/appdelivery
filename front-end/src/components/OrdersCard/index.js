import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import PropTypes, { string, number } from 'prop-types';
import moment from 'moment';

export default function OrdersCard({ order }) {
  const navigate = useNavigate();
  const { saleDate, id, totalPrice, status: orderStatus } = order;
  return (
    <section className="card text-center mb-3" style={ { width: '18rem' } }>
      <div
        className="card-body"
        style={ { backgroundColor: orderStatus === 'Entregue' ? '#157347' : '#FFC107' } }
      >

        <h5
          className="card-title"
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          Status:
          {' '}
          {orderStatus}
        </h5>

        <p
          className="card-text"
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          Date:
          {' '}
          {moment(saleDate).format('DD/MM/YYYY')}
        </p>

        <p
          className="card-text"
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          Total Price: R$
          {' '}
          {totalPrice.replace('.', ',')}
        </p>

        <button
          className="btn btn-primary"
          type="button"
          data-testid={ `customer_orders__element-order-id-${id}` }
          onClick={ () => navigate(`/customer/orders/${id}`) }
        >
          {`Order ${id}`}

        </button>

      </div>
    </section>
  );
}

OrdersCard.propTypes = {
  order: PropTypes.shape({
    saleDate: string,
    id: number,
    totalPrice: string,
    orderStatus: string,
  }),
}.isRequired;
