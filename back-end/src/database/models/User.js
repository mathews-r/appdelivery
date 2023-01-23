'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  user.associate = (models) => {
    user.hasMany(models.Sale, {
      as: 'sale',
      foreignKey: 'seller_id',
    });
    user.hasMany(models.Sale, {
      as: 'user',
      foreignKey: 'user_id',
    });
  }

  return user;
};
