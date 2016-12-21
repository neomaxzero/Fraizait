import React from 'react';
import css from 'next/css';
import Title from './title.js';
import DateComplete from './dateComplete.js';
import Remaining from './remaining.js';
import * as moment from 'moment';
import { pad } from '../../utils/number.js'
import holidayService from './holiday';

class proxDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    holidayService.getHolidays()
      .then((data) => {
          debugger;
      });
  }

  render() {
    const style = css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    });

    let day = pad(this.state.date.getDate());
    let month = this.state.date.getMonth();
    let monthName = moment.monthsShort(null, month).toUpperCase();
    return (
      <div className={style}>
        <Title/>
        <DateComplete
          dateNumber={day}
          dateMonth={monthName}
        />
        <Remaining />
      </div>
    );
  }
}

export default proxDay;
