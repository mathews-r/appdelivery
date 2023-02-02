import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../context';

export default function NavBar() {
  const { logOut } = useContext(userContext);
  const getStorage = JSON.parse(localStorage.getItem('user'));

  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <h5 data-testid="customer_products__element-navbar-user-full-name">
            {getStorage.name}
          </h5>
        </li>
        <li className="nav-item">
          <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
          >
            <button type="button" className="navbar-toggler" aria-current="page">
              PRODUCTS
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/customer/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            <button type="button" className="navbar-toggler" aria-current="page">
              ORDERS
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/login"
            data-testid="customer_products__element-navbar-link-logout"
          >
            <button className="navbar-toggler" type="button" onClick={ logOut }>
              LOGOUT
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
