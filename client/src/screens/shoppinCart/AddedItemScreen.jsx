import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { addToCart } from '../../redux/features/cartoSlice'
import { getProducts } from '../../redux/features/productsSlice'
import { AddedItemContainer, AddedWrapper } from './shoppingCartStyles'

const AddedItemScreen =() =>{
    const navigate =useNavigate()
    const dispatch =useDispatch()
    //to get the id from the url
    const params=useParams()
    const productId =params.id
    const {products} = useSelector(state=>state.products)
  //to et the quantity fron the url string
  const search =useLocation().search
  const getQuantity = new URLSearchParams(search).get('qty')
  // parse it to be integer
  const qty = Number(getQuantity)
  console.log(productId,qty,'productId')
  // const getItem = cart.find(item=>item.productId ? item.qty : 1)
  
  
    console.log(products,'products')
  
  let product = products.find(item => item._id === productId )
console.log(product,'getItem')

useEffect(() => {
  dispatch(getProducts())
  }, [dispatch,getProducts])
  
    
  return (
    <Fragment>
    <Header/>
    <Logo/>
    <NavBar/>
    <Footer></Footer>
    <AddedItemContainer>
    <AddedWrapper>
      <div className='box-one'>
     { products.length !==0 && (<Fragment>
      <div className='img-wrapper'><img src={product.image}/></div>
      <p>{product.name}</p>
      </Fragment>)}
       </div>
       
       <h3>Item has been Added</h3>
   
       
</AddedWrapper>
    <Link to="/products">
  Continue shopping {'>>'}
  </Link>
    </AddedItemContainer>
 
    </Fragment>
  )
}


export default AddedItemScreen