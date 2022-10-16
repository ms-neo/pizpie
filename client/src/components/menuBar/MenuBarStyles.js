import styled from "styled-components";

export const Container =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
text-align:center;
height:70vh;
${'' /* background:red; */}
@media (max-width: 768px) {
${'' /* width:10%; */}
   flex-direction:row;
   height:auto;
  }
`

export const MenuItemContainer =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:150px;
  height:300px;
a{
    text-decoration:none;
    color:#000;
}

&:hover{
  box-shadow:0px 8px 15px #dddddd;
}
@media (max-width: 768px) {
  width:90px;
  height:100px;
font-size:14px;
  }
`

export const MenuBarImg =styled.img`
width:40%;
margin:.6vh;
object-fit:cover;
@media (max-width: 768px) {
width:35%
  }
`