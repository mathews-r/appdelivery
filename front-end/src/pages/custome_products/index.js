import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';
import api from '../../service/request';

function CustomerProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState();
  const [isActive, setIsActive] = useState(true);

  async function loadProducts() {
    await api.get.getAllProducts().then(({ data }) => {
      setProducts(data);
    });
  }

  const getTotal = (storage) => {
    if (storage) {
      const totalPrice = storage.reduce((acc, curr) => acc + curr.subTotal, 0);
      setTotal(totalPrice);
    }
    return 0;
  };

  const handleCard = (storage) => {
    getTotal(storage);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    handleCard(JSON.parse(localStorage.getItem('carrinho')));
  }, []);

  return (
    <main>
      <NavBar />

      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ isActive }
        onClick={ () => navigate('/customer/checkout') }
      >
        <p>Ver carrinho: R$</p>
        <p data-testid="customer_products__checkout-bottom-value">
          {`${total ? total.toFixed(2).replace('.', ',') : 0}`}
        </p>
      </button>
      <section>
        <ul>
          {products.map((item, index) => (
            <li key={ index }>
              <ProductCard
                id={ item.id }
                image={ item.url_image }
                name={ item.name }
                price={ item.price.replace('.', ',') }
                handleCard={ (e) => handleCard(e) }
                setIsActive={ () => setIsActive() }
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
export default CustomerProducts;
