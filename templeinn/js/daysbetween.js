localStorage.setItem('lastvisit', Date.now())

let lastVisit = document.querySelector('#lastVisit');


const lastvisit = Number(localStorage.getItem('lastvisit'));


const FACTOR = 1000 * 60 * 60 * 24;


const daysbetween = Date.now() - lastvisit;


const numberOfDays = daysbetween / FACTOR;


const lastMessage = `We last saw y'all ${Math.round(numberOfDays)} days ago.`




lastVisit.textContent = lastMessage;
  





