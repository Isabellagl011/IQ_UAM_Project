const mongoose = require('mongoose')
const imageSchema = mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true,
    },
    name:{
        type:String,
        require:true
    }


});
module.exports= mongoose.model('ImageCollection',imageSchema)
