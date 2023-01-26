import { string, number } from 'prop-types';
import { useState, useEffect } from 'react';

export default function ProductCard({ id, name, image, price }) {
  const [quantity, setQuantity] = useState(0);

  const findBeer = (array) => {
    const beer = array.filter((bebida) => bebida.id !== id);
    return beer;
  };

  function changeQuantity({ title }) {
    let value = quantity;

    if (title.includes('remove') && value > 0) {
      value -= 1;

      const localStor = JSON.parse(localStorage.getItem('carrinho'));
      const beer = findBeer(localStor);

      const teste = {
        id,
        name,
        quantity: value,
        unitPrice: price,
        subTotal: parseFloat(price.replace(',', '.')) * value,
      };
      localStorage.setItem('carrinho', JSON.stringify([...beer, teste]));
      setQuantity(value);
    }

    if (title.includes('remove') && value === 0) {
      const localStor = JSON.parse(localStorage.getItem('carrinho'));
      const beer = findBeer(localStor);
      console.log(beer);
      localStorage.setItem('carrinho', JSON.stringify(beer));
    }

    if (title.includes('add')) {
      value += 1;
      const teste = {
        id,
        name,
        quantity: value,
        unitPrice: price,
        subTotal: parseFloat(price.replace(',', '.')) * value,
      };
      const localStor = JSON.parse(localStorage.getItem('carrinho'));
      const beer = findBeer(localStor);

      localStorage.setItem('carrinho', JSON.stringify([...beer, teste]));
      setQuantity(value);
    }
  }

  useEffect(() => { localStorage.setItem('carrinho', JSON.stringify([])); }, []);

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
        {name}
      </h2>

      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          title="remove"
          onClick={ (e) => changeQuantity(e.target) }
        >
          -
        </button>
        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantity }
          onChange={ (e) => setQuantity(e.target.value) }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          title="add"
          onClick={ (e) => changeQuantity(e.target) }
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
