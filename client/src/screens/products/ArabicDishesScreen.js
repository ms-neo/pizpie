import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import MenuBar from '../../components/menuBar/MenuBar'
import NavBar from '../../components/navBar/NavBar'
import { Button } from '../../forms/formsStyles'
import { saveCart } from '../../redux/features/cartoSlice'
import { addToCart } from '../../redux/features/gusetCartSlice'
import { getProducts } from '../../redux/features/productsSlice'
import { Card, CardContent, Container, ProductsContainer } from './productsStyles'
import { toast } from 'react-toastify'

const ArabicDishesScreen = () => {

  const dispatch =useDispatch()
  const {products} = useSelector(state=>state.products)
  const {user} =useSelector(state=>state.auth)
  const {cartItems} = useSelector(state=>state.cart)
  const {guestCartItems} = useSelector(state=>state.guestCart)
  
  let currentItem ;

// fliter the category after getting all products from backend
const getProductsByCat = products.filter(x=> x.category === '630e3ba402899c5ea2a1934c')

useEffect(() => {
dispatch(getProducts())
}, [dispatch,getProducts])


const handleAddItem =product =>{
  let qty =1
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
    <Container>
 <MenuBar/>
    <ProductsContainer>
<Card>
{getProductsByCat.map(p=>
<CardContent key={p._id}>
<Link to={`/products/${p._id}`}>
<img src={p.image}/>
</Link>
<h2>{p.name}</h2>
<div>
<p>Calories : <span>{p.calories}Kcal</span></p>
{/* <h5>stars 4.5</h5> */}
</div>
<h2><span className='sar'>SR</span> {p.price}</h2>
<Button onClick={()=>handleAddItem(p)}>Add to Cart</Button>
</CardContent>
)}
</Card>
    </ProductsContainer>
    </Container>
</Fragment>
  )
}

export default ArabicDishesScreen