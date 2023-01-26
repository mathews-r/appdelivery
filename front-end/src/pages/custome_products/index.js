import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';
import api from '../../service/request';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState();
  const [localS, setLocalS] = useState(0);

  async function loadProducts() {
    await api.get.getAllProducts()
      .then(({ data }) => {
        setProducts(data);
      });
  }

  const getTotal = () => {
    const localStor = JSON.parse(localStorage.getItem('carrinho'));
    if (localStor.length) {
      setLocalS(localStor);
      const totalPrice = localStor.reduce((acc, curr) => acc + curr.subTotal, 0);
      setTotal(totalPrice);
      console.log(totalPrice);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    getTotal();
  }, [localS]);

  return (
    <main>
      <NavBar />

      <section>
        <ul>
          {
            products.map((item, index) => (
              <li key={ index }>
                <ProductCard
                  id={ item.id }
                  image={ item.url_image }
                  name={ item.name }
                  price={ item.price.replace('.', ',') }
                />
              </li>
            ))
          }
        </ul>
        <button type="button">{`Ver carrinho: R$ ${total}`}</button>
      </section>
    </main>
  );
}
export default CustomerProducts;
