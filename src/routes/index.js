const express = require('express');
const personRouter = require('./people.router');
const imageRouter = require('./image.router');
const resultRouter = require('./result.router');
function routerApi(app) {
  const router = express.Router();
  /*Endpoint estático http://localhost:5000/api/v1 */
  app.use('/api/v1', router);

  /*Endpoint estático http://localhost:5000/api/v1/people*/
  router.use('/people', personRouter);
/*Endpoint estático http://localhost:5000/api/v1/image*/
  router.use('/image', imageRouter);
/*Endpoint estático http://localhost:5000/api/v1/result*/
  router.use('/result', resultRouter)
}
module.exports = routerApi;
