const express = require('express');
const router_image = express.Router();
const imageSchema = require('../models/imageModel');

/* POST: http://localhost:5000/api/v1/image */
router_image.post('/image', (req, res) => {
  const image = imageSchema(req.body);
  image
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* GET: http://localhost:5000/api/v1/image */
router_image.get('/', (req, res) => {
  imageSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router_image.get('/:imageId', (req, res) => {
  const { imageId } = req.params;
  imageSchema
    .findById(imageId)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router_image;
