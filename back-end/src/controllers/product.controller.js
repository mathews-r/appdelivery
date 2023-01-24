const productService = require('../services/product.service');

const getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProducts();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await productService.getProductById(id);
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, getProductById };
