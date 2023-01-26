import { node } from 'prop-types';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { productsContext } from '../context';
// import api from '../service/request';

export default function changeQuantity(target) {
  const [dataProduct, setDataProduct] = useState();

  function storageProducts() {
    const { price } = dataProduct;
    const subTotal = price * quantity;
    localStorage.setItem('carrinho', JSON.stringify({
      subTotal, quantity, ...dataProduct }));
  }

  function changeQuantity(target) {
    const { title } = target;
    let value = quantity;
    if (title === 'remove' && value > 0) {
      value -= 1;
      setQuantity(value);
      // storageProducts();
    }
    if (title === 'add') {
      value += 1;
      setQuantity(value);
      // storageProducts();
    }
  }
}
