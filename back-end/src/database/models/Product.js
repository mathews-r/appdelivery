module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    url_image: DataTypes.STRING,
  }, {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });

  return product;
};
