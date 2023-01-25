module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: { type: DataTypes.INTEGER, references: { model: 'users', key: 'id' } },
    seller_id: { type: DataTypes.INTEGER, primaryKey: true },
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: {type: DataTypes.DATE, defaultValue: new Date() },
    status: DataTypes.STRING,
  }, {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'id', as: 'user' });
    Sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'seller' });
  };
  
  return Sale;
};
