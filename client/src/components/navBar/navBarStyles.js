import styled from "styled-components";

export const Container =styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
padding:0 40vh;
margin-top:5vh;

@media (max-width: 768px) {
    padding:0 6vh;
    justify-content:center;
  }
`

export const NavLinks =styled.div`
display:flex;
justify-content:space-between;
align-items:center;
min-width:100px;
position:relative;


transition:.5s transform ease-in-out;

a{
    text-decoration:none;
    color:#000;
    font-weight:400;
}
span {
  opacity:0;
    transform:translate(0,-50%);
    transition:.5s transform ease-in-out;
    width:50px;
    height:2px;
    background-color:#ddd;
  position:absolute;
  bottom:-2vh;
  left:0vh;

}
&:hover span{
  opacity:1;
    transform:translate(0,0);
    width:90px;
    ${'' /* transform:scale(1.2); */}
}
`

export const NavBarItems =styled.div`
display:flex;
cursor:pointer;
margin:0 1vh;
z-index:200;
${'' /* position:relative; */}
justify-content:start;
align-items:center;


.red-cycle{
    background-color:red;
    width:10px;
    height:10px;
    border-radius:50%;
    position:absolute;
    top:10px;
    left:10px;
}

`

export const NavBarImg =styled.img`
width:15%;
padding:0 1vh;
object-fit:cover;
`

export const DropDown =styled.div`
position:relative;
display:inline-block;

&:hover .dropDownContent{
display:block;
}
`

export const DropBtn =styled.button`
  ${'' /* padding: 16px; */}
  font-size: 16px;
  border: none;
  cursor: pointer;
  background:#fff;

`

export const DropDownContent =styled.div`
display:none;
position:absolute;
background:#fff;
min-width: 150px;
right:-7vh;
box-shadow:0px 8px 15px #dddddd;
div{
    display: flex;
flex-direction:column;
  justify-content: center;
    padding:3vh;
:hover{
    background:#F5F5F5;
}
}
div:last-child{
      color:red;
    }

`