import React, { Fragment} from 'react'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { Cart, CartContainer, DeleteBtn, ItemsWrapper, PrdouctList, ProductFlex, ProductInfo, QuantityBtnCart, TotalBox } from './shoppingCartStyles'
import { Button} from '../../forms/formsStyles'
import { Link, useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { decreaseQuantity, getCart, increaseQuantity, removeItemFromCart, saveCart} from '../../redux/features/gusetCartSlice'
import {toast} from 'react-toastify'

const GuestCart = () => {

 const navigate =useNavigate()
  const dispatch =useDispatch()
  const guestCart =useSelector(state=>state.guestCart)
  const {user}= useSelector(state=>state.auth)
const {guestCartItems}=guestCart


const handleIncClick = (product) =>{
 if (product.qty < 8 && product.qty < product.product.countInStock ) {
  dispatch(increaseQuantity(product))
 } else{
  toast.error('this is the maximum num of this product')
 }
}
const handleDecClick = (product) =>{
  if (product.qty > 1 ){
  dispatch(decreaseQuantity(product))
  }
}

  const handleRmoveItem = (product) =>  {
    dispatch(removeItemFromCart(product))
  }

  const proceedPayment = ()=>{
    if (!user){
      navigate('/signin')
    } else{
      navigate('/payment')
    }
  }

  return (
    
    <Fragment>
    <Header/>
    <Logo/>
     <NavBar/>
     <CartContainer>
    { guestCartItems.length === 0? 
    <div>Your Cart Is empty</div>:
     <Fragment>
     <Cart>
     <PrdouctList>
      { guestCartItems.map(item =>
     <ItemsWrapper key={item._id}>
<ProductInfo>
<img src={item.product.image}/>
<h4>{item.product.name}</h4>
</ProductInfo>
<ProductFlex>
<QuantityBtnCart>
<button onClick={()=>handleIncClick(item)}>+</button>
<div>{item.qty}</div>
<button onClick={()=>handleDecClick(item)}>-</button>
</QuantityBtnCart>
<DeleteBtn onClick={()=>handleRmoveItem(item)}>Delete</DeleteBtn>
<h3>{ item.product.price * item.qty}$</h3>
</ProductFlex>
</ItemsWrapper>)}
  <Link to="/products">
  <div className='line'></div>
  back to shopping {'>>'}
  </Link>
  </PrdouctList>
<TotalBox>
  <div>Subtotal : <span> {guestCartItems.reduce((a,c)=> a + c.qty ,0)} items</span></div>
 <div><h4>{guestCartItems.reduce((a,c)=> a + c.product.price * c.qty,0)}<span> SAR</span> </h4></div>
  <Button onClick={proceedPayment}>Proceed to buy</Button>
</TotalBox>
     </Cart>
     </Fragment>}
     </CartContainer>
    </Fragment>
  )
}

export default GuestCart