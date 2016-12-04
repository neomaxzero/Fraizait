import React from 'react';
import css from 'next/css';

const Logo = () => {
  const style = css({
    fontSize: '1.2em',
    fontFamily: 'Roboto',
    fontWeight: '100',
    textShadow: 'rgba(0,0,0,.01) 0 0 1px',
  })

  const fraiStyle = css({
    fontWeight: 400,
  })

  return (
    <div className={style}>
      <span className={fraiStyle}>FRAI</span>
      <span>ZAIT</span>
    </div>
  );
};

export default Logo;
