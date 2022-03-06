
const requestURL = "data.json"
const cards = document.querySelector('div.cards');
const listButton = document.querySelector("#listbtn");
const cardButton = document.querySelector("#cardbtn");


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayBusinesses);
    });

function displayBusinesses(business) {
  let card = document.createElement('section');


  let image = document.createElement('img');
  image.src = business.imgfile;
  image.setAttribute('alt', business.name);
  card.appendChild(image);

  
  let h2 = document.createElement('h2');
  h2.textContent = business.name;
  card.appendChild(h2);


  let p1 = document.createElement('p');
  p1.textContent = business.address;
  card.appendChild(p1);


  let p2 = document.createElement('p');
  p2.textContent = business.phone;
  card.appendChild(p2);

  
  let p3 = document.createElement('p');
  p3.textContent = business.website;
  card.appendChild(p3);

  cards.appendChild(card);

}

listButton.addEventListener("click", ()=> {
    cards.classList.replace("card-view", "list-view")
});

cardButton.addEventListener("click", ()=> {
    cards.classList.replace("list-view", "card-view")
});