const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=59901,us&units=imperial&appid=8da5731fdc8f1ba7b72c7704ddbeee84';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      document.getElementById('tempurature').textContent = (Math.round(jsObject.main.temp));
    })


