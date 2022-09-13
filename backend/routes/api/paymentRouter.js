const express =require('express');
const { isAuth } = require('../../utils');
const paymentRouter = express.Router()
const CreidtCard=require('../../models/creditCard')

// processing credit card
const stripe = require('stripe')(`${process.env.STRIPE_PRIVET_KEY}`)



paymentRouter.get('/key',isAuth, (req,res)=>{
try {
  console.log('ddd')
   return res.json(`${process.env.STRIPE_PUBLIC_KEY}`)

} catch (err) {
return res.json(err)
}

})

// save credit card to db
paymentRouter.post('/my-card',isAuth,async(req,res)=>{

  const {name,cardNumber,expMonth,expYear, cardType}=req.body
  // to get red of the spaces between the number
  const fixCard = cardNumber.split(' ').join('')

  try {
    let card = await CreidtCard.findOne({cardNumber:fixCard
    })

    if (card){
res.status(400).json({message:"this card numebr is already exist"})
    } else{
    card = new CreidtCard({
      name:name,
      cardNumber:fixCard,
      expiryMonth:expMonth,
      expiryYear:expYear,
      cardType:cardType,
      user:req.user.id
    }) 
await card.save()
    return res.json(card)
  }
  } catch (err) {
    return res.json(err)
  }
})

// POST PAYMNET TO STRIPE 
paymentRouter.post('/',isAuth, async (req,res)=>{
 
    const  {amount}  = req.body;
    console.log(req.body,'strip back')
try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    const client_secret=paymentIntent.client_secret
    return res.status(200).send({
      client_secret,
    });

} catch (error) {
  console.log(error.message)
  res.status(500).json(error.message)
}
})


// get all saved card for a specific user
paymentRouter.get('/',isAuth,async(req,res)=>{
  try {
   const cCard = await CreidtCard.find({user:req.user.id})
   res.json(cCard) 
  } catch (err) {
    return res.json(err)
  }
})
module.exports  = paymentRouter