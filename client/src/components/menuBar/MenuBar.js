import React from 'react'
import { Link} from 'react-router-dom'
import { Container, MenuBarImg, MenuItemContainer } from './MenuBarStyles'


const MenuBar = () => {

  return (
    <Container>
    <MenuItemContainer  >
    <Link to='/products'>
     <MenuBarImg src='../../media/categories.png' />
    <p>All dishes</p>
    </Link>
    </MenuItemContainer>
    <MenuItemContainer>
    <Link to='/products/pizza'  >
    <MenuBarImg src='../../media/pizza-sliced.png' />
    <p>pizza</p>
    </Link>
    </MenuItemContainer>
    <MenuItemContainer >
    <Link to='/products/arabic-dishes'>
    <MenuBarImg src='../../media/oil-bottole.png' />
    <p>arabic dishes</p>
    </Link>
    </MenuItemContainer>
    <MenuItemContainer>
    <Link to='/products/salads'>
    <MenuBarImg src='../../media/salad.png' />
    <p>salads</p>
    </Link>
    </MenuItemContainer>
    </Container>
  )
}

export default MenuBar