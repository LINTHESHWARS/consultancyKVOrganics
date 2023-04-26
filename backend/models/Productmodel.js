//name
//image
//price
//stock
//category 
// brand
// desccription

const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    stock:{type:Number,required:true},
    quantity:{type:String,required:true},
    brand:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
});

const products = mongoose.model("products",ProductSchema);
module.exports = products;