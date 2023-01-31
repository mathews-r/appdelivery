const saleService = require('../services/sale.service');

const newSale = async (req, res, next) => {
  try {
    const sale = await saleService.newSale(req.body);
    return res.status(201).json(sale);
  } catch (error) {
    next(error);
  }
};

const getAllSalesByUser = async (req, res, next) => {
  const { id } = req.body.user;

  try {
    const sale = await saleService.getAllSalesByUser(id);
    return res.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};

const getSaleById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const sale = await saleService.getSaleById(Number(id));
    return res.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};

const updateSaleStatus = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    await saleService.updateStatusSale(id, status);
    return res.status(204).json({ message: 'Sale updated ' });
  } catch (error) {
    next(error);
  }
};

module.exports = { newSale, getAllSalesByUser, getSaleById, updateSaleStatus };
