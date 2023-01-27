import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';

export default function OrderDetails() {
  const idVenda = useParams();
  const [orders, setOrders] = useState({});

  async function getOrders() {
    const { data } = await api.get.getSalesById(idVenda);
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
            {`P. Vend: ${salerName}`}
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
                  {index}
                </td>
                <td
                  data-testid={ `customer_order_details__element-order-table-name-${index}` }
                >
                  {product.name}

                </td>
                <td
                  data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
                >
                  {product.quantity}

                </td>
                <td
                  data-testid={ `customer_order_details__element-order-table-unit-price-${index}` }
                >
                  {product.unitPrice}

                </td>
                <td
                  data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
                >
                  {product.subTotal}
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
