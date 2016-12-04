import React from 'react';
import css from 'next/css';
import { mainText, grey } from '../../theme.js';

const DateBoxes = (props) => {
  const style = css({
    width: '15rem',
    height: '15rem',
    border: '1px solid' + mainText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '9.4em',
    color: mainText,
    backgroundColor: props.background,
  });
  console.log(props.children)
  return (
    <div className={style}>
      {props.children}
    </div>
  );
};

export default DateBoxes;
