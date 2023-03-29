const mongoose = require('mongoose')
const imageSchema = mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true,
    },
    image:{
        type:Image,
        require:true
    }


});
module.exports= mongoose.model('ImageCollection',imageSchema)
