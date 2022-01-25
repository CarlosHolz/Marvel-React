import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
    }
    body {
        background: #000;
    }
    body, input, button {
        font: 16px Roboto, sans-serif;
    }
    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 15px 20px;
    }
    button {
        cursor: pointer;
    }
`;