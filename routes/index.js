const express = require('express');

const productsRouter = require('./products.router');
const movementsRouter = require('./movements.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/movements', movementsRouter);
}

module.exports = routerApi;
