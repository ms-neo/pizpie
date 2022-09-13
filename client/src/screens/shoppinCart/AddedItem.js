import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { addToCart } from '../../redux/features/cartoSlice'
import { AddedItemContainer, AddedWrapper } from './shoppingCartStyles'

function AddedItem() {
    const navigate =useNavigate()
    const dispatch =useDispatch()
    //to get the id from the url
    const params=useParams()
    const productId =params.id
    const cart = useSelector(state=>state.cart)
  //to et the quantity fron the url string
  const search =useLocation().search
  const getQuantity = new URLSearchParams(search).get('qty')
  // parse it to be integer
  const qty = Number(getQuantity)
  console.log(productId,qty,'productId')
  // const getItem = cart.find(item=>item.productId ? item.qty : 1)
  
  
    console.log(cart.cartItems.products,'cartscreen')
  
  let product = cart.cartItems.products.find(item => item.productId === productId )
console.log(product,'getItem')

    useEffect(() => {
      if (productId){
  window.history.pushState(null, null, document.URL);
window.addEventListener('popstate', ()=> {
   window.location.replace(`/products/${productId}`);
});
      }
    }, [dispatch,productId,qty])
  
    
  return (
    <Fragment>
    <Header/>
    <Logo/>
    <NavBar/>
    <Footer></Footer>
    <AddedItemContainer>
    <AddedWrapper>
      <div>
      <img src='../../media/pizza-homepage.png'/>
      <p>{product.name}</p>
       </div>
       <div>
       <h3>Item has been Added</h3>
       </div>
</AddedWrapper>
 <Link to='/products'>
 <h4>Continue Shopping ≥≥≥ </h4>
 </Link>
    </AddedItemContainer>
 
    </Fragment>
  )
}


export default AddedItem