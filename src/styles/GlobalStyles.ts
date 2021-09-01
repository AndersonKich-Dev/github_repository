import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }   
  }

  @media (max-width: 720px) {
    html {
      font-size: 75%;
    }   
  }
  
  ul{
    list-style: none;
  }
 
  p {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
  }
  h1 {
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
  }
  h2 {
      font-size: 1.5rem;
  }
  button {
      cursor: pointer;
      border: 0;
      background-color: transparent;
      font-family: 'Poppins', sans-serif;
  }
  a:link 
  { 
    text-decoration:none;  
  } 

  input, textArea {
    border: 0;
    background-color: transparent;
    font-family: 'Poppins', sans-serif;

    :focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }

`
export default GlobalStyles