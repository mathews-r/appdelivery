import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <section>
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          <button type="button">PRODUTOS</button>
        </Link>

        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <button type="button">MEUS PEDIDOS</button>
        </Link>

        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          <button type="button">nome do usuario</button>
        </Link>

        <Link
          to="/login"
          data-testid="customer_products__element-navbar-link-logout"
        >
          <button type="button">SAIR</button>
        </Link>
      </section>
    </nav>
  );
}
