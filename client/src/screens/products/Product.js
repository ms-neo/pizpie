import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { Button } from '../../forms/formsStyles'
import { getProduct } from '../../redux/features/productSlice'
import { CardDetails, ProductContaienr} from './ProductStyle'
import Header from '../../components/header/Header'
import { addToCart} from '../../redux/features/gusetCartSlice'
import {  saveCart } from '../../redux/features/cartoSlice'
import { toast } from 'react-toastify'


const Product = () => {

  
const navigate= useNavigate()
const params =useParams()
const id =params.id

const dispatch =useDispatch()
const {product} = useSelector(state=>state.product)
const {cartItems} = useSelector(state=>state.cart)
const {user} = useSelector(state=>state.auth)

const qty =1;
let currentItem ;

if (cartItems){
  currentItem = cartItems.products.find(x=> x.productId == id)
}


useEffect(() => {
dispatch(getProduct(id))
}, [dispatch,id])


  const addToCartHandler = ()=>{
    console.log(product,'qty save cart')
    if (user){
      if (!currentItem || currentItem.quantity < 8) {
        dispatch(saveCart({product,qty}))
        navigate(`/cart/${id}?qty=${qty}`)
 } else{
  toast.error("you can't add more than 8 items of this product to cart")
 }
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
       <div className='image-wrapper'>
<img src={product.image}/>
</div>
<div >
<h2>{product.name}</h2>
<p><span>ingredients:</span> {product.ingredients}</p>
<p>Calories : <span>{product.calories} Kcal</span></p>
<p>stars 4.5</p>
<h3>{product.price}$</h3>
<Button onClick={addToCartHandler}>Add to Cart</Button>
</div>
</CardDetails>
</ProductContaienr>

   </Fragment>
  )
}

export default Product