import React from 'react'
import { SpinnerContainer } from './spinnerStyle'

const Spinner = () => {
  return (
    <SpinnerContainer>
    <div className="spinner-container">
    <div className="loading-spinner"></div>
  </div>
  </SpinnerContainer>
  )
}

export default Spinner