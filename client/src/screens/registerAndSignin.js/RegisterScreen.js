import React, { Fragment, useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import { FormWrapper, Input, Button } from './registerSigninStyles'
import {toast} from 'react-toastify'
import {useDispatch ,useSelector} from 'react-redux'
import { register, reset } from '../../redux/features/userSlice'

const RegisterScreen = () => {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:'',
  })

const {name ,email,password ,password2}=formData

const navigate =useNavigate()
const disaptch =useDispatch()

const {user ,message ,isLoading,isSuccess ,isError}= useSelector(state=>state.auth)

useEffect(() => {
  if (isError){
    toast.error(message)
  } else if (isSuccess || user){
    disaptch(reset())
    navigate('/')
  }
  
}, [user ,message ,isLoading,isSuccess ,isError,disaptch,reset])


const handleSumbit = e =>{
  e.preventDefault()
  if (password !== password2){
    toast.error('password are not match')
  } else{
    const userData ={
      name,
      email,
      password
    }
    // save data to the database by
    disaptch(register(userData))

  }
}

const handleChange = e =>{
  console.log(e.target.value)
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))
}

  return (
    <Fragment>
  <Header/>
  <Logo/>
    <FormWrapper>
    <h2>Hello !</h2>
    <h4>Sign up to get started !!</h4>
    <form onSubmit={handleSumbit}>
        <Input onChange={handleChange} id="name" name="name" value={name} type="text" placeholder='Enter name' required></Input>
        <Input onChange={handleChange} id="email" name="email" value={email} type="email" placeholder='Email' required></Input>
        <Input onChange={handleChange} id="password" name='password' value={password} type="password" placeholder='Password' required></Input>
        <Input onChange={handleChange} id="password2" name='password2' value={password2} type="password" placeholder='Confirm Password' required></Input>
        <Button type='sumbit'>Create Account</Button>
        <p>or sign in <span><Link to='/signin'>here</Link></span></p>
        </form>
    </FormWrapper>

<Footer/>
    </Fragment>
  )
}

export default RegisterScreen