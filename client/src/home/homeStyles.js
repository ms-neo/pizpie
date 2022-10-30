import styled from "styled-components";

export const Parent =styled.div`
display:grid;
grid-template-columns:20% 70%;
min-height:auto;

@media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const HomeContent =styled.div`
margin-left:7vh;

h1{
    margin:3.2vh 0 1.7vh 0;
}
a{
    text-decoration:none;
    color:#fff;
}
@media (max-width: 768px) {
  h1{
   font-size:2rem;
}
  }

`

export const HomeImg =styled.img`
width:40%;
margin:2vw 0;
@media (max-width: 768px) {
    width: 60%;
  }
`

export const HomeText =styled.p`
width:40%;
@media (max-width: 768px) {
    width: 80%;
  }
`

