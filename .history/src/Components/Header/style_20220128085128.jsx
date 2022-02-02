import styled from "styled-components"; 

export const Baner= styled.div `
  width: 100vw;
    height: 45vh; 

    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    }
 
     text {
       position: absolute;
       z-index: 999999;
       color: #f30000;
       font-size: 50px;
     }

`;