import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import api from '../../service/request';

export default function CustomerCheckout() {
  const navigate = useNavigate();
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
    const { id } = sellers.find((item) => item.role === 'seller');
    const newSale = {
      sellerId: id,
      products: cartProducts,
      deliveryAddress: address,
      deliveryNumber: number,
    };
    const { token } = JSON.parse(localStorage.getItem('user'));
    const { data } = await api.post.createSale(token, newSale);
    navigate(`/customer/orders/${data.id}`);
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

      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Sub Total</th>
            <th>Remove Item</th>
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
                  className="btn btn-warning"
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

      <div>
        <p data-testid="customer_checkout__element-order-total-price">
          Total: R$
          {total}
        </p>
      </div>
      <div>
        <h2>Details and Address to Delivery</h2>

        <form className="form">

          <select
            className="form-select-sm"
            aria-label="Default select example"
            data-testid="customer_checkout__select-seller"
            value={ select }
            onChange={ (e) => setSelect(e.target.value) }
          >
            {sellers.map((item, index) => (
              <option key={ index }>
                Seller:
                {' '}
                {item.name}
              </option>
            ))}
          </select>

          <div>

            <label className="form-label" htmlFor="address">
              Delivery Address
              <input
                className="form-control"
                data-testid="customer_checkout__input-address"
                type="text"
                id="address"
                value={ address }
                onChange={ (e) => setAddress(e.target.value) }
              />
            </label>
          </div>

          <div>

            <label className="form-label" htmlFor="number">
              Delivery Number
              <input
                className="form-control"
                data-testid="customer_checkout__input-address-number"
                type="number"
                id="number"
                value={ number }
                onChange={ (e) => setNumber(e.target.value) }
              />
            </label>
          </div>

          <button
            className="btn btn-success"
            data-testid="customer_checkout__button-submit-order"
            type="button"
            onClick={ () => submitSale() }
          >
            Finish Order

          </button>

        </form>
      </div>
    </div>
  );
}
