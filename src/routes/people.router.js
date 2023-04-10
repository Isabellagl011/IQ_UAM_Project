const express = require('express');
const router_person = express.Router();
const personSchema = require('../models/personModel');

/* POST: http://localhost:5000/api/v1/people/person */
router_person.post('/person', (req, res) => {
  const person = personSchema(req.body);
  person
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* GET: http://localhost:5000/api/v1/people */
router_person.get('/', (req, res) => {
  personSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* GET{:id}: http://localhost:5000/api/v1/people/personId */
router_person.get('/:personId', (req, res) => {
  const { personId } = req.params;
  personSchema
    .findById(personId)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* PUT{:id}: http://localhost:5000/api/v1/people/personId */
router_person.put('/:personId', (req, res) => {
  const { personId } = req.params;
  const { name, lastname, dni, address = { city, code_zip, geo } } = req.body;
  personSchema
    .updateOne({ _id: personId }, { $set: { name, lastname, dni, address } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* DELETE{:id}: http://localhost:5000/api/v1/people/personId */
router_person.delete('/:personId', (req, res) => {
  const { personId } = req.params;
  personSchema
    .deleteOne({ _id: personId })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router_person;
