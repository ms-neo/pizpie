import React from 'react'
import { Link} from 'react-router-dom'
import { ProfileContent } from './profileStyles'

const ProfileList = () => {


  return (
    <>
    <ProfileContent>
    <div><Link to="/my-account">Account</Link></div>
    <div><Link to="/address">Address</Link></div>
    <div><Link to="/payment-info">Payment</Link></div>
    <div><Link to="/orders"><h4>Orders</h4></Link></div>
    </ProfileContent>

    </>
  )
}

export default ProfileList