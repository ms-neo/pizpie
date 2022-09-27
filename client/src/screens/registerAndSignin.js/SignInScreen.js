import React, {Fragment, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Logo from '../../components/logo/Logo';
import {useDispatch, useSelector} from 'react-redux'
import {Button, Input, PizzaIconWrapper, SignInContainer, Container} from './registerSigninStyles';
import {signin} from '../../redux/features/userSlice';
import {toast} from 'react-toastify';
import { getCart } from '../../redux/features/cartoSlice';

const SignInScreen = () => {


    const [formData, setFormData] = useState({email: '', password: ''})

    const {email, password} = formData
    const {user ,isSuccess, isError, message} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate= useNavigate()
   

    useEffect(() => {
      
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            toast.success("you successfully logged")
            dispatch(getCart(user._id))
            navigate('/')
        }

    }, [dispatch ,isError, isSuccess, user,message,getCart])

    const submitHandler = (e) => {
        e.preventDefault()   
          const userData ={
            email,
            password
          }
      dispatch(signin(userData))
    if (user){
        navigate('/')
    }
    }

    const handleSignUpClick = () => {
        navigate('/register')
            }

    const handleChange = e => {
        console.log(e.target.value)
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
  

    return (
        <Fragment>
            <Header/>
            <Logo/>
            <Container>
                <SignInContainer>
                    <div>
                        <h3>Sign in to your account</h3>
                        <form onSubmit={submitHandler}>
                            <Input
                                onChange={handleChange}
                                id="email"
                                name="email"
                                value={email}
                                type="email"
                                placeholder='Email'
                                required></Input>
                            <Input
                                onChange={handleChange}
                                id="password"
                                name='password'
                                value={password}
                                type="password"
                                placeholder='Password'
                                required></Input>
                            <Button type='submit'>Sign In</Button>
                        </form>
                        <p>or you don't have account ? 
                                <span onClick={handleSignUpClick}> click here</span>
                        </p>
                    </div>
                    <PizzaIconWrapper>
                        <img src="../../media/pizza-icon.png"></img>
                    </PizzaIconWrapper>
                </SignInContainer>
            </Container>
            <Footer/>
        </Fragment>
    )
}

export default SignInScreen