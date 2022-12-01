import styled from "styled-components";

export const Container =styled.div`
display:grid;
grid-template-columns:20% 60%;
padding-bottom:5vh;
.sar{
    font-weight:500;
    font-size:1rem;
}
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
 grid-gap:3vh;

 @media (max-width:768px){
    margin:3vh;
    grid-template-columns:1fr; 
}
`

export const CardContent  =styled.div`
display:grid;
grid-template-columns:1f;
width:250px;
height:350px;
padding:5vh 3vh;
box-shadow:0px 8px 15px #dddddd;


div{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
h2{
    font-size:1.2rem;
    text-transform: capitalize; 
}
p{
    font-size:14px;
}
span{
    font-weight:bold;
}
img{
    object-fit:cover;
    border-radius:10px;
    width:100%;
    height:180px;
    margin: 0 auto;
    transition:.3s transform ease-in-out;
    &:hover{
transform:scale(1.1)
 }
}
button{
    width:60%;
    height:35px;
  margin: 0 auto;
}

@media (max-width:768px){
    width:90%;
height:300px;
img{
    width:100%;
  display:flex;
  justify-content:center;
}
}
`