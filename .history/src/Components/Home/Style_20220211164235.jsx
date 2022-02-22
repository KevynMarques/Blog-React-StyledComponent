import styled from "styled-components";  


export const  Home  = styled.div `
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

export const HomeB = styled.button `
background:${props => props.ativo ? '#2e2e2e' : '#000000'};
font-family: Arial, Helvetica, sans-serif;
font-style:normal;
color:#ffffff;
border:3px solid #ffffff;
text-shadow:0px -1px 3px #000000;
box-shadow:2px 2px 5px #000000;
box-shadow:2px 2px 5px #000000;
box-shadow:2px 2px 5px #000000;
border-radius:25px 25px 25px 25px;
border-radius:25px 25px 25px 25px;
border-radius:25px 25px 25px 25px;
width:130px;
height: 30px;

&:hover {
  background-color: black;
}

cursor:pointer;
margin:0 auto;
margin-left: 35px;

&:active {
  transform: scale(0.9);
}

`;


export const Equip = styled(HomeB) `

background:${props => props.ativoH ? '#2e2e2e' : '#000000'};

`;

export const Comportamental = styled(HomeB) `

background:${props => props.ativoE ? '#2e2e2e' : '#000000'};

`;


export const MeusCaes = styled(HomeB) `

background:${props => props.ativoC ? '#2e2e2e' : '#000000'};

`;


export const Serviços = styled(HomeB) `

background:${props => props.ativo ? '#2e2e2e' : '#000000'};

`;

export const Contato = styled(HomeB) `

background:${props => props.ativo ? '#2e2e2e' : '#000000'};

`;



  