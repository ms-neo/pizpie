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

const Products = () => {
  
  const dispatch =useDispatch()
const {products} = useSelector(state=>state.products)
const {user} =useSelector(state=>state.auth)

useEffect(() => {
dispatch(getProducts())
}, [dispatch,getProducts])


const handleAddItem =product =>{
  let qty =1
// only add one item to cart
  if (user){
    //add it to user cart
    dispatch(saveCart({product,qty}))
  } else{
    // add it to guest cart
    dispatch(addToCart({product,qty}))
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