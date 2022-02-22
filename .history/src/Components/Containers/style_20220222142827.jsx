import  styled  from "styled-components";



export const  ContainerHeader  = styled.div `
     width: 100vw;
     height: 50px;
     margin: 0;
     position: fixed;
     z-index: 99999;
     background: rgba( 0, 0, 0, 0.7 );
     box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
     backdrop-filter: blur( 7.5px );
     -webkit-backdrop-filter: blur( 7.5px );
     color:white; 
     display: flex;
     align-items: center;
     justify-content: center;
`;



export const ContainerBaner= styled.div `
  width: 100%;
  height: 40vh; 


    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: 40px;
  
    }
`;


export const  ContainerBox = styled.section `
  height: 500px;
  border: solid 3px #aaaaaa;
  width: 80vw;
  margin: 100px  10%;
  border-radius: 8px;
  box-shadow: 0 0 3em Black;
  display: flex;
  `;


export const ContainerIMG = styled.div `

    min-width:400px;
    height:494px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

`;


