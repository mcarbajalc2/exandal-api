const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'product';

const ProductSchema = {
  productId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Product extends Model {
  static associate(models) {
    this.hasMany(models.Movement, {
      as: 'movements',
      foreignKey: 'movementId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    };
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product };
