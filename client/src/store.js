
import {configureStore} from '@reduxjs/toolkit'
import productsReducer from './redux/features/productsSlice'
import productReducer from './redux/features/productSlice'
import cartReducer from './redux/features/cartoSlice'
import guestCartReducer from './redux/features/gusetCartSlice'
import authReducer from './redux/features/userSlice'
import orderReducer from './redux/features/orderSlice'
import userAddressReducer from './redux/features/userAddressSlice'
import stripeReducer from './redux/features/stripeSlice'
import creditCardReducer from './redux/features/creditCardSlice'

const initialState = {

  guestCart:{
guestCartItems:localStorage.getItem('guestCartItems')
    ? JSON.parse(localStorage.getItem('guestCartItems'))
    : [],
},

cart:{
  cartItems:localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
  },


userAddress:{
userAddress: localStorage.getItem('userAddress')
? JSON.parse(localStorage.getItem('userAddress'))
: {},

},
auth:{
  user:localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null,
},

};


const store =configureStore({
reducer :{
  cart:cartReducer,
  guestCart:guestCartReducer,
  products:productsReducer,
  product:productReducer,  
  userAddress:userAddressReducer,
  orders:orderReducer,
  auth:authReducer,
 stripePayment:stripeReducer,
 creditCard:creditCardReducer,
 
},
preloadedState:initialState
}
)





export default store;