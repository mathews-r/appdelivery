const saleService = require('../services/sale.service');

const newSale = async (req, res, next) => {
  try {
    const sale = await saleService.newSale(req.body);
    return res.status(201).json(sale);
  } catch (error) {
    next(error);
  }
};

const getSaleByUser = async (req, res, next) => {
  const { id } = req.body.user; 

  try {
    const sale = await saleService.getSaleByUser(id);
    return res.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};

module.exports = { newSale, getSaleByUser };
