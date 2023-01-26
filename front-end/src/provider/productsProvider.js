import { node } from 'prop-types';
import { useMemo } from 'react';
import { productsContext } from '../context';

export default function ProductsProvider({ children }) {
  function storageProducts() {
    console.log('adfasd');
  }

  const context = useMemo(() => ({
    storageProducts,
  }), [storageProducts]);

  return (
    <productsContext.Provider value={ context }>
      {children}
    </productsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: node.isRequired,
};
