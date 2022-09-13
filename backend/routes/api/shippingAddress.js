const express =require('express');
const { isAuth } = require('../../utils');
const shippingAddressRouter = express.Router();
const ShippingAddress =require('../../models/shippingAddress.js')


// POST  address
shippingAddressRouter.post('/',isAuth ,async (req,res)=>{

const {fullName,address,city,country,postalCode}=req.body

try {
    // create a shipping address in database
    const userAddress = new ShippingAddress({
        fullName:fullName,
        address: address,
        city:city,
        country:country,
        postalCode:postalCode,
        user:req.user.id //get user id from the headers, thanks to the middleware isAuth
    });
    const createdUserAddress = await userAddress.save()
   
    return res.status(200).json(createdUserAddress)
} catch (error) {
    console.log(error)
    return res.status(500).json({message :"something went wrong"})
}
})

//GET ADDRESS
shippingAddressRouter.get('/mine/:id',isAuth, async (req,res)=>{

    try {

        console.log(req.params.id,"req.user.id,")
       
        const userAddress = await ShippingAddress.findOne({user:req.params.id})
       
        if (userAddress){
         
            return res.status(200).json(userAddress)
        } else{
    
            return res.status(400).json({message:"No shipping address added"})
        }
    
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"invalied page"})
    }

})


//Delete address 
// ** need to fix
shippingAddressRouter.get('/', async (req,res)=>{
    const address = await ShippingAddress.findOneAndRemove({user:'629b3fe71fc0ecce18dcf30f'})
    console.log(address)
    res.send(address)
})

module.exports = shippingAddressRouter