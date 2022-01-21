//https://api.openweathermap.org/data/2.5/onecall?lat=38.1341&lon=121.2722&exclude=alerts&appid=4884b9dbdeaa4d2adc773f3cd00c95a9
//api.openweathermap.org/data/2.5/weather?q=Lodi&appid=4884b9dbdeaa4d2adc773f3cd00c95a9

import {prod, dev} from './enviroment.js';
let urlOneCall_pt1 = "https://api.openweathermap.org/data/2.5/onecall";
let lat= '?lat=';
let lon = '&lon=';
let apiKey = '&appid=';
let cityName = '?city=';

let weatherCall_pt1 = "https://api.openweathermap.org/data/2.5/weather";
let weatherCall_city_pt2 = "?q=";


if(prod.isLive){
    apiKey += prod.apiKey;
} else{
    apiKey += dev.apiKey;
}

function GetWeatherOneCall( latitutde, longitude){
    lat += latitutde;
    lon += longitude;
  
    fetch(urlOneCall_pt1 + lat + lon + apiKey).then(resp => resp.json()).then(data => console.log(data));
    
}
function GetWeatherByCityName(nameOfCity){
    fetch(weatherCall_pt1+weatherCall_city_pt2+nameOfCity+apiKey).then(resp => resp.json()).then(data=>console.log(data));
}
//GetWeatherOneCall(38.1341,121.2722);

export {GetWeatherByCityName, GetWeatherOneCall}

