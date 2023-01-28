import PropTypes, { string, number } from 'prop-types';
import { useState, useEffect } from 'react';

export default function ProductCard({ id, name, image, price, handleCard, setIsActive }) {
  const [quantity, setQuantity] = useState(0);

  const updateLocalStorage = (newQuantity) => {
    const arrCart = JSON.parse(localStorage.getItem('carrinho'));
    const arrCartPrepared = arrCart.filter((item) => item.id !== id);
    const newItem = {
      id,
      name,
      quantity: newQuantity,
      unitPrice: price,
      subTotal: parseFloat(price.replace(',', '.')) * newQuantity,
    };
    localStorage.setItem('carrinho', JSON.stringify([...arrCartPrepared, newItem]));
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateLocalStorage(newQuantity);
    setIsActive(false);
    handleCard(JSON.parse(localStorage.getItem('carrinho')));
  };

  const decreaseQuantity = () => {
    const newQuantity = quantity - 1;
    if (newQuantity < 0) return setQuantity(0);
    setQuantity(newQuantity);
    updateLocalStorage(newQuantity);

    handleCard(JSON.parse(localStorage.getItem('carrinho')));
  };

  const inputQuantity = ({ value }) => {
    if (value < 0) return setQuantity(0);
    setQuantity(value);
    updateLocalStorage(value);

    handleCard(JSON.parse(localStorage.getItem('carrinho')));
  };

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
          onClick={ () => decreaseQuantity() }
        >
          -
        </button>
        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantity }
          title="inputQuantity"
          onChange={ (e) => inputQuantity(e.target) }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          title="add"
          onClick={ () => increaseQuantity() }
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
  handleCard: PropTypes.func.isRequired,
  setIsActive: PropTypes.func.isRequired,
};
