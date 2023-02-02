import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../context';

export default function NavSeller() {
  const { logOut } = useContext(userContext);
  const getStorage = JSON.parse(localStorage.getItem('user'));

  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <h5
            data-testid="customer_products__element-navbar-user-full-name"
          >

            {getStorage.name}

          </h5>
        </li>

        <li className="nav-item">
          <Link
            to="/seller/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            <button className="navbar-toggler" type="button">Pedidos</button>
          </Link>
        </li>

        <li className="nav-item">
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
        </li>
      </ul>
    </nav>
  );
}
