import React from 'react';
import css from 'next/css';
import moment from 'moment';
import { mainText, mainTextSecundary, greyPalid } from '../../theme.js';

const DateComplete = (props) => {

  const style = {
    display: 'flex',
    width: '100%',
    cursor: 'pointer',
    border: '1px solid' + mainText,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0.5em',
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
    color: greyPalid,
    fontFamily: 'Roboto',
    transition: 'background-color 0.66s, color 0.33s',

    ':hover': {
      backgroundColor: mainText,
      color: '#DDD',
    }
  };
  debugger;
  console.log('props', props);
  return (
    <div className={css(style)}
      onClick={()=> {
      }}
    >
      SHOW REMAINING
    </div>
  );
};

export default DateComplete;
