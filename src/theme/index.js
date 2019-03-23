import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins');

    html {
    font-family: 'Poppins', sans-serif;
    }

    body {
    background-color: #FFFFFF;
    margin: 0;
    }

    html,
    body,
    div#___gatsby,
    div#___gatsby>div {
    height: 100%;
    }


    div#___gatsby>div {
    display: flex;
    flex-direction: column;
    padding: 0 5%;
    }

    @media (min-width: 1025px) {
    div#___gatsby>div {
        padding: 0 7%;
    }
    }

    @media (min-width: 1281px) {
    div#___gatsby>div {
        padding: 0 17%;
    }
    }

    a,
    a:visited,
    a:hover,
    a:focus {
    text-decoration: none;
    }
`
export { GlobalStyle }
