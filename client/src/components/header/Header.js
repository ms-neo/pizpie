import React, { Fragment } from 'react'
import { HeadingPhoto, OrangeRect, Parent, TopRosemary } from './headerStyles.js'

const Header = () => {
  return (
    <Fragment>
 <Parent>
    <HeadingPhoto src="../media/heading-Image.jpg" />
    <OrangeRect></OrangeRect>
    <TopRosemary src="../media/top-rosemary.png"/>
    </Parent>
    </Fragment>
    
  )
}

export default Header