import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { getOrder, reset } from '../../redux/features/orderSlice'
import { CartItems, OrderContainer, OrderItemsContainer, OrderSummeryContainer, OrderWrapper, PlaceOrderContainer, VLine } from './orderDetailsStyle'

const PlaceOrderScreen = () => {

  const dispatch =useDispatch()
  const {id}= useParams()
  const {order} = useSelector(state=>state.orders)

      // get order's details from redux store
const {orderItems ,userAddress}=order

  useEffect(() => {

 dispatch(getOrder(id))

  }, [dispatch,getOrder,id])


  return (
    <>
   <Header/>
  <Logo/>
  <NavBar/>
  {order&&
  <OrderContainer>
  <h2>Order Details</h2>
  <PlaceOrderContainer>
  <div>
  <OrderWrapper>
  <div>Ordered on : <h4> {order.date}</h4> </div>
 <div>Order number :<h4>{order.orderId}</h4></div>
  </OrderWrapper>
  <div className='line'>
  </div>
  <OrderItemsContainer>
  {order && orderItems.map(item=>   
    <CartItems key={item._id}>
    <div>
    <img src={item.image}/>
    <p>{item.name}</p>
    </div>
    <p>{item.quantity}X</p>
    <h3><span className='sar'>SR</span> {item.price} </h3>
    </CartItems>
    )}
    </OrderItemsContainer>
    </div>
    <VLine></VLine>
    <OrderSummeryContainer>
    <div>
    <h4>Shipping Address</h4>
    <div>
      <p>{userAddress.fullName}</p>
      <p>{userAddress.address}</p>
      <p>{userAddress.city}</p>
      <p>{userAddress.country}</p>
      <p>{userAddress.postalCode}</p> 
    </div>
    <div className='line'></div>
    </div>
    {/* <div>
    <h4>Payment Method</h4>
    <p> <img src='../../media/visa.png'/> Visa ending on 337</p>
    <div className='line'></div>
    </div> */}
    <h4>Total </h4>
    {/* <div>subtotal : {order.totalPrice} SAR</div>
    <div>Shipping price : {order.totalPrice} SAR</div> */}
    <h3><span className='sar'>SR</span> {order.totalPrice}</h3>

  </OrderSummeryContainer>
    </PlaceOrderContainer>

    </OrderContainer>
  }
    </>
    
  )
}

export default PlaceOrderScreen