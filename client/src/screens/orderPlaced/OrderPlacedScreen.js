import React, { Fragment, useEffect } from 'react'
import { Container } from './orderPlacedStyles'
import Header  from '../../components/header/Header'
import Logo  from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../redux/features/cartoSlice'

const OrderPlacedScreen = () => {

 
const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(clearCart())
  }, [   dispatch,clearCart])

  return (
      <Fragment>
<Header/>
<Logo/>
<NavBar/>
      <Container>
  <div>
  <h1>Congratelation</h1>
  <p>Your order has been placed</p>
  {/* i need to add a link to show order details */}
  {/* <Link>your order details</Link> */}
      <img src="media/place-order.png"/>
      </div>
</Container>
      </Fragment>
  
  )
}

export default OrderPlacedScreen