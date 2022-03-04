const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    //console.table(jsonObject);
    prophets.forEach(displayProphets);
  });

  function displayProphets(prophet){
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let dob = document.createElement('p');
      let bplace = document.createElement('p');
      let ordinal = ``;
      let fullname = `${prophet.name} ${prophet.lastname}`;

      
    if (prophet.order === 1) {
      ordinal = `${prophet.order}st`;
    } else if (prophet.order === 2) {
      ordinal = `${prophet.order}nd`;
    } else if (prophet.order === 3) {
      ordinal = `${prophet.order}rd`;
    } else  {
      ordinal = `${prophet.order}th`;
    } 


      h2.textContent = fullname;
      portrait.setAttribute('src',prophet.imageurl);
      portrait.setAttribute('alt',"Portrait of " + fullname +" - " + ordinal + " Latter-day President");
      portrait.setAttribute('loading', 'lazy');
      dob.textContent = "Date of Birth: " + `${prophet.birthdate}`;
      bplace.textContent = "Place of Birth: " + `${prophet.birthplace}`;

    
      card.appendChild(h2);
      card.appendChild(dob);
      card.appendChild(bplace);
      card.appendChild(portrait);

      document.querySelector('div.cards').appendChild(card);
     }