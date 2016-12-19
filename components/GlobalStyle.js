import React from 'react';
import {fontFace}  from 'next/css'

const GlobalStyle = () => {
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
