const AdminRouter = require('express').Router();
const Categories = require("../models/Categorymodel");
const products = require("../models/Productmodel");

AdminRouter.post("/Categories",async (req,res)=>{
    try {
        
        const name = req.body.name;

        const temp = await Categories.findOne({name : name});
        if(temp){
            res.status(404).send('Category already exists');
        }else{
            const category = new Categories({
                name:name
            });
            await category.save();
            res.status(200).send({message:"Category added successfully"});
        }

    } catch (e) {
        res.status(500).send({ message : e.message});
    }
});

AdminRouter.post("/Product",async (req,res)=>{
    try {
        
        const name = req.body.name;
        const price = req.body.price;
        const category = req.body.category;
        const quantity = req.body.quantity;
        const stock = req.body.stock;
        const brand = req.body.brand;
        const description = req.body.description;
        const image = req.body.image;

        const temp = await products.findOne({name : name,category:category,brand:brand});
        if(temp){
            res.status(404).send('Product already exists');
        }else{
            const Product = new products({
                name:name,
                price:price,
                category:category,
                stock:stock,
                quantity:quantity,
                brand:brand,
                description:description,
                image:image

            });
            const AddedProduct = await Product.save();
            res.status(200).send({
                user: 
                {
                    name:AddedProduct.name,
                    price:AddedProduct.price,
                    category:AddedProduct.category,
                    stock:AddedProduct.stock,
                    quantity:AddedProduct.quantity,
                    brand:AddedProduct.brand,
                    description:AddedProduct.description,
                    image:AddedProduct.image,
                },
              message:"Product added successfully"});
        }

    } catch (e) {
        res.status(500).send({ message : e.message+"error in sending res"});
    }
});

module.exports = AdminRouter;