export default function CustomerCheckout() {
  return (
    <table className="table w-50">
      <thead className="text-center">
        <tr>
          <th>Item</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Sub Total</th>
          <th>Remove Item</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {cartProducts && cartProducts.map((item, index) => (
          <tr key={ item.id }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>

            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {item.name}
            </td>

            <td
              data-testid={
                `customer_checkout__element-order-table-quantity-${index}`
              }
            >
              {item.quantity}
            </td>

            <td
              data-testid={
                `customer_checkout__element-order-table-unit-price-${index}`
              }
            >
              R$
              {' '}
              {item.unitPrice}
            </td>

            <td
              data-testid={
                `customer_checkout__element-order-table-sub-total-${index}`
              }
            >
              R$
              {' '}
              {item.subTotal.toFixed(2).replace('.', ',')}
            </td>

            <td
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              <button
                className="btn btn-danger"
                onClick={ () => handleRemove(item.id) }
                type="button"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
