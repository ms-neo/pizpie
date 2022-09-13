import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { H2 } from './logoStyles'

const Logo = () => {
  return (
      <Fragment>
    <H2><Link to="/">PizPie</Link></H2>
    </Fragment>
  )
}

export default Logo