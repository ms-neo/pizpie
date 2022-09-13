// import express from 'express'
const express = require('express')
const productRouter = express.Router();
const {
    isAuth
} = require('../../utils')


const Product = require('../../models/products.js')
const Category = require('../../models/category')

// @route POST/EDIT api/product
//@desc add product
productRouter.post('/', isAuth, async (req, res) => {

    const category = await Category.findById(req.body.category)
    if (!category) return res.status(400).json({message:'category not found'})

    const {
        name,
        price,
        image,
        calories,
        countInStock,
        ingredients
    } = req.body

    const productFields = {} // make an object from the input data
    if (name) productFields.name = name;
    if (price) productFields.price = price;
    if (image) productFields.image = image;
    if (calories) productFields.calories = calories;
    if (category) productFields.category = category;
    if (countInStock) productFields.countInStock = countInStock;
    if (ingredients) productFields.ingredients = ingredients;

    try {
        let product = await Product.findOne({
            name
        })

        if (product) {
            return res.status(400).json({
                errors: [{
                    msg: "this product is already exist"
                }]
            })
        }
        // save the product to mongoose
        product = new Product(productFields)

        await product.save()
        res.json(product)

    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            msg: "Server Error"
        })
    }

})


// @route UPDATE api/products
//@desc Edit product
productRouter.put('/:id', isAuth, async (req, res) => {
    const category = await Category.findById(req.body.category)
    if (!category) return res.status(400).json({message:'category not found'})

    const {
        name,
        price,
        image,
        calories,
        countInStock,
        ingredients
    } = req.body

    const id = req.params.id

    const productFields = {} // make an object from the input data
    if (name) productFields.name = name;
    if (price) productFields.price = price;
    if (image) productFields.image = image;
    if (calories) productFields.calories = calories;
    if (category) productFields.category = category;
    if (countInStock) productFields.countInStock = countInStock;
    if (ingredients) productFields.ingredients = ingredients;

    try {
        let product = await Product.findOne({
            id
        })
        // update the product 
        if (product) {
            product = await Product.findOneAndUpdate({
                id
            }, {
                $set: productFields
            }, {
                new: true
            })
        }

        // await product.save()
        res.json(product)

    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            msg: "Server Error"
        })
    }

})


// @route GET api/product
//@desc Get product
//@access Public
productRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findById(id);
        console.log(product ,id)
        res.json(product)
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            msg: "Server Error"
        })
    }
})

// @route GET api/product
//@desc Get All products
//@access Public
productRouter.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            msg: "Server Error"
        })
    }

})

// @route DELETE api/product
//@desc Delete product
//@access Private
productRouter.delete('/:id',isAuth ,async(req,res)=>{
    try {
        const id = req.params.id
        let product = await Product.findOne({id:id})
        console.log(product)
        await product.remove()
        res.json({msg:'Product Deleted'})
    } catch (err) {
        res.status(500).send({
            msg: "Server Error"
        })
    }
} )


// Delet all Products at one
productRouter.delete('/',async (req,res)=>{
    try {
        await Product.deleteMany()
        res.json()
    } catch (err) {
        console.log(err)
    }
})


module.exports = productRouter