import React, { Fragment, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { Button} from '../../forms/formsStyles'
import {useDispatch, useSelector} from 'react-redux'
import { AddressContainer, Container, DisplayAddress, ExpiryEleContainer, OrderSummeryContainer, PaymentContainer } from './PaymentStyle'
import { clearCart, getTotals } from '../../redux/features/cartoSlice'
import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {  useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createOrder } from '../../redux/features/orderSlice'
import { getStripeSecret, reset } from '../../redux/features/stripeSlice'
import UserAddress from '../../components/UerAddres'
import { getUserAddress } from '../../redux/features/userAddressSlice'

const PaymentScreen = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const stripe =useStripe();
  const elements=useElements();
  let amount;
  const cart = useSelector(state=>state.cart)
  const { cartTotalAmount,cartItems}=cart
  if (cartItems === ''){
    navigate('/')
  } else {
amount= cartItems.products.reduce((a,c)=> a + c.price * c.quantity,0)
  }
  const {user} = useSelector(state=>state.auth)
  const {userAddress,isError} = useSelector(state=>state.userAddress)
  const {stripeSecret} =useSelector(state=>state.stripePayment)
const {client_secret}=stripeSecret

  useEffect(() => {
// dispatch(getUserAddress())
    dispatch(getTotals())
      // if (performance.getEntriesByType("navigation")[0].type === "reload"){
        // dispatch(getTotals())
        console.log(cartTotalAmount,'pppp')
       dispatch(getStripeSecret({amount:amount}))
      // } else {
        // dispatch(getStripeSecret({amount:amount}))
      // }
  
    if (user === null){
      navigate('/signin')
    }

  }, [dispatch,getTotals,getStripeSecret,cartTotalAmount,amount,getUserAddress])



const confirmPayment = async (e)=>{

  console.log(stripeSecret.c,'stripe screen')
  e.preventDefault()
  if (!stripe || !elements ) {
          console.log('stripe')
          // Stripe.js has not yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return toast.error('nope');
        }
        console.log(stripe,'strip')
        // setClientSecret(client_secret)
 stripe.confirmCardPayment(client_secret,{
  // description:"your order has been fullfilled",
  payment_method:{
    card:elements.getElement(CardNumberElement),
   
  }
})
.then((result)=>{
  console.log(result,'result')
  if (result.error){
    console.log(result.error.message,'err')
    toast.error(result.error.message)
    
  } else{
    if (isError){
      toast.error('please add address')
    } else {
// i need to send some data to the backend so i can create the order
dispatch(createOrder({...cart,
  orderItems:cartItems,
  userAddress,
  total:cart.cartTotalAmount,
}))
console.log(cartItems,'cart clear')
dispatch(clearCart(cartItems._id))
    toast.success('your order has been placed')
    navigate('/order-placed')
    dispatch(reset())
  }
}
})
}

// to style the strip card element
const inputStyle = {
  iconColor: '#ddd',
  color: '#000',
  fontWeight: '500',
  fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
  fontSize: '18px',
  padding:"1vh",
  textAlign:'centre',
  fontSmoothing: 'antialiased',
  ':-webkit-autofill': {
    color: '#ddd',
  },
  '::placeholder': {
    color: '#ddd',
  },
}

  return (
    <Fragment>
    <Header/>
    <Logo/>
    <NavBar/>
    <Container>
    <div>
    <PaymentContainer>
    <h3>Add your credit card :</h3>
<CardNumberElement className='payment-input' 
options={{ style: {
          base: inputStyle,
        },
      }}/>
<ExpiryEleContainer>
<CardExpiryElement className='payment-input expiry-elments'  
options={{ style: {
          base: inputStyle,
        },
      }}/>
<CardCvcElement className='payment-input expiry-elments'  
options={{ style: {
          base: inputStyle,
        },
      }}/>
      </ExpiryEleContainer>  
    </PaymentContainer>
    </div>
    <AddressContainer>
    <h3>Deliver to this address :</h3>
    <DisplayAddress>
    <UserAddress/>
    </DisplayAddress>
    <div className="vline"></div>
    </AddressContainer>
    
    <div>
    <OrderSummeryContainer>
    <div className="vline"></div>
      <h3>Order Summry </h3>
      {/* <p><span>shipping fee : </span>22.45 SAR</p> */}
      <h3><span>Total : </span><span className='sar'>SR</span> {cart.cartTotalAmount}</h3>
      <Button onClick={confirmPayment} disabled={!stripe}>Place your order</Button>
    </OrderSummeryContainer>
    </div>
    </Container>
</Fragment>
  )
}

export default PaymentScreen