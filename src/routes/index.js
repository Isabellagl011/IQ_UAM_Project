const express = require('express');
const personRouter = require('./people.router');

function routerApi(app) {
  const router = express.Router();
  /*Endpoint estático http://localhost:5000/api/v1 */
  app.use('/api/v1', router);

  /*Endpoint estático http://localhost:5000/api/v1 */
  router.use('/people', personRouter);
}
module.exports = routerApi;
