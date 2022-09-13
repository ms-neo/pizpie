const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
    user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
    },
    userAddress:{type:Object,required:true
    },
    orderItems :
        { type:Object,required:true }
    ,
    date: {
        type: String,
        // default: Date.date
    },
    orderId:{
        type:Number,
        required:true
    },
    // itemsPrice :{type: Number, required :true},
    // shippingPrice :{type: Number, required :true},
    // taxPrice :{type: Number, required :true},
    totalPrice :{type: Number, required :true},
    // user :{type: mongoose.Schema.Types.ObjectId, ref:'User', required :true},
    // isPaid :{type:Boolean,default:false},
},
{
    timestamps:true
}
)

module.exports = Order = mongoose.model("Order",orderSchema)

