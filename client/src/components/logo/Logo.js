import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { H2, LogoContainer, Square } from './logoStyles'

const Logo = () => {
  return (
      <Fragment>
      <LogoContainer>
      <H2><Link to="/">PizPie</Link></H2>
    <Square></Square>
      </LogoContainer>

    </Fragment>
  )
}

export default Logo