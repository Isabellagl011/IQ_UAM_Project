const express = require('express');
const router_result = express.Router();
const resultSchema = require('../models/resultModel');

/* POST: http://localhost:5000/api/v1/result */
router_result.post('/result', (req, res) => {
  const result = resultSchema(req.body);
  result
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* GET: http://localhost:5000/api/v1/result */
router_result.get('/', (req, res) => {
  resultSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router_result.get('/:resultid', (req, res) => {
  const { resultId } = req.params;
  resultSchema
    .findById(resultId)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router_result;
