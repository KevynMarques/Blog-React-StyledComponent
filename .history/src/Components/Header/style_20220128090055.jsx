import styled from "styled-components"; 

export const Baner= styled.div `
  width: 100vw;
  height: 45vh; 
  display: flex;
  align-items: center;
  justify-content: center;

  @import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@1,300&display=swap');

    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    }
 
     h1 {
       position: absolute;
       z-index: 999999;
       color: #f30000;
       font-size: 50px;
    
     }

`;