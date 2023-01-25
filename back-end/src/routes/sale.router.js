const express = require('express');
const saleController = require('../controllers/sale.controller');
const { tokenValidation } = require('../middlewares/tokenValidation');

const saleRouter = express.Router();

saleRouter.post('/', tokenValidation, saleController.newSale);

module.exports = { saleRouter };
