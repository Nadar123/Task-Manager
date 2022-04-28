import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
    html {
        font-size: 16px;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-size: 1.1rem;
        margin: 0;
        font-family: Poppins, sans-serif;
        background-color: #fff;
    } 
    ul, li, p, h1, h2, h3, h4 {
    margin: 0;
    padding: 0;
    }
    ul {
    list-style-type: none;
    }
`;
