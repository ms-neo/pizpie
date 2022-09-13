import styled from "styled-components";

export const Container =styled.div`
display:grid;
grid-template-columns:20% 60%;

@media (max-width:768px){
    grid-template-columns:1fr;
}
`

export const ProductsContainer =styled.div`
`

export const Card  =styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
 margin-top:5vh;
 grid-gap:2vh;
 a{
    text-decoration:none;
 }
 @media (max-width:768px){
    margin:3vh;
    grid-template-columns:1fr; 
}
`

export const CardContent  =styled.div`
display:grid;
grid-template-columns:1f;
width:250px;
height:300px;
padding:20px;
box-shadow:0px 8px 15px #dddddd;

div{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
p{
    font-size:14px;
}
span{
    font-weight:bold;
}
img{
    object-fit:cover;
    width:100%;
    height:180px;
    margin: 0 auto;
}
button{
    width:60%;
    height:35px;
  margin: 0 auto;
}
@media (max-width:768px){
    width:330px;
height:300px;
img{
    width:50%;
  display:flex;
  justify-content:center;
}
}
`