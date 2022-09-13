const mongoose =require("mongoose");

const shippingAddressSchema = new mongoose.Schema({
    fullName :{type: String, required :true},
    address :{type: String, required :true},
    city :{type: String, required :true},
    postalCode :{type: String, required :true},
    country :{type: String, required :true},
      user :{type: mongoose.Schema.Types.ObjectId, ref:'User', required :true},

},
{
    timestamps:true
});

module.exports = ShippingAddress = mongoose.model("ShippingAddress", shippingAddressSchema)