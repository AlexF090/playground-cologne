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
  text-decoration: none;
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

h1{
  text-align: center;
}

h1, h2, h3, h4, h5, p, a, li {
  color: black;
}

ul {
  padding: 0;
  margin: 0 auto;
}

li {
  list-style-type: none;
}
`;



export default GlobalStyle;
