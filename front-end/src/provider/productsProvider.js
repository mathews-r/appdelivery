import { node } from 'prop-types';
import { useMemo } from 'react';
import { productsContext } from '../context';

export default function ProductsProvider({ children }) {
  function getTotal() {
    const totalPrice = localStor.reduce((acc, curr) => acc + curr.subTotal, 0);
    return totalPrice;
  }

  const context = useMemo(() => ({
    getTotal,
  }), []);

  return (
    <productsContext.Provider value={ context }>
      {children}
    </productsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: node.isRequired,
};
