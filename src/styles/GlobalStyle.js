import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body{
        font-family: 'Roboto', sans-serif;
    }

    button {
        outline: none;
        border: none;
        cursor: pointer;
        padding: 10px;
    }
`;

export default GlobalStyle;