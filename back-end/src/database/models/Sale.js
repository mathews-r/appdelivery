module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  });

  sale.associate = (models) => {
    sale.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    },
    {
      as: 'seller',
      foreignKey: 'seller_id',
    });
  };
  return sale;
};
