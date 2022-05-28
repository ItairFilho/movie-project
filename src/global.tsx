import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #252B3A;
    }
    button {
        border: none;
    }
    a {
        text-decoration: none;
    }
`;
