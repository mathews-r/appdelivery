import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import api from '../../service/request';

export default function CustomerCheckout() {
  const [cartProducts, setCartProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [select, setSelect] = useState('');
  const [number, setNumber] = useState('');
  const [total, setTotal] = useState([]);

  const handleTotal = (storage) => {
    const totalPrice = storage.reduce((acc, curr) => acc + curr.subTotal, 0);
    setTotal(totalPrice.toFixed(2).replace('.', ','));
  };

  const getAllSellers = async () => {
    const { data } = await api.get.getAllUsers();
    const filterSellers = data.filter((person) => person.role === 'seller');
    setSellers(filterSellers);
  };

  const handleRemove = (id) => {
    const filterProduct = cartProducts.filter((product) => product.id !== id);
    localStorage.setItem('carrinho', JSON.stringify([...filterProduct]));
    setCartProducts(filterProduct);
    handleTotal(filterProduct);
  };

  const submitSale = async () => {
    console.log(select);
    const { id } = sellers.find((item) => item.name === select);
    const newSale = {
      sellerId: id,
      products: cartProducts,
      deliveryAddress: address,
      deliveryNumber: number,
    };
    await api.post.createSale({
      newSale,
    });
    console.log(newSale);
  };

  useEffect(() => {
    const storage = (JSON.parse(localStorage.getItem('carrinho')));
    setCartProducts(storage);
    handleTotal(storage);
    getAllSellers();
  }, []);

  return (
    <div>
      <NavBar />

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
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
                {item.unitPrice}
              </td>

              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {item.subTotal.toFixed(2).replace('.', ',')}
              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              >
                <button
                  onClick={ () => handleRemove(item.id) }
                  type="button"
                >
                  Remover

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Total:</p>
        <p data-testid="customer_checkout__element-order-total-price">
          {total}
        </p>
      </div>
      <div>
        <h2>Detalhes e endereço para a entrega</h2>
        <select
          data-testid="customer_checkout__select-seller"
          value={ select }
          onChange={ (e) => setSelect(e.target.value) }

        >
          {sellers.map((item, index) => (
            <option key={ index }>
              {item.name}
            </option>
          ))}
        </select>

        <label htmlFor="address">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            id="address"
            value={ address }
            onChange={ (e) => setAddress(e.target.value) }
          />
        </label>

        <label htmlFor="number">
          Numero
          <input
            data-testid="customer_checkout__input-address-number"
            type="number"
            id="number"
            value={ number }
            onChange={ (e) => setNumber(e.target.value) }
          />
        </label>

        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ () => submitSale() }
        >
          Finalizar Pedido

        </button>
      </div>
    </div>
  );
}
