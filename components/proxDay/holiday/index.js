require('isomorphic-fetch');
import moment from 'moment';
// return fetch('https://fzservice-holidays-ukpeugfzfi.now.sh/')

function getAllHolidays() {
  return fetch('https://fzservice-holidays-ukpeugfzfi.now.sh/')  
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      throw err;
    })

}
export default {
  getHolidays: () => {
    return getAllHolidays()
  },
  getNextHappinness: (holiDB) => {
    const year = holiDB.year;
    const next = holiDB.dates.find((date) => {
      const completeDate = date.date + year;
      const holiday = moment(completeDate, 'DDMMYYYY');
      return holiday.toDate() > moment().toDate();
    });
    const nextDate = next.date + year;
    return {
      date: moment(nextDate, 'DDMMYYYY').toDate(),
      name: next.name,
    };
  },
}
