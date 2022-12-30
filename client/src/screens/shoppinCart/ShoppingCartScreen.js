import React, { Fragment, useEffect,useState,useRef} from 'react'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { Cart, CartContainer, DeleteBtn, ItemsWrapper, PrdouctList, ProductFlex, ProductInfo, QuantityBtnCart, ShoppingContiner, TotalBox } from './shoppingCartStyles'
import { Button} from '../../forms/formsStyles'
import { Link, useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {  decrementItemQty, getCart, getTotals, incrementItemQty, removeItemFromCart, saveCart} from '../../redux/features/cartoSlice'
import Spinner from '../../components/spinner/Spinner'




const ShoppingCartScreen = () => {

 const navigate =useNavigate()
  const dispatch =useDispatch()
  const [disabled, setDisabled] =useState(false);
  const bref =useRef(null)
  const cart = useSelector(state=>state.cart)

  const {user}= useSelector(state=>state.auth)
const {cartItems,cartTotalAmount}=cart

  useEffect(() => {
      dispatch(getCart(user._id))
  }, [getCart, dispatch,user._id,disabled]);


const handleIncClick = (product,e) =>{
  const {quantity}=product
  if (quantity === 7){
    dispatch(incrementItemQty(product))
    e.target.disabled=true
    setDisabled(true)
    setTimeout(() => {
        setDisabled(false)
   }, 500);
  }
  if (quantity < 7 || quantity < product.countInStock){
dispatch(incrementItemQty(product))
e.target.disabled=true
setDisabled(true)
setTimeout(() => {
    e.target.disabled=false
    setDisabled(false)
}, 650);
} 
  
}


const handleDecClick = (product,e) =>{
  let  {quantity}=product
  if (quantity === 2 ){
    e.target.disabled=true
    dispatch(decrementItemQty(product))
    setDisabled(true)
    setTimeout(() => {
        setDisabled(false)
   }, 500);
   } 
   if (quantity > 2){
    dispatch(decrementItemQty(product))
      e.target.disabled=true
      setDisabled(true)
      console.log(disabled,"dis")
      setTimeout(() => {
          e.target.disabled=false
          setDisabled(false)
     }, 650);
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
    <ShoppingContiner>
    <Header/>
    <Logo/>
     <NavBar/>

{disabled && <Spinner/>}
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
{item.quantity ===8 ? <button disabled>+</button>:<button onClick={(e)=>handleIncClick(item,e)}>+</button>}
<div>{item.quantity}</div>
{item.quantity ===1?<button disabled>-</button> : <button onClick={(e)=>handleDecClick(item,e)}>-</button>}
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
     </ShoppingContiner>
    </Fragment>
  )
}

export default ShoppingCartScreen