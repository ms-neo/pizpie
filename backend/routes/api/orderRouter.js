
const express = require('express');
const orderRouter = express.Router()

const Order = require('../../models/order');
const { isAuth } = require('../../utils');

// Post / Create Order
orderRouter.post('/'  ,isAuth, async (req,res)=>{

const {orderItems,userAddress,total} =req.body

// to get the date for placed order
const date = new Date()
let day = date.getDate()
let month =date.getMonth()
let year = date.getFullYear()
let placeOrderDate = day+"-"+ month+"-"+year;

// Gnerate Order number
const  orderId=Date.now()+ Math.floor(Math.random(9) + 1)

try {
if (req.body.orderItems.length === 0){
    return res.status(400).json({messeage:"Cart is empty"})
} else{
    let order = new Order({
        orderId:orderId,
        orderItems:orderItems.products,
        userAddress,
        totalPrice:total,
        date:placeOrderDate,
        user:req.user.id
    })

let createdOrder = await order.save()

return res.status(200).json({messeage:"New order created",order:createdOrder})

}
} catch (err) {
    return res.json(err.messeage)
}
})


// GET all orders
orderRouter.get(('/') ,isAuth ,async (req,res)=>{
try {
    const orders = await Order.find({user:req.user.id})
    res.json(orders)  
} catch (err) {
    res.json(err.messeage)
}
})

// GET one order by order id
orderRouter.get('/:id' ,isAuth ,async (req,res)=>{
    try {
        const orderUser = await Order.findOne({_id:req.params.id})
        res.json(orderUser)  
    } catch (err) {
       return res.json(err.messeage)
    }
    })


 // DELETE all orders
orderRouter.delete(('/') ,isAuth ,async (req,res)=>{
try {
  await Order.deleteMany()
    res.json({})  
} catch (err) {
    res.json(err.messeage)
}
})

module.exports = orderRouter