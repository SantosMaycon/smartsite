import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Gotham";
    src: url("/fonts/gotham-black.woff2");
    font-style: normal;
    font-weight: bolder;
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham";
    src: url("/fonts/gotham-bold.woff2");
    font-style: normal;
    font-weight: bold;
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham";
    src: url("/fonts/gotham-book.woff2");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham";
    src: url("/fonts/gotham-light.woff2");
    font-style: normal;
    font-weight: lighter;
    font-display: swap;
  }

  /*** The new CSS Reset - version 1.2.0 (last updated 23.7.2021) ***/

  /* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ol, ul {
      list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
      max-width: 100%;
  }

  /* removes spacing between cells in tables */
  table {
      border-collapse: collapse;
  }

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea {
      white-space: revert;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: "Gotham", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
