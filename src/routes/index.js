const express = require('express');
const personBillRouter = require('./peopleBill.router');
const imageRouter = require('./image.router');

function routerApi(app) {
  const router = express.Router();
  /*Endpoint estático http://localhost:5000/api/v1 */
  app.use('/api/v1', router);

  /*Endpoint estático http://localhost:5000/api/v1 */
  router.use('/people', personBillRouter);

  router.use('/image', imageRouter);
}
module.exports = routerApi;
