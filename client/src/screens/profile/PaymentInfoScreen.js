import React, { useEffect } from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import Header from '../../components/header/Header'
import Logo from '../../components/logo/Logo'
import NavBar from '../../components/navBar/NavBar'
import { Button, Input } from '../../forms/formsStyles'
import ProfileList from './ProfileList'
import { Container, FormContainer, GridContainer, PaymentInfoContainer } from './profileStyles'
import Cleave from 'cleave.js/react'
import { useDispatch, useSelector } from 'react-redux'
import { addCreditCard, getCreditCards, reset } from '../../redux/features/creditCardSlice'
import {toast} from 'react-toastify'


const PaymentInfoScreen = () => {


  const dispatch = useDispatch()
  const {message ,isError,isSuccess,creditCards}= useSelector(state=>state.creditCard)

  const [cardNumber , setCardNumber ] = useState()
  const [name, setName] = useState()
  const [expMonth, setExpMonth] = useState()
  const [expYear, setExpYear] = useState('yyyy')
  const [cardType, setCardType] = useState('')
  const [click, setClick] = useState(false)

 useEffect(() => {
  dispatch(getCreditCards())
  if(isError){
    toast.error(message)
  } else if(isSuccess){
    // toast.success("You've successfuly added new card ")
  } 

 }, [isError,isSuccess,dispatch,reset,message])
 
  const handleType = type =>{
    console.log(type)
setCardType(type,'tt')
  }

  const handleSubmit =(e)=>{
    e.preventDefault()

const cardData={
  cardNumber:cardNumber,
  name,
  expMonth,
  expYear,
  cardType
}
// save data to the database using redux action
dispatch(addCreditCard(cardData))
dispatch(reset())
console.log(cardData,'fd')
  }

const handleClick = ()=>{
setClick(!click)
console.log(click)
}

  // to show only the last 4 digit of the credit card number
const maskCardNumber = num =>{
  let string = String(num);
  let sliced = string.slice(-4);
  let mask =  String(sliced).padStart(string.length, "*")
  return mask
}


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
<PaymentInfoContainer>
{creditCards.map(card=>
<div key={card._id}>
<div className='card-info'>
<img src='../../media/bank-card.png'/>

<div className='card-content'>
<h3>Visa</h3>
  <h5>Debit card ending in {maskCardNumber(card.cardNumber)}</h5>
  <p>expires on {card.expiryMonth}/{card.expiryYear}</p>
  </div>
  </div>
 </div>
 )}
 <FormContainer>
  <h3 onClick={handleClick}>Add new card <span>+</span></h3>
  <div className='line'></div>
  <div style={{display:!click?'block':'none'}}>
<form onSubmit={handleSubmit}>
   <Cleave
   className='cleave'
    delimiter="-"
    options={{
    creditCard: true,
    onCreditCardTypeChanged: handleType
         }}
name="number"
val={cardNumber}
placeholder="Enter Number"
onChange={e => setCardNumber(e.target.value)}
  required
/>
   <Input
type="text"
name="name"
val={name}
placeholder="Name on the card"
onChange={e => setName(e.target.value)}/>
     <div className="input-grp">
                <div className="input-container">
                    <h4>Month</h4>
                    <select value={expMonth} onChange={e=>setExpMonth(e.target.value)} required >
                      <option value="" className='default-option'>MM</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                </div>
                <div className="input-container">
                <h4>Year</h4>
                <select value={expYear} onChange={e=>setExpYear(e.target.value)} required="required">
                      <option value="" className='default-option'>YYYY</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                </div>
            </div>
<Button type='submit'>{`Save ${cardType} card`}</Button>
    </form>
    </div>
    </FormContainer>
    </PaymentInfoContainer>
    </GridContainer>
    </Container>
    </Fragment>
    
  )
}

export default PaymentInfoScreen