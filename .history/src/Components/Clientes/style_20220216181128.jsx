import styled from "styled-components";  
import { Sobre } from '../Sobre/style';


export const Teste = styled.div `
 text-align: center;
 font-size: 16px;
 margin-top: 50px;
 font-family: Arial, Helvetica, sans-serif;
background-color: black;
`;

export const Baner= styled.div `
  width: 100%;
  height: 40vh; 


    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: 40px;
  
    }
`;

export const Container = styled(Sobre) `
         margin-top: 40px; 
    img {
      margin-top: -58px;
    }
`;
