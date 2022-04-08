const apiURL = /*'https://api.openweathermap.org/data/2.5/onecall?lat=41.06&lon=-111.94&exclude=hourly,minutely&units=imperial&appid=8da5731fdc8f1ba7b72c7704ddbeee84';*/
'https://api.openweathermap.org/data/2.5/weather?zip=84041,us&units=imperial&appid=8da5731fdc8f1ba7b72c7704ddbeee84';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      
      

      const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
      const desc = jsObject.weather[0].description;
      


      document.querySelector('#weathericon').setAttribute('src', iconsrc);
      document.querySelector('#weathericon').setAttribute('alt', desc);
      document.getElementById('condition').textContent = jsObject.weather[0].description;
      document.getElementById('temp').textContent = (Math.round(jsObject.main.temp*10)/10);
      document.getElementById('temp_max').textContent = (Math.round(jsObject.main.temp_max));
      document.getElementById('wind').textContent = (Math.round(jsObject.wind.speed));
      document.getElementById('windChill').textContent = (windChill(jsObject.main.temp, jsObject.wind.speed));
      document.getElementById('humidity').textContent = jsObject.main.humidity;
       
      

      //convert unix time for sunrise
      let unix_sunrise = jsObject.sys.sunrise
      var riseDate = new Date(unix_sunrise * 1000);
      var hours = riseDate.getHours();
      var minutes = "0" + riseDate.getMinutes();
      var seconds = "0" + riseDate.getSeconds();
      var formattedSunrise = hours + ':' + minutes.substr(-2) + ' am';
      document.getElementById('sunrise').textContent = formattedSunrise;

      //convert unix time for sunset
      let unix_sunset = jsObject.sys.sunset
      var date = new Date(unix_sunset * 1000);
      var hours = (date.getHours(hours + 11) % 13 + 1);
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      var formattedSunset = hours + ':' + minutes.substr(-2) + ' pm';
      document.getElementById('sunset').textContent = formattedSunset;

      //severe weather alert
      /*const alert = jsObject.alerts[0];
      const alertMessage = `${alert.event} ${alert.description} issued at ${alert.time} and expires at ${alert.expires}`;
      console.log(alertMessage);
      const alertDiv = document.createElement("div");
      alertDiv.textContent = alertMessage;
      document.querySelector("#alert").appendChild(alertDiv);*/
  });
      


//windcill calculation
    function windChill(temp, wind) {
      if (temp <= 50 && wind > 3) {
        return (35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind,0.16)) + (0.4275 * temp * Math.pow(wind,0.16))).toFixed(1);
      } else {
        return "N/A";
      }
  }

