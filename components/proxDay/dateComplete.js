import React from 'react';
import css from 'next/css';
import { mainTextSecundary, grey } from '../../theme.js';
import DateBox from './dateBoxes.js';
import Head from 'next/head';

const DateComplete = (props) => {

  const style = css({
    display: 'flex',
  });

  return (
    <div className={style}>
      <Head>
        <title> FZ:> {props.dateNumber} / {props.dateMonth}</title>
      </Head>
      <DateBox background={mainTextSecundary}>
        {props.dateNumber}
      </DateBox>
      <DateBox
        size='6em'
        weight='100'
        borderLeft='none'
      >
        {props.dateMonth}
      </DateBox>
    </div>
  );
};

export default DateComplete;
