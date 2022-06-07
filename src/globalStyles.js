import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    // colors
    --tf-black: #010101;
    --tf-black--lighter: #b2b2b2;
    --tf-black--lightest: #f0f0f0;

    --tf-cyan: #00BAC2;
    --tf-cyan--hover: #0c9fa5;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Arial', sans-serif;
    color: var(--tf-black);
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;