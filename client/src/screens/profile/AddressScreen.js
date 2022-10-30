import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import UserAddress from '../../components/UerAddres'
import { Button } from '../../forms/formsStyles'
import { getUserAddress } from '../../redux/features/userAddressSlice'
import ProfileList from './ProfileList'
import { AddressInfo, AddressOptions, Container, GridContainer, ProfileContent } from './profileStyles'

const AccountInfoScreen = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector(state=>state.auth);
  

useEffect(() => {
dispatch(getUserAddress(user._id))
}, [dispatch,getUserAddress,user])

const handelClick = ()=>{
  navigate('/shipping-address')
}
  return (
    <Fragment>
    <Header/>
    <Logo/>
    <NavBar/>
    <Container>
    <GridContainer>
    <div>
  <ProfileList/>
</div>
    <div>
    <AddressInfo>
    <div className='userAdress-info'>
    <h3>{user.name}</h3>
    <UserAddress/>
      </div>
      {/* <AddressOptions>ر
        <div>
        <p>Update</p>
        </div>
        <div><p>Delete</p></div>
      </AddressOptions> */}
    </AddressInfo>
       <Button onClick={handelClick}>Add new address</Button>
    </div>
    </GridContainer>
    </Container>
    </Fragment>
  )
}

export default AccountInfoScreen