const express = require('express');
const router_person = express.Router();
const imageSchema = require('../models/imageModel');

/* POST: http://localhost:5000/api/v1/image */
router_person.post('/image', (req, res) => {
    const image = imageSchema(req.body);
    image
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    });

/* GET: http://localhost:5000/api/v1/image */
router_person.get('/', (req, res) => {
    imageSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    }
);

