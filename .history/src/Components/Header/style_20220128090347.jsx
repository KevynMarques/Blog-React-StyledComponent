import styled from "styled-components"; 

export const Baner= styled.div `

 @import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@1,300&display=swap');

  width: 100vw;
  height: 45vh; 
  display: flex;
  align-items: center;
  justify-content: center;


    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    }
 
     h1 {
       position: absolute;
       z-index: 999999;
       color: #ff0000;
       font-size: 40px;
       font-family: 'Prompt', sans-serif;
       margin-top: -70px;
    
     }

`;