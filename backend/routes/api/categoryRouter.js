const express = require('express')
const categoryRouter =express.Router()

const Category = require('../../models/category')

// POST a categroy
categoryRouter.post('/', async (req,res)=>{
    try {
        const category = await Category.findOne({name:req.body.name})
        if (!category){
const newCategory = new Category({
    name:req.body.name
})
let createdCat =newCategory.save()
return res.status(200).json(createdCat)
        } else {
            return res.status(400).json({message :"cat is already exist"})         
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})


// GET category
categoryRouter.get('/', async (req,res)=>{
    try {
        const category = await Category.find()
return res.json(category)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

module.exports = categoryRouter