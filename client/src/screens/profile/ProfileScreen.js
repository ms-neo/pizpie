import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { FourIconContainer, ProfileWrapper  } from './profileStyles'

const ProfileScreen = () => {
  return (
    <>
    <Header/>
    <Logo/>
    <NavBar/>
  <FourIconContainer>
    <ProfileWrapper>
    <Link to="/my-account">
        <div className='card'>
            <img src="../../media/skills.png"/>
            <h5>My Account</h5>
            <span></span>
        </div>
        </Link>
        <Link to="/address">
        <div className='card'>
        <img src="../../media/address.png"/>
        <h5>Address</h5>
        <span></span>
        </div>
        </Link> 
        <Link to="/payment-info">
        <div className='card'>
        <img src="../../media/credit-cards-payment.png"/>
        <h5>Payment</h5>
        <span></span>
        </div>
        </Link>
        <Link to="/orders">
        <div className='card'>
        <img src="../../media/delivery-box.png"/>
        <h5>Orders</h5>
        <span></span>
        </div>
        </Link>
    </ProfileWrapper>
</FourIconContainer>
    </>
  )
}

export default ProfileScreen