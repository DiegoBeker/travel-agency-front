import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body{
        font-family: 'Roboto', sans-serif;
        background-image: url("https://user-images.githubusercontent.com/114487600/242041015-701a6fca-36e9-4d29-9e2a-2393055a1e93.jpg");
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