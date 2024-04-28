const mongoose = require("mongoose");
 const useSchema = new mongoose.Schema({
    rank:Number,
    img:String
 })
 module.exports = mongoose.model("galleries",useSchema);