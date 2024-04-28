const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    roll:Number,
    name:String,
    prof:String,
    exp:String,
    sub:String,
    img:String
    
})

module.exports = mongoose.model('alltimegyms',blogSchema);