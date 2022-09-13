import React, { Fragment } from 'react'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { Button, FormWrapper, Input } from '../../forms/formsStyles'
import { Container } from './pagesStyles'

const AddProduct = () => {
  return (
    <Fragment>
    <Header/>
    <Logo/>
    <NavBar/>
  <Container>
    <div>
    <h2>Add Product</h2>
    <FormWrapper>
    <label>Name :</label>
    <Input></Input>
    <label>Price :</label>
    <Input></Input>
    <label>Image :</label>
    <Input></Input>
    <label>ingredients :</label>
    <Input></Input>
    <label>countInStock :</label>
    <Input></Input>
    <label>Category :</label>
    <select>
        <option>pizza</option>
        <option>Arabic Food</option>
        <option>Salad</option>
    </select>
    <Button>Add product</Button>
    </FormWrapper>
    </div>
    </Container>
    </Fragment>
  )
}

export default AddProduct