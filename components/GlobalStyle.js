import React from 'react';
import { fontFace } from 'next/css'

const GlobalStyle = () => {
  let family = fontFace({
    fontFamily: 'Roboto',
    src: "url(https://fonts.googleapis.com/css?family=Roboto:100,400')",
  })
  const style = `
    html, body {
      margin:0;
      padding: 0;
      background-color: black;
      color: #F0F0F0;
      font-family: 'Roboto', Helvetica Neue;
      font-weight: 100;
    }
  `;

  return (<style>{style}</style>)
};

export default GlobalStyle;
