import styled from "styled-components";

export const Container=styled.div`
display:flex;
margin-top:15vh;
justify-content:space-around;
align-items:flex-end;
div{
    text-align:center;
}
h1{
    margin-bottom:2vh;
}
img{
margin-top:3vh;
width:130%;
}
@media (max-width:768px){
    justify-content:center;
    align-items:center;
    img{
margin-top:3vh;
width:100%;
}
}
`