const mongoose =require("mongoose");

const creditCardSchema = new mongoose.Schema({
        user :{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        name: {
            type: String,
            required: true,
        },
        cardNumber: {
            type: Number,
            required: true,
            unique:true,
        },
        expiryMonth: {
            type: String,
            required: true,
        },
        expiryYear: {
            type: Number,
            required: true,
        },
        cardType:{
            type:String,
            required:true
        }
},
{
    timestamps:true
}
)

module.exports =CreidtCard= mongoose.model("CreidtCard",creditCardSchema)