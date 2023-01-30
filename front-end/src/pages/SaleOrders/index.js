import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../context';

import api from '../../service/request';

function SaleOrders() {
  const [listSaleOrders, setListSaleOrders] = useState([]);
  const { logOut } = useContext(userContext);
  const getStorage = JSON.parse(localStorage.getItem('user'));

  const requestApi = async () => {
    const { data } = await api.get.getAllSaleOrders();
    return setListSaleOrders(data);
  };

  useEffect(() => {
    requestApi();
  }, []);

  return (
    <>
      <nav>
        <section>
          <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-orders"
          >
            <button type="button">Pedidos</button>
          </Link>

          <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            <button
              type="button"
            >
              {getStorage.name}
            </button>
          </Link>

          <Link
            to="/login"
            data-testid="customer_products__element-navbar-link-logout"
          >
            <button
              type="button"
              onClick={ logOut }
            >
              SAIR
            </button>
          </Link>
        </section>
      </nav>

      <main>
        {
          listSaleOrders.map((request, index) => (
            <div
              key={ index }
            >
              <p data-testid={ `seller_orders__element-order-id-${request.id}` }>
                {request.id}
              </p>
              <p
                data-testid={
                  `seller_orders__element-delivery-status-${request.id}`
                }
              >
                {request.status}
              </p>
              <p data-testid={ `seller_orders__element-order-date-${request.id}` }>
                {request.saleDate}
              </p>
              <p data-testid={ `seller_orders__element-card-price-${request.id}` }>
                {request.totalPrice}
              </p>
              <p data-testid={ `seller_orders__element-card-address-${request.id}` }>
                {request.deliveryAddress}
              </p>
            </div>
          ))
        }
      </main>
    </>
  );
}

export default SaleOrders;
