require('isomorphic-fetch');

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

}
