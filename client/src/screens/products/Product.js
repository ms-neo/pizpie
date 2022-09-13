import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unstable_HistoryRouter, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

import Logo from '../../components/logo/Logo'

import NavBar from '../../components/navBar/NavBar'
import { Button } from '../../forms/formsStyles'
import { getProduct } from '../../redux/features/productSlice'
import { CardDetails, ProductContaienr, QuantityBtn } from './ProductStyle'
import Header from '../../components/header/Header'
import { addToCart, increaseQuantity } from '../../redux/features/gusetCartSlice'
import { incrementItemQty, saveCart } from '../../redux/features/cartoSlice'


const Product = () => {

  
const navigate= useNavigate()
const params =useParams()
const id =params.id

const dispatch =useDispatch()
const {product} = useSelector(state=>state.product)
const {cart} = useSelector(state=>state.cart)
const {user} = useSelector(state=>state.auth)

console.log(cart)
const [qty ,setQty] =useState(1)

useEffect(() => {
dispatch(getProduct(id))
}, [dispatch,id])


const increment =()=>{
console.log(product.countInStock,"test")
  if ( qty < product.countInStock) setQty(qty+1)

}

const decrement =(e)=>{
  if ( qty < product.countInStock && qty > 1) setQty(qty-1)
  
  }

  const addToCartHandler = ()=>{
    console.log(product,'qty save cart')
    if (user){

      dispatch(saveCart({product,qty}))
      navigate(`/cart/${id}?qty=${qty}`)
    } else{
      dispatch(addToCart({product,qty}))
    }

  }

console.log(product,"p details")
  return (
   <Fragment>
       <Header/>
       <Logo/>
       <NavBar/>
       <Footer/>
       <ProductContaienr>
       <CardDetails>
<img src={product.image}/>
<div >
<h2>{product.name}</h2>
<p><span>ingredients:</span> {product.ingredients}</p>
<p>Calories : <span>{product.calories} Kcal</span></p>
<p>stars 4.5</p>
<h3>{product.price}$</h3>
<QuantityBtn>
<div onClick={increment}>+</div>
<div>{qty}</div>
<div onClick={decrement} >-</div>
</QuantityBtn>
<Button onClick={addToCartHandler}>Add to Cart</Button>
</div>
</CardDetails>
</ProductContaienr>

   </Fragment>
  )
}

export default Product