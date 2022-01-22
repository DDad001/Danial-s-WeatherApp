// let weather = {
//     apiKey:"6deba018ba79d7228f7ada2989972f0c",
//     fetchWeather: function(city){

//         fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid="+ this.apiKey)
//         .then((response) => response.json())
//         .then((data) => this.displayWeather(data))
//     },

//     displayWeather: function(data)
// {
//     const {name} = data;
//     const { icon, description } = data.weather[0];
//     const {temp, humidity } = data.main;
//     const { speed } = data.wind;
//     // console.log(name,icon,description,temp,humidity,speed)
//     document.querySelector(".city").innerText = "Weather in " + name;
//     document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
//     document.querySelector(".description").innerText = description;
//     document.querySelector(".temp").innerText = temp + "°C";
//     document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
//     document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
//     document.querySelector(".weather").classList.remove("loading");
//     document.body.style.cursor = 'default';
//     document.body.style.backgroundImage= "url('https://source.unsplash.com/1620x900/?" + name + "')"
// },
// search: function(){
//   this.fetchWeather(document.querySelector(".search-bar").value);
// }
// };

// document.querySelector(".search-button").addEventListener('click',function(){

//     weather.search();
// });

// document.querySelector(".search-field").addEventListener("keyup",function(event){
//     if(event.key === "Enter")
//     {
//         weather.search();
//         document.body.style.cursor = 'wait';
//     }
//     else
//     {
//         document.body.style.cursor = 'default';
//     }
// })

// weather.fetchWeather("Denver");

// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const d = new Date();
// let day = weekday[d.getDay()];
// document.getElementById("demo").innerHTML = day;


//getting the current day by using the date provided from the data

// let weatherInfo = [];
// function fetchWeather(city) {
//   fetch(
//         "http://api.openweathermap.org/data/2.5/forecast?q=Texas&units=metric&APPID=6deba018ba79d7228f7ada2989972f0c"
//   )
//     .then((response) => response.json())
//     .then((data) => {
//      weatherInfo = data;

//       console.log(weatherInfo.city.name);
//       console.log(weatherInfo.city.country);

//       console.log(weatherInfo.list[0].main.temp_max);
//       console.log(weatherInfo.list[0].main.temp_min);

//       console.log(weatherInfo.list[8].main.temp_max);
//       console.log(weatherInfo.list[8].main.temp_min);

//       console.log(weatherInfo.list[17].main.temp_max);
//       console.log(weatherInfo.list[17].main.temp_min);

//       console.log(weatherInfo.list[25].main.temp_max);
//       console.log(weatherInfo.list[25].main.temp_min);

//       console.log(weatherInfo.list[32].main.temp_max);
//       console.log(weatherInfo.list[32].main.temp_min);

//       console.log(Math.floor(weatherInfo.list[4].main.temp));
//       console.log(weatherInfo.list[0].weather[0].description);

//       const splits = weatherInfo.list[0].dt_txt.split(" ", 2);
//       console.log(splits[0]);
//       console.log(splits[1]);

//       console.log(weatherInfo.list[0].main.humidity);
//       console.log(weatherInfo.list[0].wind.speed);
//       console.log(weatherInfo.city.population);
//       console.log(weatherInfo);

//       let storeObjects = {
//         cityName: weatherInfo.city.name,
//         humidity: weatherInfo.list[0].main.humidity,
//         windSpeed: weatherInfo.list[0].wind.speed,
//         Populations: weatherInfo.city.population,
//         Description: weatherInfo.list[0].weather[0].description,
//         Day: weatherInfo.list[0].dt_txt.split(" ", 2),
//         FirstMin: weatherInfo.list[0].main.temp_min,
//         FirstMax: weatherInfo.list[0].main.temp_max,

//         secondDay: [
//           { secondMin: weatherInfo.list[8].main.temp_min },
//           { secondMax: weatherInfo.list[8].main.temp_max },
//         ],
//         thirdDay: [
//           { thirdMin: weatherInfo.list[17].main.temp_min },
//           { thirdMax: weatherInfo.list[17].main.temp_max },
//         ],
//         fourthDay: [
//           { fourthMin: weatherInfo.list[25].main.temp_min },
//           { fourthMax: weatherInfo.list[25].main.temp_max },
//         ],
//         fifthDay: [
//           { fifthMin: weatherInfo.list[32].main.temp_min },
//           { fifthMax: weatherInfo.list[32].main.temp_max },
//         ],
//     };

//     let displaycity = document.getElementById('displaycity');
//     let displayTemperature = document.getElementById('displayTemperature');
//     let displayDescription = document.getElementById('displayDescription');
//     let displayHumidity = document.getElementById('displayHumidity');
//     let displayWind = document.getElementById('displayWind');
//     let displayPopulation = document.getElementById('displayPopulation');

//     displaycity.textContent = storeObjects.cityName;
//     displayTemperature.textContent = storeObjects.FirstMax;
//     displayDescription.textContent = storeObjects.Description;
//     displayHumidity.textContent = storeObjects.humidity;
//     displayWind.textContent = storeObjects.windSpeed;
//     displayPopulation.textContent = storeObjects.Populations;


//     function getDayName(dateStr, locale) {
//         let date = new Date(dateStr);
//         return date.toLocaleDateString(locale, { weekday: "long" });
//       }
//       let dateStr = storeObjects.Day;
//       let day = getDayName(dateStr, "en-US");
//       document.getElementById("getDay").textContent = day;
//     });

// }
// fetchWeather();



  //0-7 is day 1

  //8-16 is day 2

  //17-24 is day 3

  //25-31 is day 4

  //32-40 is day 5

  //get
  //day---
  //city name---
  //temperterture Celsius min---
  //temperterture Celsius max---
  //description---
  //humiddity---
  //wind--
  //precipitation changed it out for population----




//   let DailyWeather = [];

//   function fetchDailyWeather()
//   {
//       fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=6deba018ba79d7228f7ada2989972f0c")
//       .then(response => response.json())
//       .then(data => console.log(data))
//   }
//   fetchDailyWeather();

let dataStored = document.getElementById('dataStored');

function MakeTheStorage(cityNameEntered)
{
let ul = document.createElement('ul')
ul.className = "favoritesStored";


let li = document.createElement('li');
li.textContent = cityNameEntered.value;
li.id = cityNameEntered.value;

let span = document.createElement('span')
span.className = "close";
span.textContent = "x";

li.appendChild(span)
ul.appendChild(li);

dataStored.appendChild(ul);


/* <li>Lodi<span class="close">x</span></li> */
}

import { GetWeatherByCityName, GetOneCall } from "./fetch.js";
import {SaveToLocalStorageByCityName, GetLocalStorage, RemoveFromLocalStorage} from "./localStorage.js";
import GetLocationData from "./geolocation.js";

let CitySearchBtn = document.getElementById('CitySearchBtn');
let cityNameEntered = document.getElementById('cityNameEntered');
let PrintLS = document.getElementById('PrintLS');
let FavoriteBtn = document.getElementById('FavoriteBtn');
let injectHere = document.getElementById('injectHere');

CitySearchBtn.addEventListener('click',function(e){
    GetWeatherByCityName(cityNameEntered.value);
    FavoriteBtn.className = "button createButton";
});

cityNameEntered.addEventListener("keyup",function(event){
    if(event.key === "Enter")
    {
        GetWeatherByCityName(cityNameEntered.value);
        document.body.style.cursor = 'wait';
    } 
    else
    {
        document.body.style.cursor = 'default';
    }
})

// PrintLS.addEventListener('click',function(e){

//     let data = GetLocalStorage();
//     console.log(data);
// });

let favOn = false;
FavoriteBtn.addEventListener('click',function(e){
    
    if(favOn == true){
        //Needs to be unfavorited
        RemoveFromLocalStorage(cityNameEntered.value);
        //finds id of city name and removes it favorites
        document.getElementById(cityNameEntered.value).remove();
            FavoriteBtn.className = "button createButton";
            
        }else{
            //Needs to be favorited
            SaveToLocalStorageByCityName(cityNameEntered.value);
            FavoriteBtn.className = "button createButton2";
            MakeTheStorage(cityNameEntered);
        }
        favOn = !favOn;

    // if(FavoriteBtn.className == "button createButton")
    // {
    // FavoriteBtn.className = "button createButton2";
    // MakeTheStorage(cityNameEntered);
    // }
    // else if(FavoriteBtn.className != "button createButton")
    // {
    //     FavoriteBtn.className = "button createButton";
    //     MakeTheStorage(cityNameEntered);
    // }
    
});


GetLocationData();
// function createStuff(){
//     let button = MakeElement('button','btn btn-primary',"I am a button");
//     injectHere.appendChild(button);
// }

// createStuff();