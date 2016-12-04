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
    fontSize: props.size || '6em',
    color: mainText,
    backgroundColor: props.background || 'black',
    fontFamily: 'Roboto',
    fontWeight: props.weight || '400',
    borderLeft: props.borderLeft,

  });
  console.log(props.children)
  return (
    <div className={style}>
      {props.children}
    </div>
  );
};

export default DateBoxes;
