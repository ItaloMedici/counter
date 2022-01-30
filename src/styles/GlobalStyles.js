import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html {
    min-height: 100%;
    background: var(--bg);
    overflow: hidden;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--black);
  }

  :root {
    --primary: #fff;
    --bg: #f2f2f2;
    --display: #fffcfc;
    --border: #e1e4e8;
    --black: #1b1f23;
    --red: #ed3948;
    --green: #40d65e;
  }
`;