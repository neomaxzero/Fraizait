import React from 'react';
import css from 'next/css';
import { mainText, grey } from '../../theme.js';

const title = () => {
  const style = css({
    fontSize: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: grey,
  });

  const nextStyle = css({
    fontWeight: 100,
    fontFamily: 'Helvetica Neue',
    fontSize: '48px',
  });

  const HolidayStyle = css({
    fontWeight: 100,
    fontFamily: 'Helvetica Neue',
    fontSize: '64px',
    color: mainText,
  });
  console.log('mainText');

  console.log(mainText);
  return (
    <div className={style}>
      <span className={nextStyle}>Next</span>
      <span className={HolidayStyle}>Holiday</span>
    </div>
  );
};

export default title;
