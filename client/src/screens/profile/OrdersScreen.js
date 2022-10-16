import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { getOrders, reset } from '../../redux/features/orderSlice'
import ProfileList from './ProfileList'
import { Column1, Column2, Container, GridContainer, ImgWrapper, OrderContainer, OrderGrid } from './profileStyles'

const OrdersScreen = () => {

  const navigate= useNavigate()
  const dispatch  =useDispatch()
  const {orders} =useSelector(state=>state.orders)
 
  const goToOrderDetails =(orderId)=>{
dispatch(reset())
navigate(`/order-details/${orderId}`)
  }

  useEffect(() => {
    //get all orders of the users
 dispatch(getOrders())

  }, [dispatch,getOrders])


  return (
    <Fragment>
    <Header/>
    <Logo/>
    <NavBar/>
    <Container>
    <GridContainer>
    <div>
  <ProfileList/>
</div>
    <>
    <OrderContainer>
    {orders? orders.map(order=>
     (<OrderGrid key={order._id}>
     <>
     <Column1>
     <ImgWrapper>
     <div>
      <h5>Order placed <span><p>{order.date}</p></span></h5>
      </div>
    <div className='img-wrapper'>
      {order.orderItems.map(item =>
     <>
      <img src={item.image}/>
      </>
      )}
      </div>
   
      </ImgWrapper>
      <div className='h-line'></div>
      </Column1>
  
      <Column2>
        <div>
          <h5>order number</h5>
          <p>{order.orderId}</p>
        </div>
        <div>
        <h5>Total amount</h5>
          <p>{order.totalPrice} sar</p>
        </div>
        <div className='order-hide'>
        <h5>Ship to</h5>
          <p>{order.userAddress.fullName}</p>
        </div>
        <div className='order-hide'>
        <h5>Payment</h5>
          <p>Visa</p>
        </div>
        <div>
       <div 
       onClick={()=>goToOrderDetails(order._id)}
       className="more-details">more details ...</div> 
        </div>
      </Column2>
      </>
     </OrderGrid>)
     )  :(<p>you have no orders</p>)}
    </OrderContainer>
      </>
    </GridContainer>
    </Container>
    </Fragment>
  )
}

export default OrdersScreen