const { User, Sale, Product } = require('../database/models');
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
  const { user, sellerId, deliveryAddress, deliveryNumber, products } = body;
  const sale = await Sale.create({
    userId: user.id,
    sellerId,
    deliveryAddress,
    deliveryNumber,
    totalPrice: await totalPrice(products),
    status: 'Pendente',
  });

  await newSaleProduct(sale.id, products);

  return sale;
};

const getAllSalesByUser = async (userId) => {
  const sale = await Sale.findAll({ where: { userId } });
  return sale;
};

const getSaleById = async (saleId) => {
  const sale = await Sale.findByPk(saleId, { include: [
    { model: User, as: 'seller', attributes: ['name'] },
    { model: Product, as: 'products', attributes: ['id', 'name', 'price'] },
  ] });

  if (!sale) {
    const throwError = { status: 404, message: 'Sale not found' };
    throw throwError;
  }

  return sale;
};

const updateStatusSale = async (id, status) => {
  const sale = await getSaleById(id);

  if (!sale) {
    const throwError = { status: 404, message: 'Sale not found' };
    throw throwError;
  }

  const [saleUpdated] = await Sale.update({ status }, { where: { id } });

  return saleUpdated;
};

module.exports = { newSale, getAllSalesByUser, getSaleById, updateStatusSale };
