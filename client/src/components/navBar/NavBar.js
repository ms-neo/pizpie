import React, { Fragment, useEffect } from 'react'
import { Container, DropBtn, DropDown, DropDownContent, NavBarImg, NavBarItems, NavLinks } from './navBarStyles'
import { Link, Navigate, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logout, reset } from '../../redux/features/userSlice'
import { clearCart, getCart, resetCart } from '../../redux/features/cartoSlice'


const NavBar = () => {

  const navigate =useNavigate()
  const dispatch =useDispatch()
  const {cartItems}=useSelector(state=>state.cart)
  const {guestCartItems} =useSelector(state=>state.guestCart)
  const {user}= useSelector(state=>state.auth)


const handleClick =()=>{
  dispatch(reset())
  dispatch(resetCart())
  dispatch(logout(user))
  navigate('/')
}
// useEffect(() => {
//   dispatch(clearCart())
// }, [   dispatch,clearCart])

const goToCart = ()=>{

  if (user){
    navigate(`/cart/${user._id}`)
 
  } else {
  navigate(`/cart`)
  }
}


  return (
    <Container>
    <NavLinks>
    <NavBarItems>
    <div>{user?  (<Fragment>
    <NavBarImg style={{width:'10%',marginRight:'0'}} src="../../media/user.png"/>
    <DropDown>
    <Link to="/profile"><DropBtn>Hi,{user.name}</DropBtn> </Link>
   <DropDownContent className='dropDownContent'>
   <div onClick={()=>navigate('/my-account')}>My Account</div>
   <div onClick={()=>navigate('/address')}>Address</div>
   <div onClick={()=>navigate('/payment-info')}>Payment</div>
   <div onClick={()=>navigate('/orders')}>Orders</div>
   <hr/>
   <div onClick={handleClick}> LogOut</div>
   </DropDownContent> 
    </DropDown>
    </Fragment>)
    :
   <Fragment>
   <NavBarItems>
   <NavBarImg src="../../media/user.png"/>
    <Link to="/signin"><p>Log In</p></Link>
 
    </NavBarItems>

    </Fragment>
    }
</div>
 
    </NavBarItems>
    <span></span>
    </NavLinks>
    <NavLinks>
    {!user? <>
    <NavBarItems>
    {/* to show the red circle if the user wan't logged */}
   {guestCartItems.length!==0 && <div className='red-cycle'></div>}
   <div>
    <div onClick={goToCart}> 
    <NavBarImg src="../../media/shopping-cart.png"/>Cart
     </div>
     
    </div>
   
    </NavBarItems>
 
    </> :<>
    <NavBarItems>
      {/* to show the red circle if the cart is not empty when the user is logged */}
   {(cartItems.length !== 0|| cartItems.products === []  )&& <div className='red-cycle'></div>}
   <div>
    <div onClick={goToCart}> 
    <NavBarImg src="../../media/shopping-cart.png"/>Cart
     </div>

    </div>

    </NavBarItems>
   
    </>}
    <span></span>
    </NavLinks>
    </Container>
  )
}

export default NavBar