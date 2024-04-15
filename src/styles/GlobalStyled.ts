import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{}>`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family:"Inter";
    }

    body {
        // Mobile
        width:100%;
        background-color:#121725;
        color:black;
        min-height:100vh;
        @media screen and (max-width:767px){
             background-color:#EEE9DA; 
        }

        // Tablet
        @media screen and (min-width:768px) and (max-width:1023px){
               background-color:#BDCDD6; 
            /* padding: 3% 5%; */
        }

        // Labtop
        @media screen and (min-width:1024px) and (max-width:1439px){
               background-color:#93BFCF; 
        }

        // Desktop
        @media screen and (min-width:1440px){
               background-color:#6096B4; 
        }
        @media screen and (min-width:1920px){
               background-color:#CADEFC; 
        }
    }
`;

export default GlobalStyles;

