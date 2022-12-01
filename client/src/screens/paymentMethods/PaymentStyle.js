import styled from "styled-components";

export const Container = styled.div `
margin:10vh 18vh;
display:grid;
grid-template-columns:35% 25% 50%;
.vline{
    position:absolute;
    left:-5vh;
    top:1vh;
    width:1px;
    height:300px;
    background:#ddd;
}
.sar{
    font-weight:500;
    font-size:1rem;
}
@media (max-width:768px){
    grid-template-columns:1fr;
    margin:8vh 6vh;
    .vline{
    left:0vh;
    top:-2vh;
    width:100%;
    height:1px;
}
}

`

export const PaymentContainer = styled.div `
${'' /* background:red; */}
width:300px;
.payment-input{
    width:60%;
height:25px;
border-radius:5px;
border:none;
background:#fff;
box-shadow: 2px 2px 10px #ddd;
margin:3vh 0;
padding:1.5vh 10vh;
}
.expiry-elments{
    width:35%;
    margin:1vh;
    padding:1.5vh 6vh;   
}
@media (max-width:768px){
   margin:5vh 0;
}
`

export const AddressContainer = styled.div`
margin-bottom:3vh;
position:relative;

h3{
    margin-bottom:1.5vh;
}
`
export const DisplayAddress = styled.div `
width:50%;
display:flex;
justify-content:space-between;
align-items:flex-end;

p{
    margin-bottom:.5vh;
}
@media (max-width:768px){
   margin:3vh 0;
}
`
export const CreditCardContainer = styled.div `
width:50%;
div{
    display:flex;
    justify-content:space-between;
}
input{
margin-right:6vh
}
`

export const OrderSummeryContainer = styled.div`
background:#F5F5F5;
width:270px;
padding:6vh 5vh;
position:relative;

span{
    font-weight:bold;
}
button{
    width:80%;
}
h3{
    margin-bottom:3vh;
}
p{
    margin:1.3vh 0;
}
@media (max-width:768px){
   margin:3vh 0;
   padding:3vh;
}
`

export const ExpiryEleContainer = styled.div `
display:flex;
${ ''/* width:20%; */}
`