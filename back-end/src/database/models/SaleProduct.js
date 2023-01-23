module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    quantity: DataTypes.INTEGER 
  }, 
  { 
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true,
  });

  salesProduct.associate = (models) => {
    models.sale.belongsToMany(models.Product, {
      as: 'products',
      through: salesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.product.belongsToMany(models.Sale, {
      as: 'sales',
      through: salesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return salesProduct;
};
