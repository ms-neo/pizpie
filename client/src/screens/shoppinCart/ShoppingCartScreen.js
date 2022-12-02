import React, { Fragment, useEffect} from 'react'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { Cart, CartContainer, DeleteBtn, ItemsWrapper, PrdouctList, ProductFlex, ProductInfo, QuantityBtnCart, TotalBox } from './shoppingCartStyles'
import { Button} from '../../forms/formsStyles'
import { Link, useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {  decrementItemQty, getCart, getTotals, incrementItemQty, removeItemFromCart, saveCart} from '../../redux/features/cartoSlice'



const ShoppingCartScreen = () => {

 const navigate =useNavigate()
  const dispatch =useDispatch()
  const cart = useSelector(state=>state.cart)

  const {user}= useSelector(state=>state.auth)
const {cartItems,cartTotalAmount}=cart

  useEffect(() => {
      dispatch(getCart(user._id))
  }, [getCart, dispatch,user._id,cart._id]);

const handleIncClick = (product) =>{
  if (product.quantity <= 7 || product.quantity < product.countInStock){
dispatch(incrementItemQty(product))
  }
}
const handleDecClick = (product) =>{
  if (product.quantity > 1){
dispatch(decrementItemQty(product))
  }
}

  const handleRmoveItem = (product) =>  {
    let productId =product.productId
    dispatch(removeItemFromCart(productId))
  }

  const goToProductPage =(product)=>{
    console.log(product)
    navigate(`/products/${product.productId}`)
  }

  const proceedPayment = ()=>{
    if (!user){
      navigate('/signin')
    } else{
      dispatch(getTotals());
      navigate('/payment')
    }

  }

  return (
     
    <Fragment>
    <Header/>
    <Logo/>
     <NavBar/>
     <CartContainer>
    {(!cartItems || cartItems.length === 0 )? 
    <h2>Your Cart Is empty .</h2>
    : 
     <Fragment>
     <Cart>
     <PrdouctList>
      { cartItems.products.map(item =>
     <ItemsWrapper key={item.productId}>
<ProductInfo onClick={()=>goToProductPage(item)}>
<img src={item.image}/>
<p>{item.name}</p>
</ProductInfo>
<ProductFlex>
<QuantityBtnCart>
<button onClick={()=>handleIncClick(item)}>+</button>
<div>{item.quantity}</div>
<button onClick={()=>handleDecClick(item)}>-</button>
</QuantityBtnCart>
<div><DeleteBtn onClick={()=>handleRmoveItem(item)}>Delete</DeleteBtn></div>
<div><h3><span className='sar'>SR</span> { item.price * item.quantity}</h3></div>
</ProductFlex>
</ItemsWrapper>    )} 
    </PrdouctList>
<TotalBox>
  <div>Subtotal : <span> {cartItems.products.reduce((a,c)=> a + c.quantity ,0)} items</span></div>
 <div><h4><span className='sar'>SR</span> {cartItems.products.reduce((a,c)=> a + c.price * c.quantity,0)}</h4></div>
  <Button onClick={()=>proceedPayment()}>Proceed to buy</Button>
</TotalBox>
     </Cart>
     </Fragment>}
     <Link to="/products">
  <div className='line'></div>
  Continue shopping {'>>'}
  </Link>
     </CartContainer>
    </Fragment>
  )
}

export default ShoppingCartScreen