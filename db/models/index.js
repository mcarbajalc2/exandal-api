const { Product, ProductSchema } = require('./product.model');
const { Movement, MovementSchema } = require('./movement.model');

function setupModels(sequelize) {
  Product.init(ProductSchema, Product.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Movement.init(MovementSchema, Movement.config(sequelize));
  Movement.init(MovementSchema, Movement.config(sequelize));

  Movement.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = setupModels;
