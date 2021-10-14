const { Model, DataTypes, Sequelize } = require('sequelize');
const { PRODUCT_TABLE } = require('./product.model');

const MOVEMENT_TABLE = 'movement';

const MovementSchema = {
  movementId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  moment: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
  productId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Movement extends Model {
  static associate(models) {
    this.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'productId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVEMENT_TABLE,
      modelName: 'Movement',
      timestamps: false,
    };
  }
}

module.exports = { MOVEMENT_TABLE, MovementSchema, Movement };
