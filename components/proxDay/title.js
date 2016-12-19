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
    marginBottom: '1em',
  });

  const nextStyle = css({
    fontSize: '36px',
    marginRight: '2px'
  });

  const HolidayStyle = css({
    fontSize: '48px',
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
