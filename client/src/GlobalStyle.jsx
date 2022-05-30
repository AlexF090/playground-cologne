import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    height: 100%;
    width: 100%;
}
  body {
    max-width: 768px;
    height: 100vh;
    margin: 0 auto;
    padding: 0;
 
}
.App {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
  padding: 1rem 1rem;
  overflow-y: auto;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}

`;

export default GlobalStyle;
