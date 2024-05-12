import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
   
   * {
       box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.colors.background};
    }

    h2 {
        font-family: 'Outfit';
        font-style: normal;
        font-weight: 900;
        font-size: 22px;
        line-height: 28px;
        text-align: center;
        color: #1F314F;
    }

    p {
        height: 57px;
        left: 5.56%;
        right: 5.56%;
        top: calc(50% - 57px/2 + 36px);
        color: ${({theme}) => theme.colors.lightGray};
        font-family: 'Outfit';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 19px;
        text-align: center;
        letter-spacing: 0.1875px;
    }

`

export default GlobalStyles;
/* Improve your front-e */

// position: absolute;
// height: 56px;
// left: 0%;
// right: 0%;
// top: calc(50% - 56px/2 - 36.5px);

// /* Heading */
// font-family: 'Outfit';
// font-style: normal;
// font-weight: 700;
// font-size: 22px;
// line-height: 28px;
// text-align: center;

// /* Dark Navy */
// color: #1F314F;

// border: 1px solid #000000;
// text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
