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

const ArabicDishesScreen = () => {

  const dispatch =useDispatch()
const {products} = useSelector(state=>state.products)
const {user} =useSelector(state=>state.auth)

// fliter the category after getting all products from backend
const getProductsByCat = products.filter(x=> x.category === '630e3ba402899c5ea2a1934c')

useEffect(() => {
dispatch(getProducts())
}, [dispatch,getProducts])


const handleAddItem =product =>{
  let qty =1
  if (user){
    dispatch(saveCart({product,qty}))
  } else{
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
{getProductsByCat.map(p=>
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

export default ArabicDishesScreen