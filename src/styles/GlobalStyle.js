import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body{
        font-family: 'Roboto', sans-serif;
        background-image: url("https://img.freepik.com/fotos-gratis/bela-praia-tropical-mar-oceano-com-nuvem-branca-azul-ceu-e-copyspace_74190-8663.jpg?w=1380&t=st=1685463538~exp=1685464138~hmac=721795d0a76494235930c324b46ebaa19e5ce410048974a11a207393280bd0bd");
        background-position:center;
    }

    button {
        outline: none;
        border: none;
        cursor: pointer;
        padding: 10px;
    }
`;

export default GlobalStyle;