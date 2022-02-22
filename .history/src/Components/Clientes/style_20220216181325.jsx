import styled from "styled-components";  
import { Sobre } from '../Sobre/style';



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
