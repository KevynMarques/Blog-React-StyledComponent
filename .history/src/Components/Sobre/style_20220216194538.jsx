import styled from "styled-components";  

export const Baner= styled.div `
  width: 100%;
  height: 40vh; 


    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  
    }
`;



export const  Sobre  = styled.section `
  height: 500px;
  border: solid 3px #aaaaaa;
  width: 80vw;
  margin: 100px  10%;
  border-radius: 8px;
  box-shadow: 0 0 3em Black;
  display: flex;
  
  
  div {
    width: 35%;
    height:494px;
    margin-top: -146px;
    background-color: black;
  }

  img {
    object-fit: cover;
    width: 600px;
    height: 100%;
    border-radius: 8px;
  }

p {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin:20px;
  } 
`; 



export const  Dogs  = styled(Sobre) `
 
`; 



