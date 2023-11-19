import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
    --color-gray-0: #ffffff;
    --color-gray-400: #9ca3af;
    --color-red-700: #b91c1c;
  
  }
  
  &.dark-mode {
  }



  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  --color-brand-400: #0cbaba;
  --color-brand-300: #3dc8c8;
  --color-brand-200: #6dd6d6;
  --color-brand-100: #9ee3e3;
  --color-brand-50: #cef1f1;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: rgb(17, 27, 33);
  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  border: none;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

input:disabled {
background-color: #a2a4a5;
color: #333;
}




button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;
