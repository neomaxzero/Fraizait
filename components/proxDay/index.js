import React from 'react';
import css from 'next/css';
import Title from './title.js';
import DateComplete from './dateComplete.js';



const proxDay = () => {
  const style = css({
    border: '1px solid white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });
  return (
    <div className={style}>
      <Title/>
      <DateComplete dateNumber="10" dateMonth="MAY"/>
    </div>
  );
};

export default proxDay;
