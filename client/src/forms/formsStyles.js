import styled from "styled-components";

export const FormWrapper = styled.form `
margin:3vh 0;
display:flex;
flex-direction:column;
`
export const Input = styled.input `
width:80%;
height:40px;
border-radius:5px;
border:none;
background:#fff;
box-shadow: 2px 2px 10px #ddd;
margin:3vh 0;
padding:0 2vh;
`
export const Button = styled.button `
width:150px;
height:45px;
background-color:#F14C4C;
border:none;
border-radius:5vh;
color:#fff;
font-weight:bold;
font-size:1rem;
margin-top:3vh;
cursor:pointer;
position:relative;
overflow :hidden;
transition:.5s transform ease-in-out;
z-index:0;
&::after{
    background-color:#A6C42B;
    border:none;
border-radius:5vh;
    content:'';
    display:block;
    height:100%;
    width:100%;
    position:absolute;
    left:0;
    top:0;
transform:translate(-100%,0) rotate(10deg);
transform-origin :left left;
transition :.3s transform ease-out;
z-index:-1;
}
&:hover::after{
    display:block;
    transform:translate(0,0);
}

`