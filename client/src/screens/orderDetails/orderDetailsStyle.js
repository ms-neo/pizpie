import styled from "styled-components";


export const OrderContainer =styled.div`
margin :3vh 10vh;
.line{
    width:100%;
    height:1px;
    background:#ddd;
    margin:2vh 0;
}
@media (max-width:768px){
    margin :3vh 5vh;
    
}
`

export const OrderWrapper=styled.div`
margin:2vh 0;
display:flex;
justify-content:space-between;
@media (max-width:768px){
    flex-direction:column;
}
`
export const PlaceOrderContainer = styled.div`

display:grid;
grid-template-columns:55% 1% 40%;
grid-gap:6vh;
@media (max-width:768px){
    grid-template-columns:1fr;
}
`
export const CartItems = styled.div`

text-align:center;
display:grid;
grid-template-columns:repeat(4,35%);
margin-top:7vh;
align-items:center;
justify-content:flex-start;

img{
   
    width:30%;
    height:50px;
    border-radius:1vh;
  
}
div{
    display:flex;
    justify-content:flex-start;
    align-items:center;
}
p{
    margin-left:3vh;
}
`

export const OrderSummeryContainer = styled.div`
display:flex;
flex-direction:column;
border:1px solid #ddd;
width:50%;
padding:7vh 5vh;

h4{
    margin:1.5vh 0;
}
img{
    width:20%;
}
p{
    line-height:1.3;
}
@media (max-width:768px){
    width:270px;
    padding:5vh 3vh;
}
`

export const VLine = styled.div`
    width:1px;
    height:400px;
    background:#ddd;
    margin-left:1vh;
    @media (max-width:768px){
        width:100%;
    height:1px;
}
`
export const OrderItemsContainer = styled.div`

`