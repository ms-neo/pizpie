import styled from "styled-components";

export const Container =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
text-align:center;
height:70vh;

@media (max-width: 768px) {
   flex-direction:row;
   height:auto;
  }
`

export const MenuItemContainer =styled.div`
margin:3vh 0;
a{
    text-decoration:none;
    color:#000;
}
@media (max-width: 768px) {
font-size:14px;
  }
`

export const MenuBarImg =styled.img`
width:45%;
margin:.6vh;
object-fit:cover;
@media (max-width: 768px) {
width:35%
  }
`