//Application.js

import React from 'react';
import GlobalStyle from './GlobalStyle'
import Logo from './Logo';
import css from 'next/css';
import Head from 'next/head';

const Application = ({children}) => {
  const logoApp = css({
    marginLeft: '100px',
    marginTop: '2em',
  });

  const mainContent = css({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'calc(100vh - 5em)',
  });

    return (
        <div>
          <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,400'" media="screen" title="no title"/>
          </Head>
          <div className={logoApp}>
            <Logo />
          </div>
            <GlobalStyle/>
          <div className={mainContent}>
            {children}
          </div>
        </div>);
};

export default Application;
