const { SalesProducts } = require('../database/models');

const newSaleProduct = async (saleId, products) => {
  const sale = products.map((item) => SalesProducts.create({
      sale_id: saleId,
      product_id: item.id,
      quantity: item.quantity,
    }));
  await Promise.all(sale);
};

module.exports = { newSaleProduct };
