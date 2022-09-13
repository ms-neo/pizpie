import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { Button, Input } from '../../forms/formsStyles'
import ProfileList from './ProfileList'
import { Container, FormContainer, GridContainer, ProfileContainer, ProfileContent } from './profileStyles'

const ProfileScreen = () => {

  const {user} =useSelector(state=>state.auth)
  
  return (
    <Fragment>
    <Header/>
    <Logo/>
    <NavBar/>
    <Container>
    <GridContainer>
    <div>
<ProfileList/>
</div>
<ProfileContainer>
<div className='account-info'>
<div>
  <h4>Name :</h4>
  <p>{user.name}</p>
  <h4>Email :</h4>
  <p>{user.email}</p>
</div>
</div>
<h3>update your Account</h3>
    <div style={{width:"50%"}}>
    <div className='line'></div>
    <FormContainer>
    <label>Name</label>
   <Input placeholder={user.name}></Input>
   <label>Email</label>
   <Input placeholder={user.email}></Input>
   <Button>Update Account</Button>
   </FormContainer>
    </div>
    </ProfileContainer>
    </GridContainer>
    </Container>
    </Fragment>
  )
}

export default ProfileScreen