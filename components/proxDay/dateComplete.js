import React from 'react';
import css from 'next/css';
import { mainTextSecundary, grey } from '../../theme.js';
import DateBox from './dateBoxes.js';

const DateComplete = (props) => {

  const style = css({
  });

  return (
    <div className={style}>
      <DateBox background={mainTextSecundary}>
        {props.dateNumber}
      </DateBox>
    </div>
  );
};

export default DateComplete;
