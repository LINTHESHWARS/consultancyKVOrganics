const GetDetailRouter = require("express").Router();
const products = require("../models/Productmodel");
const categories = require("../models/Categorymodel");


GetDetailRouter.get("/categories",async (req,res)=>{
    try {
        const categorieList = await categories.find({});
        res.status(200).send({
            categoryList:categorieList
        });
    } catch (e) {
        res.status(500).send(" Try to reload  "+e.message)
    }
})

GetDetailRouter.get("/products",async (req,res)=>{
    try {
        const productList = await products.find();
        res.status(200).send({
            productList:productList
        });
    } catch (e) {
        res.status(500).send(" Try to reload  "+e.message)
    }
})

module.exports = GetDetailRouter;