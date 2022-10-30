import styled from "styled-components";

export const ShippingContainer =styled.div`
padding:10vh 20vh;
display:flex;
flex-direction:column;

form{
    display:flex;
flex-direction:column;
    width:50%;
}
button{
    width:50%;
}
@media (max-width: 768px) {
    padding:10vh 3vh;
    align-items:center;
  
  form{
    width:70%;
}
button{
    width:70%;
}
}
`
