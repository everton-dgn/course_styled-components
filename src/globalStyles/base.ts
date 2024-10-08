import { createGlobalStyle } from 'styled-components'
import { ColorsTheme } from './colors'
import T from 'theme'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    list-style: none !important;
    outline: none;
    font-family: ${T.fonts.family};
    line-height: calc(1em + 0.5rem);

    @media (prefers-reduced-motion) {
      transition: none!important;
      animation-duration: 0ms!important;
    }
  }

  html {
    font-size: 62.5%;
  }

  body,
  html,
  #root {
    background-color: ${T.colors.backgroundPage};
  }

  p, h1, h2, h3, h4, h5, h6 {
    word-break: break-word;
  }

  #root,
  body,
  input,
  select,
  textarea,
  button {
    font: ${T.fonts.weights.medium} ${
  T.fonts.sizes.text5
} Montserrat, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
    isolation: isolate;
    position: relative;
  }

  a,
  a:active {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar,
  scrollbar-width {
    width: 4px;
    background-color: ${T.colors.backgroundPage};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${T.colors.greyDynamic};
    border-radius: ${T.borderRadius.lg};
  }

  :root {
    scrollbar-color: ${T.colors.greyDynamic} ${T.colors.backgroundPage};
    scrollbar-width: 4px;
  }

  ${T.breakpoints.custom(1000)} {
    ::-webkit-scrollbar,
    scrollbar-width {
      width: 14px;
    }

    :root {
      scrollbar-width: 14px;
    }
  }

  ${ColorsTheme}
`
