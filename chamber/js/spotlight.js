const requestURL = "https://TheDustinBaird.github.io/wdd230/chamber/data.json";
const spotlights = document.querySelectorAll('.spotlights')

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        const featuredBusinesses = businesses.filter((business) => {
            return business.level == "Executive";
        });
        spotlights.forEach((spotlight,index) => {
            const i = Math.floor(Math.random() * featuredBusinesses.length);
            const business = featuredBusinesses[i];
            console.log(spotlight)

            //gather business name
            let name = document.createElement('h2');
            name.textContent = business.name;

            //gather business image
            let image = document.createElement('img');
            image.src = business.imgfile;
            image.setAttribute('alt', business.name);
            
            //gather business info paragraph
            let info = document.createElement('p');
            info.textContent = business.info;

            //display the output
            spotlight.appendChild(name);
            spotlight.appendChild(image);
            spotlight.appendChild(info);
            
            //ensure item only appears once
            featuredBusinesses.splice(i,1);
    
        });
    });
