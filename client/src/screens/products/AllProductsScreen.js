import React, { Fragment, useEffect } from 'react'
import { Card, ProductsContainer,CardContent, Container } from './productsStyles'
import { Button } from '../../forms/formsStyles'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import MenuBar from '../../components/menuBar/MenuBar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/features/productsSlice'
import { saveCart } from '../../redux/features/cartoSlice'
import { addToCart } from '../../redux/features/gusetCartSlice'
import { toast } from 'react-toastify'

const Products = () => {
  
  const dispatch =useDispatch()
const {products} = useSelector(state=>state.products)
const {user} =useSelector(state=>state.auth)
const {cartItems} = useSelector(state=>state.cart)
const {guestCartItems} = useSelector(state=>state.guestCart)

let currentItem ;



useEffect(() => {
dispatch(getProducts())
}, [dispatch,getProducts])


const handleAddItem =product =>{
  let qty =1
  // check if there's already less than 8 items in the cart


  console.log(product._id,'product')
  console.log(currentItem,'product')
// only add one item to cart
  if (user){
    if (cartItems){
      currentItem = cartItems.products.find(x=> x.productId == product._id)
    }
    //add it to user cart
    if (!currentItem || currentItem.quantity < 8) {
    dispatch(saveCart({product,qty}))
    toast.success("Item has been Added sucessfuly");
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
      toast.success("Item has been Added sucessfuly");
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
 <Container>
 <MenuBar/>
    <ProductsContainer>
<Card>
{products.map(p=>
<CardContent key={p._id}>
<Link to={`/products/${p._id}`}>
<img src={p.image}/>
</Link>
<h3>{p.name}</h3>
<div>
<p>Calories : <span>{p.calories}Kcal</span></p>
<h5>stars 4.5</h5>
</div>
<h4>{p.price}$</h4>
<Button onClick={()=>handleAddItem(p)}>Add to Cart</Button>
</CardContent>
)}
</Card>
    </ProductsContainer>
    </Container>
    </Fragment>
  )
}

export default Products