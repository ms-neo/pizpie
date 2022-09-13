import React from 'react'
import { Link } from 'react-router-dom'
import { ProfileContent } from './profileStyles'

const ProfileList = () => {
  return (
    <>
    <ProfileContent>
    <div><Link to="/my-account"> <h4>Account</h4></Link></div>
    <div><Link to="/address"><h4>Address</h4></Link></div>
    <div><Link to="/payment-info"><h4>Payment</h4></Link></div>
    <div><Link to="/orders"><h4>Orders</h4></Link></div>
    </ProfileContent>

    </>
  )
}

export default ProfileList