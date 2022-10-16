import styled from "styled-components";

export const ProductContaienr =styled.div`
padding:4vh 10vh;
height:auto;
@media (max-width:768px){
    padding:4vh 2vh;
}
` 
export const CardDetails = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
width:800px;
height:300px;
padding:7vh 6vh;
grid-gap:8vh;
box-shadow:0px 8px 15px #dddddd;
margin-top:1vh;
.image-wrapper{
    width:390px;
    height:300px;
}
img{
    width:100%;
    height:100%;
    border-radius:10px;
    object-fit:cover;
}
.product-content{
    margin-top:2vh;
}
p{
    margin:3vh 0;
}
h3{
    margin:10px 0;
}
button{
    width:100%
}
@media (max-width:768px){
    grid-template-columns:1fr;
    padding:4vh 3vh;
    width:300px;
height:auto;
grid-gap:2vh;
.image-wrapper{
    width:300px;
}
}

`

export const QuantityBtn = styled.div`
text-align:center;
background:#A6C42B;
border-radius:50px;
color:#fff;
font-size:22px;
font-weight:bold;
display:flex;
justify-content:space-between;
align-items:center;
padding:2vh;
width:120px;
height:10px;
`