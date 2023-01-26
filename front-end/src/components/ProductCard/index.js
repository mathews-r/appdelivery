import { string, number } from 'prop-types';

export default function ProductCard({ id, name, image, price }) {
  return (
    <section>
      <div>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ image }
          alt=""
        />
        <h2
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {`R$ ${price}`}
        </h2>

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
          value="0"
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

ProductCard.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  image: string.isRequired,
  price: string.isRequired,
};
