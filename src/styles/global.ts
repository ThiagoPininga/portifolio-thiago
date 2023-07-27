import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fontFamily.sans};
    padding: 0;
    margin: 0;
  }

  ul,
  li{
    list-style: none;
  }
`
