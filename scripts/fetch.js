//https://api.openweathermap.org/data/2.5/onecall?lat=38.1341&lon=121.2722&exclude=alerts&appid=4884b9dbdeaa4d2adc773f3cd00c95a9
//api.openweathermap.org/data/2.5/weather?q=Lodi&appid=4884b9dbdeaa4d2adc773f3cd00c95a9

import { prod, dev } from "./enviroment.js";
let urlOneCall_pt1 = "https://api.openweathermap.org/data/2.5/onecall";
let lat = "?lat=";
let lon = "&lon=";
let apiKey = "&appid=";
let cityName = "?city=";

let weatherCall_pt1 = "https://api.openweathermap.org/data/2.5/weather";
let weatherCall_city_pt2 = "?q=";

if (prod.isLive) {
  apiKey += prod.apiKey;
} else {
  apiKey += dev.apiKey;
}

// function GetWeatherOneCall( latitutde, longitude){
//     lat += latitutde;
//     lon += longitude;

//     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=37.9577&lon=121.2908&exclude=minutely&appid=6deba018ba79d7228f7ada2989972f0c`).then(resp => resp.json()).then(data => console.log(data));

// }
let latitude, longitude;
let weatherOnecallCoord;
let weatherInfo = [];
function GetWeatherByCityName(nameOfCity) {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${nameOfCity}&units=metric&APPID=6deba018ba79d7228f7ada2989972f0c`
  )
    .then((response) => response.json())
    .then((data) => {
      weatherInfo = data;
      console.log(weatherInfo);
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1620x900/?" + nameOfCity + "')";
      (latitude = weatherInfo.city.coord.lat),
        (longitude = weatherInfo.city.coord.lon),
        (weatherOnecallCoord = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=&appid=6deba018ba79d7228f7ada2989972f0c`),
        console.log(latitude);

      let displaycity = document.getElementById("displaycity");
      displaycity.textContent = weatherInfo.city.name;

      GetOneCall(weatherOnecallCoord);
    });
}

let weatherOneCall = [];
function GetOneCall(weatherOnecallCoord) {
  console.log(weatherOnecallCoord);
  fetch(weatherOnecallCoord)
    .then((response) => response.json())
    .then((data) => {
      weatherOneCall = data;
      console.log(weatherOneCall);

      let storeObjects = {
        cityName: weatherInfo.city.name,
        humidity: weatherOneCall.daily[0].humidity,
        windSpeed: weatherOneCall.daily[0].wind_speed,
        Populations: weatherInfo.city.population,
        Description: weatherOneCall.daily[0].weather[0].description,
        Day: weatherInfo.list[0].dt_txt.split(" ", 2),
        FirstMax: weatherOneCall.daily[0].temp.max,
        Precipitation: weatherOneCall.daily[0].pop,
        FirstDt: weatherOneCall.daily[0].dt,

        // icon1: weatherInfo.list

        secondDay: [
          { secondMin: weatherOneCall.daily[1].temp.min },
          { secondMax: weatherOneCall.daily[1].temp.max },
          { secondDt: weatherOneCall.daily[1].dt },
        ],
        thirdDay: [
          { thirdMin: weatherOneCall.daily[2].temp.min },
          { thirdMax: weatherOneCall.daily[2].temp.max },
          { thirdDt: weatherOneCall.daily[2].dt },
        ],
        fourthDay: [
          { fourthMin: weatherOneCall.daily[3].temp.min },
          { fourthMax: weatherOneCall.daily[3].temp.max },
          { fourthDt: weatherOneCall.daily[3].dt },
        ],
        fifthDay: [
          { fifthMin: weatherOneCall.daily[4].temp.min },
          { fifthMax: weatherOneCall.daily[4].temp.max },
          { fifthDt: weatherOneCall.daily[4].dt },
        ],
        sixthDay: [
          { sixthMin: weatherOneCall.daily[5].temp.min },
          { sixthMax: weatherOneCall.daily[5].temp.max },
          { sixthDt: weatherOneCall.daily[5].dt },
        ],
      }

        //Hourly information
    //   weatherOneCall.hourly[0].temp
    //   weatherOneCall.hourly[0].weather[0].description
    //   weatherOneCall.hourly[0].humidity
    //   weatherOneCall.hourly[0].wind_speed
    //   weatherOneCall.hourly[0].pop
    

      //8
      //16
      //24
      //32
      //36
      let displaycity = document.getElementById("displaycity");
      let displayTemperature = document.getElementById("displayTemperature");
      let displayDescription = document.getElementById("displayDescription");
      let displayHumidity = document.getElementById("displayHumidity");
      let displayWind = document.getElementById("displayWind");
      let displayPrecipitation = document.getElementById("displayPrecipitation");
      let block1First = document.getElementById("block1First");
      let block1Second = document.getElementById("block1Second");
      let block2First = document.getElementById("block2First");
      let block2Second = document.getElementById("block2Second");
      let block3First = document.getElementById("block3First");
      let block3Second = document.getElementById("block3Second");
      let block4First = document.getElementById("block4First");
      let block4Second = document.getElementById("block4Second");
      let block5First = document.getElementById("block5First");
      let getDay = document.getElementById("getDay");
      let getDay2 = document.getElementById("getDay2");
      let getDay3 = document.getElementById("getDay3");
      let getDay4 = document.getElementById("getDay4");
      let getDay5 = document.getElementById("getDay5");
      let getDay6 = document.getElementById("getDay6");
      let switchInfo = document.getElementById("switchInfo");


      switchInfo.addEventListener('change', function() {
         if (this.checked)
        {
           console.log("Checkbox is checked..");
           displayTemperature.textContent ="Temperture " + Math.floor(weatherOneCall.hourly[0].temp) + "°C";
           displayDescription.textContent = weatherOneCall.hourly[0].weather[0].description.charAt(0).toUpperCase() + weatherOneCall.hourly[0].weather[0].description.slice(1);
           displayHumidity.textContent = "Humidity: " + weatherOneCall.hourly[0].humidity + "%";
           displayWind.textContent = "Wind: " + weatherOneCall.hourly[0].wind_speed + " km/h";
           displayPrecipitation.textContent = "Precipitation: " + weatherOneCall.hourly[0].pop + "%";
        } 

        else 
        {
         console.log("Checkbox is not checked..");
         displaycity.textContent = storeObjects.cityName;
         displayTemperature.textContent = "Temperture " + Math.floor(storeObjects.FirstMax) + "°C";
         displayDescription.textContent = storeObjects.Description.charAt(0).toUpperCase() + storeObjects.Description.slice(1);
         displayHumidity.textContent = "Humidity: " + storeObjects.humidity + "%";
         displayWind.textContent = "Wind: " + storeObjects.windSpeed + " km/h";
         displayPrecipitation.textContent = "Precipitation: " + storeObjects.Precipitation + "%";
        }
        });


      // let icon = document.getElementById('icon');
      document.body.style.cursor = "default";
      displaycity.textContent = storeObjects.cityName;
      displayTemperature.textContent =
        "Temperture " + Math.floor(storeObjects.FirstMax) + "°C";
      //grabbing the first character and capitalizing it and then adding it back with the rest of words using slice
      // The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
      displayDescription.textContent =
        storeObjects.Description.charAt(0).toUpperCase() +
        storeObjects.Description.slice(1);
      displayHumidity.textContent = "Humidity: " + storeObjects.humidity + "%";
      displayWind.textContent = "Wind: " + storeObjects.windSpeed + " km/h";
      displayPrecipitation.textContent =
        "Precipitation: " + storeObjects.Precipitation + "%";

      block1First.textContent =
        Math.floor(storeObjects.secondDay[0].secondMin) + "°C";
      block1Second.textContent =
        Math.floor(storeObjects.secondDay[1].secondMax) + "°C";
      block2First.textContent =
        Math.floor(storeObjects.thirdDay[0].thirdMin) + "°C";
      block2Second.textContent =
        Math.floor(storeObjects.thirdDay[1].thirdMax) + "°C";
      block3First.textContent =
        Math.floor(storeObjects.fourthDay[0].fourthMin) + "°C";
      block3Second.textContent =
        Math.floor(storeObjects.fourthDay[1].fourthMax) + "°C";
      block4First.textContent =
        Math.floor(storeObjects.fifthDay[0].fifthMin) + "°C";
      block4Second.textContent =
        Math.floor(storeObjects.fifthDay[1].fifthMax) + "°C";
      block5First.textContent =
        Math.floor(storeObjects.sixthDay[0].sixthMin) + "°C";
      block5Second.textContent =
        Math.floor(storeObjects.sixthDay[1].sixthMax) + "°C";

      //     let date = weatherOneCall.daily.dt;
      //     console.log( weatherOneCall.daily.dt)
      // for(let i = 0; i < date.length; i++)
      // {
      //     console.log(weatherOneCall.daily.dt);

      // }

      let unixTimeStamp = storeObjects.FirstDt;
      let milliseconds = unixTimeStamp * 1000;
      let dt = new Date(milliseconds);
      let day1 = dt.toLocaleDateString("en-US", {weekday: "long"});
      getDay.textContent = day1;

      let unixTimeStamp2 = storeObjects.secondDay[2].secondDt;
      let milliseconds2 = unixTimeStamp2 * 1000;
      let dt2 = new Date(milliseconds2);
      let day2 = dt2.toLocaleDateString("en-US", {weekday: "long"});
      getDay2.textContent = day2;

      let unixTimeStamp3 = storeObjects.thirdDay[2].thirdDt;
      let milliseconds3 = unixTimeStamp3 * 1000;
      let dt3 = new Date(milliseconds3);
      let day3 = dt3.toLocaleDateString("en-US", {weekday: "long"});
      getDay3.textContent = day3;

      let unixTimeStamp4 = storeObjects.fourthDay[2].fourthDt;
      let milliseconds4 = unixTimeStamp4 * 1000;
      let dt4 = new Date(milliseconds4);
      let day4 = dt4.toLocaleDateString("en-US", {weekday: "long"});
      getDay4.textContent = day4;

      let unixTimeStamp5 = storeObjects.fifthDay[2].fifthDt;
      let milliseconds5 = unixTimeStamp5 * 1000;
      let dt5 = new Date(milliseconds5);
      let day5 = dt5.toLocaleDateString("en-US", {weekday: "long"});
      getDay5.textContent = day5;

      let unixTimeStamp6 = storeObjects.sixthDay[2].sixthDt;
      let milliseconds6 = unixTimeStamp6 * 1000;
      let dt6 = new Date(milliseconds6);
      let day6 = dt6.toLocaleDateString("en-US", {weekday: "long"});
      getDay6.textContent = day6;

    });
}




//8
//16
//24
//32
//36

//GetWeatherOneCall(38.1341,121.2722);

export { GetWeatherByCityName, GetOneCall };
