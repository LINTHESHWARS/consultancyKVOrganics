const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name:{type:String,required:true}
});

const categories = mongoose.model("categories",CategorySchema);
module.exports = categories;

