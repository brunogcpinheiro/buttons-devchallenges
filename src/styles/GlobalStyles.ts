import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    font-family: Poppins, Arial, sans-serif;
    font-size: 13px;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    &:visited, &:link, &:active {
      color: inherit;
    }
  }
`;
