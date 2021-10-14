const faker = require('faker');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequalize');

class ProductsService {
  async create(data) {
    const product = await models.Product.create(data);
    return product;
  }

  async find() {
    return await models.Product.findAll();
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found.');
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    return await product.update(changes);
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { productId: id };
  }
}

module.exports = ProductsService;
