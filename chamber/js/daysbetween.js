localStorage.setItem('lastvisit', Date.now())

let lastVisit = document.querySelector('#lastVisit');


const lastvisit = Number(localStorage.getItem('lastvisit'));


const FACTOR = 1000 * 60 * 60 * 24;


const daysbetween = Date.now() - lastvisit;


const numberOfDays = daysbetween / FACTOR;


const lastMessage = `We last saw y'all ${Math.round(numberOfDays)} days ago.`
const firstMessage = 'Welcome friend, looks like you might be new here.'
const yesterdayMessage = `We last saw y'all yesterday.`


  if (numberOfDays == 1) {
    lastVisit.textContent = yesterdayMessage;
  } else if (numberOfDays > 1) {
    lastVisit.textContent = lastMessage;
  } else {
    lastVisit.textContent = firstMessage;
  }





