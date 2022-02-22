import styled from "styled-components";
import Styled from "styled-components";


export const Loading = styled.div `

width: 200px;
  height: 200px;
  box-shadow: 16px 14px 20px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  

  &::before {
    content:"" ;
  background-image: conic-gradient(

          #00a6ff 20deg, 
          transparent 120deg   
  );
           width: 150%;
           height: 150%;
           position: absolute;
           animation: rotate 2s linear infinite;
}
  
`;