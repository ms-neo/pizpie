import styled from "styled-components";


export const ShoppingContiner = styled.div `
position:relative;
width:100%;
height:99vh;
`

export const CartContainer = styled.div `
margin:5vh;
padding:0 5vh;


.line{
    margin:3vh 0;
    width:90%;
    border:1px solid #F0F0F0;
}
.sar{
    font-weight:500;
    font-size:1rem;
}
@media (max-width: 768px) {
    padding:0vh;
  }
  a{
    padding:2vh 0;
    text-decoration:none;
    color:#F14C4C;
    &:hover{
        text-decoration:underline;  
    }
  }
`
export const Cart = styled.div `
display:grid;
grid-template-columns:60% 40%;

@media (max-width: 768px) {
    grid-template-columns:1fr;
    margin:4vh 0;
  }
`
export const ItemsWrapper = styled.div `
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
margin:1vh 2vh;

@media (max-width: 768px) {
    grid-template-columns:1fr;
    margin-top:5vh;
  }
`

export const TotalBox = styled.div `
background:#F5F5F5;
width:300px;
padding:6vh 5vh;
display:flex;
grid-template-columns:1fr;
flex-direction:column;
justify-content:center;
align-items:center;
h4{
    margin:1vh 0;
    font-size:20px;
}
a{
    width:100%
}

@media (max-width: 768px) {
   padding:3vh 0vh;
  }

`
export const ProductInfo = styled.div `
display:flex;
justify-content:flex-start;
align-items:center;
font-size:18px;
cursor:pointer;
img{
    object-fit:cover;
    width:70px;
    height:50px;
margin-right:5vh;
border-radius:1vh;
}
p{
    text-transform: capitalize; 
}
&:hover{
    font-weight:500;
}
@media (max-width: 768px) {
    justify-content:flex-start;

    img{
        width:20%  
    }
  }
`

export const PrdouctList = styled.div `
display:grid;
grid-template-columns:1fr;


`

export const QuantityBtnCart = styled.div `
display:flex;
font-size:1.3rem;
width:100px;
position:relative;
button{
    width:40px;
    height:30px;
    font-weight:500;
    font-size:1.3rem;
    border:none;
    cursor:pointer;
}

div:first-child{
    color:#A6C42B;
    font-weight:900;
}
div:last-child{
    color:#F34107;
    font-weight:800;
}
@media (max-width: 768px) {
    font-size:1.1rem;
    button{
    width:30px;
    height:30px;
    font-size:1.1rem;

}
  }
`

export const DeleteBtn = styled.div `
color:#F34107;
font-weight:bold;
width:50px;
cursor:pointer;
`
export const AddedItemContainer = styled.div `
margin:10vh 20vh;

a{
    color:red;
    text-decoration:none;

}
`

export const AddedWrapper = styled.div `
display:grid;
grid-template-columns:30% 70%;
align-items:center;
background:#F5F5F5;
text-align:center;
width:600px;
height:210px;
margin-bottom:3vh;
.box-one{
height:200px;
width:250px;
}

p{
    font-size:1.1rem;
    font-weight:500;
}
.img-wrapper{
width:100%;
height:150px;
}
img{
    width:60%;
    height:60%;
    object-fit:cover;
    margin-bottom:1vh;
    margin-top:6vh;
}

`

export const ProductFlex = styled.div `
display:grid;
grid-template-columns:repeat(3,1fr);
align-items:baseline;
div{
    margin:0 3vh;
}

@media (max-width: 768px) {
    margin:3vh 0;
    div{
    margin:0 1.5vh;
}
  }
`