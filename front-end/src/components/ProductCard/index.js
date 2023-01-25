export default function ProductCard() {
  return (
    <section>
      <div>
        <h2
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {`R$ ${price}`}
        </h2>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ url_image }
          alt=""
        />
      </div>
      <h2 data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </h2>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quatity }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </div>
    </section>
  );
}
