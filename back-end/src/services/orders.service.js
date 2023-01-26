const { Sale } = require('../database/models');

const getAllBySeller = async () => {
  const orders = await Sale.findAll();
  return orders;
};

module.exports = { getAllBySeller };
