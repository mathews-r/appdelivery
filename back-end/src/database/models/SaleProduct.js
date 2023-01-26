module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProducts', {
    quantity: DataTypes.INTEGER,
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  }, 
  { 
    tableName: 'salesProducts',
    timestamps: false,
  });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      foreignKey: 'saleId',
      as: 'products',
      through: SalesProduct,
      otherKey: 'productId',
    });
    models.Product.belongsToMany(models.Sale, {
      foreignKey: 'productId',
      as: 'sales',
      through: SalesProduct,
      otherKey: 'saleId',
    });
  };

  return SalesProduct;
};
