const faker = require('faker');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequalize');

class MovementsService {
  async create(data) {
    const movement = await models.Movement.create(data);
    return movement;
  }

  async find() {
    return await models.Movement.findAll({ include: ['product'] });
  }

  async findOne(id) {
    const movement = await models.Movement.findByPk(id, {
      include: ['product'],
    });
    if (!movement) {
      throw boom.notFound('Movement not found.');
    }
    return movement;
  }

  async update(id, changes) {
    const movement = await this.findOne(id);
    return await movement.update(changes);
  }

  async delete(id) {
    const movement = await this.findOne(id);
    await movement.destroy();
    return { movementId: id };
  }
}

module.exports = MovementsService;
