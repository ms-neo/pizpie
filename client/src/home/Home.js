import React, { Fragment, useState } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Logo from '../components/logo/Logo'
import MenuBar from '../components/menuBar/MenuBar'
import NavBar from '../components/navBar/NavBar'
import { Button } from '../forms/formsStyles'
import { HomeContent, HomeImg, HomeText, Parent } from './homeStyles'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
      <Fragment>
<Header/>
 <Logo/>
 <NavBar/>
 <Parent>
 <MenuBar></MenuBar>
 <HomeContent>
 <Fragment>
      <h1>Are you Hungry ?</h1>
      <h2>Grab your favorit dish ...</h2>
      <HomeImg src="../media/pizza-homepage.png"></HomeImg>
      <HomeText>Our dishs are made from the best quality ingredients . we choose careflay our food from the healtheist and the cleanest vegtables and grains. to achieve the unforgatable taste and expericnce you might try.</HomeText>
      <Button><Link to='/products'>Shop Now</Link></Button>
      </Fragment>
    </HomeContent>
    </Parent>
<Footer/>
    </Fragment>
  )
}

export default Home