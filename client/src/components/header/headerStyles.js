import styled from 'styled-components'

export const Parent = styled.div`
position:relative;
`
export const HeadingPhoto =styled.img`
 height:50px;
 width:100%;
 object-Fit:cover;
margin-bottom:1vh;
`

export const OrangeRect =styled.div`
width:80px;
height:500px;
background-color:#F14C4C;
position:absolute;
top:0;
right:15vh;
z-index:2;

@media (max-width: 768px) {
    display: none;
  }
`

export const TopRosemary =styled.img`
width:360px;
top:0vh;
right:0vh;
position:absolute;
@media (max-width: 768px) {
    display: none;
  }

`

