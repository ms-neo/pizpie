
import React, { useEffect } from 'react';
import "react-toastify/dist/ReactToastify.css";
import Home from './home/Home';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import ShoppingCartScreen from './screens/shoppinCart/ShoppingCartScreen';
import AllProductsScreen from './screens/products/AllProductsScreen';
import Product from './screens/products/Product';
import ShippingAdress from './screens/shippingAdress/ShippingAdressScreen';
import PaymentScreen from './screens/paymentMethods/PaymentScreen';
import OrderPlacedScreen from './screens/orderPlaced/OrderPlacedScreen';
import { ToastContainer } from 'react-toastify';
import RegisterScreen from './screens/registerAndSignin.js/RegisterScreen';
import SignInScreen from './screens/registerAndSignin.js/SignInScreen';
import {loadStripe} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import UserAddress from './components/UerAddres';
import GuestCart from './screens/shoppinCart/GuestCart';
import AddProduct from './screens/adminPages/AddProduct';
import MyAccountScreen from './screens/profile/MyAccountScreen';
import AddressScreen from './screens/profile/AddressScreen';
import PaymentInfoScreen from './screens/profile/PaymentInfoScreen';
import OrdersScreen from './screens/profile/OrdersScreen';
import OrderDetailsScreen from './screens/orderDetails/OrderDetailsScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import ArabicDishesScreen from './screens/products/ArabicDishesScreen';
import SaladsScreen from './screens/products/SaladsScreen';
import PizzaScreen from './screens/products/PizzaScreen';
import { useDispatch, useSelector } from 'react-redux';
import { getStripeKey } from './redux/features/stripeSlice';
import AddedItemScreen from './screens/shoppinCart/AddedItemScreen';



function App() {


const dispatch = useDispatch()
const {stripePublicKey} = useSelector(state=>state.stripePayment)

  useEffect(() => {
    //get stripe pubic key from the backend
dispatch(getStripeKey())
  }, [dispatch,getStripeKey])

  return (
    <Router>
    <div className="App">
<ToastContainer/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/signin' element={<SignInScreen/>}></Route>
  <Route path='/register' element={<RegisterScreen/>}></Route>
  <Route path='/cart/:id' element={<ShoppingCartScreen/>}></Route>
  <Route path='/cart' element={<GuestCart/>}></Route>
  <Route path='/products' element={<AllProductsScreen/>}></Route>
  <Route path='/products/arabic-dishes' element={<ArabicDishesScreen/>}></Route>
  <Route path='/products/pizza' element={<PizzaScreen/>}></Route>
  <Route path='/products/salads' element={<SaladsScreen/>}></Route>
  <Route path='/add-product' element={<AddProduct/>}></Route>
  <Route path='/my-account' element={<MyAccountScreen/>}></Route>
  <Route path='/profile' element={<ProfileScreen/>}></Route>
  <Route path='/address' element={<AddressScreen/>}></Route>
  <Route path='/payment-info' element={<PaymentInfoScreen/>}></Route>
  <Route path='/orders' element={<OrdersScreen/>}></Route>
  <Route path='/products/:id' element={<Product/>}></Route>
  <Route path='/shipping-address' element={<ShippingAdress/>}></Route>
  <Route path='/shipping-address/mine/:id' element={<UserAddress/>}></Route>
  <Route exact path='/order-details/:id' element={<OrderDetailsScreen/>}></Route>
  {stripePublicKey && <Route path='/payment' element={<Elements stripe={loadStripe(`${stripePublicKey}`)}>
    <PaymentScreen/>
  </Elements>
  }></Route>}
  <Route path='/order-placed' element={<OrderPlacedScreen/>}></Route>
  {/* <Route path='/item-added/:id' element={<AddedItemScreen/>}></Route> */}

</Routes>

    </div>

    </Router>
  );
}

export default App;
