import styled from "styled-components";

export const Container =styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
padding:0 40vh;
margin-top:3vh;

@media (max-width: 768px) {
    padding:0 6vh;
  }
`

export const NavLinks =styled.div`
display:flex;
justify-content:space-between;
align-items:center;
min-width:100px;

a{
    text-decoration:none;
    color:#000;
    font-weight:400;
}
`

export const NavBarItems =styled.div`
display:flex;
cursor:pointer;
margin:0 1vh;
z-index:200;
position:relative;
justify-content:start;
align-items:center;

.red-cycle{
    background-color:red;
    width:10px;
    height:10px;
    border-radius:50%;
    position:absolute;
    top:10px;
    left:0px;
}
`

export const NavBarImg =styled.img`
width:15%;
margin:0 1vh;
padding:0;
object-fit:cover;
`

export const DropDown =styled.div`
position:relative;
display:inline-block;

:hover .dropDownContent{
display:block;
}
`

export const DropBtn =styled.button`
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background:#fff;
`

export const DropDownContent =styled.div`
display:none;
position:absolute;
background:#fff;
div{
    display: flex;
flex-direction:column;
  justify-content: center;
    min-width: 110px;
    min-height:44px;
    padding:0 1vh;
:hover{
    background:#ddd;
}
}

`