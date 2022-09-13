const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    calories: {
        type: String,
        required: true,
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    countInStock: {
        type: Number,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },

},
{
    timestamps:true,
}
)

module.exports =Product = mongoose.model("Product",ProductSchema)