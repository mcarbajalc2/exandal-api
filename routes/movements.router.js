const express = require('express');
const MovementsService = require('./../services/movements.service');

const router = express.Router();
const service = new MovementsService();

router.get('/', async (req, res) => {
  const movements = await service.find();
  res.json(movements);
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const movement = await service.findOne(id);
    res.json(movement);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const movement = await service.create(body);
  res.status(201).json(movement);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const movement = await service.update(id, body);
    res.json(movement);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});
module.exports = router;
