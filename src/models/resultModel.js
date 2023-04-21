const mongoose = require('mongoose');
const resultSchema = mongoose.Schema({
  score: {
    type: Number,
    require: true,
    ref : 'imageModel'
  },
  id :{
    type: String,
    require: true,
  }
});

module.exports = mongoose.model('resultColection', resultSchema);
