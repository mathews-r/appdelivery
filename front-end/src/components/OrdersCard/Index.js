import React from 'react';

export default function ordersCard() {
  return (
    <div>
      <div data-testid={ `customer_orders__element-order-id-${id}` }>
        {
          orderId
        }
      </div>

      <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
        {status1}
      </div>

      <div>
        <h2 data-testid={ `customer_orders__element-order-date-${id}` }>
          {data}
        </h2>
        <h2 data-testid={ `customer_orders__element-card-price-${id}` }>
          {total}
        </h2>
      </div>
    </div>
  );
}
