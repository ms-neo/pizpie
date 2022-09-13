const mongoose =require("mongoose");

const itemsSchema = new mongoose.Schema({
        productId :{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
        },
        name: {
            type: String,
            required: true,
            // unique: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,

        },
},
{
    timestamps:true
}
)

const myCartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products:[itemsSchema],
})

module.exports =Items = mongoose.model('Item',itemsSchema)
module.exports = MyCart = mongoose.model('MyCart',myCartSchema)