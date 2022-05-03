import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
   @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

/* variables */

:root {
    --heading-color: #444;
    --text-color: #999;
    --primary-color: #69e3f1;
    --highlight-color: #d13267;
    --bg-color: #f4f4f4;
}


/* base styles */

body {
    font-family: Poppins, sans-serif;
    margin: 0;
    font-size: 1.1em;
    background: var(--bg-color);
}

ul,
li,
p,
h1,
h2,
h3,
h4 {
    margin: 0;
    padding: 0;
}

ul {
    list-style-type: none;
}


/* layout */

.page-title {
    font-size: 1em;
    color: var(--heading-color);
    display: inline-block;
    color: black;
}

.btn {  
    background-color: var(--primary-color);
    padding: 8px 12px;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    border: 1px solid var(--primary-color);
}

.btn:hover {
    color: var(--primary-color);
    background: transparent;
}


/* forms */

label {
    display: block;
    margin: 24px auto;
}

label span {
    display: block;
    margin-bottom: 6px;
}

input,
textarea {
    padding: 8px 6px;
    font-size: 1em;
    color: #777;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
}

textarea {
    min-height: 160px;
}

.error {
    color: red;
    font-size: 14px;
    background: #eee8e8;
    border: 1px solid red;
    border-radius: 4px;
    padding: 8px;
    margin: 10px 0;
}

`;
