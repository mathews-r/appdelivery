const ordersService = require('../services/orders.service');

const getAllBySeller = async (req, res, next) => {
  try {
    const orders = await ordersService.getAllBySeller();
    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBySeller };
