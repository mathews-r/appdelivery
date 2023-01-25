module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProducts', {
    quantity: DataTypes.INTEGER,
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
  }, 
  { 
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true,
  });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      foreignKey: 'sale_id',
      as: 'products',
      through: SalesProduct,
      otherKey: 'product_id',
    });
    models.Product.belongsToMany(models.Sale, {
      foreignKey: 'product_id',
      as: 'sales',
      through: SalesProduct,
      otherKey: 'sale_id',
    });
  };

  return SalesProduct;
};
