import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';
import api from '../../service/request';

function CustomerProducts() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    await api.get.getAllProducts()
      .then(({ data }) => {
        console.log(data);
        setProducts(data);
      });
  }
  useEffect(() => {
    loadProducts();
  }, []);
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
      </section>
    </main>
  );
}
export default CustomerProducts;
