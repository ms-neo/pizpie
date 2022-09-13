import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { Button, Input } from '../../forms/formsStyles'
import { reset, saveShippingAddress } from '../../redux/features/userAddressSlice'
import { ShippingContainer } from './shippingAddressStyle'

const ShippingAdress = () => {
  
  const cart =useSelector(state=>state.cart)

  const [formData, setFormData] = useState({
    fullName,
    address,
    city,
    country,
    postalCode,
  })

const { fullName,address,city,country,postalCode}=formData

const navigate =useNavigate()
const disaptch =useDispatch()


const handleSubmit = e =>{
  e.preventDefault();
  const ShippingAdressData = {
    fullName,address,city,country,postalCode
  }
  // we will dispatch action to save the address to teh database and to the local storage
disaptch(saveShippingAddress(ShippingAdressData))
navigate('/payment')
disaptch(reset())
}

const handleChange = e =>{
console.log(e.target.value)
setFormData(prevState=>({
  ...prevState,
  [e.target.name]:e.target.value
}))
}

  return (
    <Fragment>
    <Header/>
    <Logo/>
    <NavBar/>
    <ShippingContainer>
    <h2>Add your address</h2>
    <form onSubmit={handleSubmit}>
    <Input type="text"
    placeholder='Full Name'
    id='fullName'
    value={fullName}
    name='fullName'
    onChange={handleChange}
     required></Input>
    <Input type="text" 
    id='address'
     value={address}
    name='address'
    onChange={handleChange}
    placeholder='Enter Address' required></Input>
    <Input type="text"
    id='city'
     value={city}
    name='city'
    onChange={handleChange}
    placeholder='Enter City' 
    required></Input>
    <Input type="text" 
    id='postalcode'
     value={postalCode}
    name='postalCode'
    onChange={handleChange}
    placeholder='Enter PostalCode' required></Input>
    <Input type="text"
    id='country'
     value={country}
    name='country'
    onChange={handleChange}
    placeholder='Enter country' required></Input>
    <Button type='sumbit'>Continue</Button>
    </form>

    </ShippingContainer>
    </Fragment>
  )
}

export default ShippingAdress