function SaleOrders() {
  return (
    <>
      <header>
        <div data-testid="customer_products__element-navbar-link-orders">
          <p>Pedidos</p>
        </div>
        <div data-testid="customer_products__element-navbar-user-full-name">
          <p>Nome</p>
        </div>
        <div data-testid="customer_products__element-navbar-link-logout">
          <p>Sair</p>
        </div>
      </header>
      <main>
        {
          [{
            delivery_number: 1,
            id: 2,
            total_price: 123.12,
            delivery_address: 'rua x',
            sale_date: '23/12/2022',
            status: 'pending',
          }].map((request, index) => (
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
                {request.sale_date}
              </p>
              <p data-testid={ `seller_orders__element-card-price-${request.id}` }>
                {request.total_price}
              </p>
              <p data-testid={ `seller_orders__element-card-address-${request.id}` }>
                {request.delivery_address}
              </p>
            </div>
          ))
        }
      </main>
    </>
  );
}

export default SaleOrders;
