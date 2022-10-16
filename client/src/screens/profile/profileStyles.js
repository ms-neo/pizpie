import styled from "styled-components";

export const Container = styled.div`
margin:5vh 15vh;

.line{
    width:100%;
    height:1px;
    background:#ddd;
    margin:3vh 0;
}
.vline{
    width:100%;
    border:1px solid #ddd;
}
a{
    text-decoration:none;
    color:#000;
}
.default-option{
    background:red;
}
@media (max-width:768px){
    margin:5vh 4vh;
}
`
export const GridContainer = styled.div`
display:grid;
grid-template-columns:20% 70%;

a{
    text-decoration:none;
    color:#000;
}
@media (max-width:768px){
    grid-template-columns:1fr; 
}
`
//profile side list
export const ProfileContent =styled.div`
display:grid;
grid-template-columns:1fr;
grid-gap:10vh;
margin-top:2vh;
font-weight:700;
a{
    color:black;
    &:hover{
        color:#F14C4C;;
    }
       &:focus{
        color:#F14C4C;;
        border-bottom:1px solid #ddd;
    }

}
div{
    padding:2vh;
    ${'' /* background:red; */}
 

}
@media (max-width:768px){
    grid-template-columns:repeat(4,1fr); 
    grid-gap:2vh;
    margin-bottom:3vh;
    div{
    padding:0vh;
}
}

`
//profile page
export const ProfileContainer=styled.div`
margin-top:5vh;
div{
    margin-bottom:3vh;
}
p{
    margin-bottom:2vh;
}
.account-info{
    margin-bottom:6vh;
}
`
export const FourIconContainer = styled.div`
display:flex;
justify-content:center;

a{
    text-decoration:none;
    color:#000;
}
@media (max-width:768px){
    margin:5vh;
}
`

export const ProfileWrapper =styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:9vh;
margin:5vh;
img{
    width:20%
}
.card{
    width:200px;
    height:150px;
    object-fit:cover;
    box-shadow:0px 8px 15px #dddddd;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    grid-gap:1vh;
    transition:.3s transform ease-in-out;
    overflow: hidden;
    &:hover{
    transform:scale(1.2);
}

span{
    transform:translate(150%,0);
    transition:.3s transform ease-in-out;
    width:50%;
    height:2px;
    background-color:red;
  
}
&:hover span{
    transform:translate(0,0);
    transform:scale(1.2);
}
}

@media (max-width:768px){
    grid-gap:2vh;
    .card{
    width:175px;
    }
}
`

export const AddressInfo =styled.div`
display:grid;
grid-template-columns:1fr;
border:1px solid #dddddd;
width:500px;
box-shadow:0px 8px 15px #dddddd;
margin-top:2vh;

button{
    width:30%;
}

h3{
    margin-bottom:2vh;
}
.userAdress-info{
    padding:5vh;
}
@media (max-width:768px){
width:300px;
button{
    width:100%;
}
}
`

export const AddressOptions =styled.div`
display:flex;
justify-content:space-around;
div{
border:1px solid #ddd;
width:100%;
padding:20px 0;
text-align:center;
}
@media (max-width:768px){
    width:100%;
}
`


export const OrderContainer =styled.div`
margin-top:5vh;
`

export const OrderGrid =styled.div`
display:grid;
grid-template-columns:25% 70%;
grid-gap:3vh;
padding:7vh 5vh;
width:700px;
height:120px;
box-shadow:10px 10px 20px #ddd;
margin-bottom:10vh;
h5{
    margin-bottom:1vh;
    color:#818D97;
}
@media (max-width:768px){
    grid-template-columns:1fr 1fr;
    width:300px;
    height:auto;
    padding:7vh 3vh;
}

`
export const Column1 =styled.div`
width:150px;
grid-gap:2vh;
margin-bottom:2vh; 
position:relative;
.h-line{
width:1px;
height:140px;
background-color:#ddd;
position:absolute;
top:0;
right:0;

}
`
export const ImgWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
img{
    width:40px;
    height:40px;
    object-fit:cover;
    padding:.5vh;
}

`
export const Column2 =styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
grid-template-rows:repeat(2,1fr);
grid-gap:4vh;
.more-details{
    cursor:pointer;
    &:hover{
    color:red;
    font-weight:500;
    }
}
@media (max-width:768px){
    grid-template-columns:repeat(1,1fr);
    grid-template-rows:repeat(3,1fr);
    .order-hide{
        display:none;
    }
}
`


export const PaymentInfoContainer =styled.div`
width:50%;
.cleave, select{
    width:80%;
height:40px;
border-radius:5px;
border:none;
background:#fff;
box-shadow: 2px 2px 10px #ddd;
margin:3vh 0;
padding:0 2vh;
}
.input-grp{
    display:grid;
    grid-template-columns:1fr 1fr ;
}
img{
width:30%;
margin-right:5vh;
}
.card-info{
    display:flex;
    justify-content:flex-start;
    align-items:center
}
.card-content{
    margin-top:2vh;
}

@media (max-width:768px){
    width:100%;
}
`

export const FormContainer =styled.div`
width:300px;
h3{
    cursor:pointer;
    margin-top:4vh;
}
`