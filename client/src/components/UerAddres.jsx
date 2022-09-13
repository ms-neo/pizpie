import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserAddress, reset } from '../redux/features/userAddressSlice'

const UserAddress = () => {


   const {message,isError,userAddress}= useSelector(state=>state.userAddress)
   const {user}= useSelector(state=>state.auth)

const dispatch =useDispatch()


useEffect(() => {
  // get the address from redux store
  dispatch(getUserAddress(user._id))
  dispatch(reset())
}, [dispatch,getUserAddress,reset,user])


  return (
    <div>
    {/* check if the user doesn't have address */}
    {isError ? (
      <Fragment>
      <div>{message}</div>
    <h4><Link to='/shipping-address'>add address</Link> </h4>
    </Fragment>):
   ( <div>
      <p>{userAddress.fullName}</p>
      <p>{userAddress.address}</p>
      <p>{userAddress.city}</p>
      <p>{userAddress.country}</p>
      <p>{userAddress.postalCode}</p> 
    </div>)
    }
    </div>
  )
}

export default UserAddress