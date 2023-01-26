/* eslint-disable react-hooks/exhaustive-deps */
import { node } from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { productsContext } from '../context';
// import api from '../service/request';

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
