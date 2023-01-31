import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../context';

export default function NavAdmin() {
  const { logOut } = useContext(userContext);
  const getStorage = JSON.parse(localStorage.getItem('user'));

  return (
    <nav>
      <section>
        <Link
          to="/admin/manage"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <button type="button">Gerenciar Usuários</button>
        </Link>

        <h3
          data-testid="customer_products__element-navbar-user-full-name"
        >

          {getStorage.name}

        </h3>

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
  );
}
