//Application.js

import React from 'react';
import GlobalStyle from './GlobalStyle'
import Logo from './Logo';
import css from 'next/css';

const Application = ({children}) => {
  const logoApp = css({
    marginLeft: '100px',
    marginTop: '2em',
  });

  const mainContent = css({
    height:'100%',
    border:'1px solid red',
  });

    return (
        <div>
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
