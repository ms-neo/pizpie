import styled from "styled-components";

export const SpinnerContainer =styled.div`
 position:absolute;
  top:0;
  left:0%;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color:#000;
  width:100%;
  height:100%;
  opacity:.4;
  z-index:200;
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-spinner {
  width: 10px;
  height: 10px;
  border: 7px solid #f3f3f3; /* Light grey */
  border-top: 7px solid #383636; /* Blue */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  ${'' /* opacity:.8; */}
 
}

.spinner-container {
  display: grid;
  justify-content: center;
  align-items: center;
  ${'' /* height: 30px; */}
  ${'' /* background:#000; */}


}
`