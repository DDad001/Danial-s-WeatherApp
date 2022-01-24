import {GetWeatherByCityName, GetOneCall} from "./fetch.js";

function success(position){
    console.log(position);
    // let latitude = position.coords.latitude;
    // let longitude = position.coords.longitudde;
    //  (lat, lon)
    // displaycity.textContent = "Your Location";
    // let OneCallApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=&appid=8a17f8004dda4440c6940f303d9a602c`

    // GetOneCall(OneCallApi);
}

function error(err){
    console.warn(err);
    // GetWeatherByCityName('Stockton');

    // let ForecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${nameOfCity}&units=metric&APPID=8a17f8004dda4440c6940f303d9a602c`;

    // GetWeatherByCityName(ForecastApi);

}

let options = {
    enableHighAccuracy: true,
    timeout: 5000, 
    maximumAge:0
}

function GetLocationData(){
    navigator.geolocation.getCurrentPosition(success,error,options);
}

export{GetLocationData}