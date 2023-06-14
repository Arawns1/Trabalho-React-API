import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px ;
        padding: 0px;
        box-sizing: border-box;
    }
    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: ${({theme}) => theme.colors.body};

    }
    /* html, body{
        width: 100vw;
        height: 100vh;
    } */

    a{
        all: unset;
    }   
`