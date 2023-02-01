import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../context';

export default function NavBar() {
  const { logOut } = useContext(userContext);
  const getStorage = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <section className="container-fluid">

        <p data-testid="customer_products__element-navbar-user-full-name">
          {getStorage.name}
        </p>

        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          <button className="navbar-toggler" type="button">PRODUTOS</button>
        </Link>

        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <button className="navbar-toggler" type="button">MEUS PEDIDOS</button>
        </Link>

        <Link
          to="/login"
          data-testid="customer_products__element-navbar-link-logout"
        >
          <button
            className="navbar-toggler"
            type="button"
            onClick={ logOut }
          >
            SAIR
          </button>
        </Link>
      </section>
    </nav>
  );
}
