const apiURL2 =    
  'https://api.openweathermap.org/data/2.5/forecast/daily?lat=41.06&lon=-111.94&cnt=3&appid=30f06b3dc3c81cb88937a6ccd7613412';

  fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)

        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
      const desc = jsObject.weather[0].description;
      document.querySelector('#weathericon').setAttribute('src', iconsrc);
      document.querySelector('#weathericon').setAttribute('alt', desc);
      document.getElementById('condition').textContent = jsObject.weather[0].description;
      document.getElementById('temp').textContent = (Math.round(jsObject.main.temp*10)/10);
      document.getElementById('temp_max').textContent = (Math.round(jsObject.main.temp_max));
      document.getElementById('wind').textContent = (Math.round(jsObject.wind.speed));
      document.getElementById('windChill').textContent = (windChill(jsObject.main.temp, jsObject.wind.speed));
      document.getElementById('humidity').textContent = (jsObject.main.humidity);
    })
