

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    tel:Number,
    message:String
})
module.exports = mongoose.model("formdatas",userSchema);