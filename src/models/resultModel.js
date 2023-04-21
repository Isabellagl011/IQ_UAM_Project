const mongoose = require('mongoose');
const resultSchema = mongoose.Schema({
  score: {
    type: Number,
    require: true,
    ref : 'imageModel'
  }
});

module.exports = mongoose.model('resultColection', resultSchema);
