module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: { type: DataTypes.INTEGER, references: { model: 'users', key: 'id' } },
    sellerId: { type: DataTypes.INTEGER, primaryKey: true },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: {type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    status: DataTypes.STRING,
  }, {
    tableName: 'sales',
    underscored:true,
    timestamps: false,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'id', as: 'user' });
    Sale.belongsTo(models.User, { foreignKey: 'sellerId', as: 'seller' });
  };
  
  return Sale;
};
