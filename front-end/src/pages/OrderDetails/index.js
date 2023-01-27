import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';

export default function OrderDetails() {
  const idVenda = useParams();
  console.log(idVenda);
  return (
    <section>
      <NavBar />
      <h2>Detalhe do Pedido</h2>
      <div>
        <div>
          <h3
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {idPedido}
          </h3>
          <h3
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`P. Vend: ${saler}`}
          </h3>
          <h3
            data-testid="Group customer_order_details__element-order-details-label-order-date"
          >
            {date}

          </h3>
          <h3
            data-testid={ `customer_order_details__element-order-details-label-delivery-status${status1}` }
          >
            {status1}

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
          {/* <tr key={ index }>
              <td
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                {item}
              </td>
              <td
                data-testid={ `customer_order_details__element-order-table-name-${index}` }
              >
                {descricao}

              </td>
              <td
                data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
              >
                {quantidade}

              </td>
              <td
                data-testid={ `customer_order_details__element-order-table-unit-price-${index}` }
              >
                {v.unitario}

              </td>
              <td
                data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
              >
                {sub - total}
              </td>
            </tr> */}
        </tbody>
      </table>
      <h1
        data-testid="customer_order_details__element-order-total-price"
      >
        {`Total: R$ ${total}`}

      </h1>
    </section>
  );
}
