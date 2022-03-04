const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

  function displayProphets(prophet){
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let dob = document.createElement('p');
      let bplace = document.createElement('p');

  
      let fullname = `${prophet.name} ${prophet.lastname}`;

      h2.textContent = fullname;
      portrait.setAttribute('src',prophet.imageurl);
      portrait.setAttribute('alt',fullname, prophet.order);
      dob.textContent = "Date of Birth: " + `${prophet.birthdate}`;
      bplace.textContent = "Place of Birth: " + `${prophet.birthplace}`;

      card.appendChild(portrait);
      card.appendChild(h2);
      card.appendChild(dob);
      card.appendChild(bplace);

      document.querySelector('.cards').appendChild(card);
     }