import React, {Fragment, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import {Button} from '../../forms/formsStyles'
import {getProduct} from '../../redux/features/productSlice'
import { CardDetails,ProductContaienr} from './ProductStyle'
import Header from '../../components/header/Header'
import {addToCart} from '../../redux/features/gusetCartSlice'
import {saveCart} from '../../redux/features/cartoSlice'
import {toast} from 'react-toastify'


const Product = () => {

  const params = useParams()
  const id = params.id

  const dispatch = useDispatch()
  const {product} = useSelector(state => state.product)
  const {cartItems} = useSelector(state => state.cart)
  const {user} = useSelector(state => state.auth)
  const {guestCartItems} = useSelector(state=>state.guestCart)


  let currentItem;


  useEffect(() => {
    dispatch(getProduct(id))
  }, [dispatch, id])


  const addToCartHandler = () => {
    let qty =1
  // check if there's already less than 8 items in the cart
  if (user){
    if (cartItems.length !== 0){
      currentItem = cartItems.products.find(x=> x.productId == product._id)
    }
    console.log(currentItem,'cur')
    //add it to user cart
    if (!currentItem || currentItem.quantity < 8) {
    dispatch(saveCart({product,qty}))
    toast.success("Item has been successfully added.");
    } else{
      toast.error("you can't add more than 8 items of this product to cart")
     }
  } else{
    // add it to guest cart
    if (guestCartItems){
      currentItem = guestCartItems.find(x=> x.product._id == product._id)
    }
    if (!currentItem || currentItem.qty < 8) {
      dispatch(addToCart({product,qty}))
      toast.success("Item has been successfully added.");
      } else{
        toast.error("you can't add more than 8 items of this product to cart")
       }
  }

  }

  return ( 
  <Fragment>
    <Header/>
    <Logo/>
    <NavBar/>
    <Footer/>
    <ProductContaienr>
    <CardDetails>
    <div className = 'image-wrapper' >
    <img src = {product.image}/> </div> <div className = 'product-content' >
    <h2>  {product.name} </h2> 
    <p> <span> ingredients: </span> {product.ingredients}</p>
    <p> <span> Calories: </span>{product.calories} Kcal</p> 
    {/* <p>stars 4.5</p> */ } 
      <h3><span className='sar'>SR</span> {product.price}</h3> 
      <Button onClick = {addToCartHandler} > Add to Cart </Button>
       </div>
       </CardDetails>
        </ProductContaienr>
    </Fragment>
  )
}

export default Product