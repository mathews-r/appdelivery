const { Sale } = require('../database/models');
const { getProductById } = require('./product.service');
const { newSaleProduct } = require('./salesProducts.service');

const totalPrice = async (products) => {
  const totalPerProduct = products.map(async (product) => {
    const { price } = await getProductById(product.id);
    return price * product.quantity;
  });

  const total = await Promise.all(totalPerProduct);
  return total.reduce((acc, curr) => acc + curr, 0);
};

const newSale = async (body) => {
  const { id } = body.user;
  const { products } = body;

  const sale = await Sale.create({
    userId: id,
    sellerId: body.sellerId,
    deliveryAddress: body.deliveryAddress,
    deliveryNumber: body.deliveryNumber,
    totalPrice: await totalPrice(products),
    status: 'Pendente',
  });

  await newSaleProduct(sale.id, products);

  return sale;
};

module.exports = { newSale };
