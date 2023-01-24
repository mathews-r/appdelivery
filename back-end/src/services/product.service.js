const { Product } = require('../database/models');

const getProducts = async () => {
  const products = await Product.findAll();
  return products;
};

const getProductById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

module.exports = { getProducts, getProductById };
