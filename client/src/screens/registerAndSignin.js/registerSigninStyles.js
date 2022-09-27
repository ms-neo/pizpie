import styled from "styled-components";

export const Container =styled.div`

`

export const FormWrapper=styled.div`
padding:10vh 20vh;
width:600px;
a{
  color:red;
  cursor:pointer;
  text-decoration:none;
}
input[type=text]{
    width:60%;
}
@media (max-width: 768px) {
    padding:8vh 5vh;
   width:300px;

  }
`

export const NameWrapper =styled.div`
display:grid;
grid-template-columns:1fr 1fr;
`

export const Input = styled.input`
width:80%;
height:40px;
border-radius:5px;
border:none;
background:#fff;
box-shadow: 2px 2px 10px #ddd;
margin:3vh 0;
padding:0 2vh;
`

export const Button =styled.button`
width:80%;
height:45px;
background-color:#F14C4C;
border:none;
border-radius:5vh;
color:#fff;
font-weight:bold;
font-size:1rem;
margin:2vh 0;
cursor:pointer;
`

//sign in style
export const SignInContainer = styled.div `
padding:19vh 20vh;
display:grid;
grid-template-columns:40% 50%;
span{
  color:red;
  cursor:pointer;
}
@media (max-width: 768px) {
    padding:8vh 5vh;
    grid-template-columns:1fr;
  }
`

export const PizzaIconWrapper = styled.div`
margin-top:8vh;
margin-left:10vh;
img{
    object-fit:cover;
width:25%
}
@media (max-width: 768px) {
    img{
        width:40%
    }

  }
`
