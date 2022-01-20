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



// document.querySelector(".search button").addEventListener('click',function(){

//     weather.search();
// });

// document.querySelector(".search-bar").addEventListener("keyup",function(event){
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

// weather.fetchWeather(console.log("Lodi"));

// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const d = new Date();
// let day = weekday[d.getDay()];
// document.getElementById("demo").innerHTML = day;


//getting the current day by using the date provided from the data
function getDayName(dateStr, locale)
{
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}
let dateStr = '2022-01-24';
let day = getDayName(dateStr, 'en-US');
document.getElementById("getDay").textContent = day;



function fetchWeather(city)
{
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=Texas&units=metric&APPID=6deba018ba79d7228f7ada2989972f0c")

    .then(response => response.json())
    .then(data => {


        weatherInfo = data;
      
        
        console.log(weatherInfo.city.name);
        console.log(weatherInfo.city.country);

        console.log(weatherInfo.list[0].main.temp_max);
        console.log(weatherInfo.list[0].main.temp_min);

        console.log(weatherInfo.list[8].main.temp_max);
        console.log(weatherInfo.list[8].main.temp_min);

        console.log(weatherInfo.list[17].main.temp_max);
        console.log(weatherInfo.list[17].main.temp_min);

        console.log(weatherInfo.list[25].main.temp_max);
        console.log(weatherInfo.list[25].main.temp_min);

        console.log(weatherInfo.list[32].main.temp_max);
        console.log(weatherInfo.list[32].main.temp_min);

        console.log(Math.floor(weatherInfo.list[4].main.temp));
        console.log(weatherInfo.list[0].weather[0].description);

        const splits =  weatherInfo.list[0].dt_txt.split(" ", 2);
        console.log(splits[0]);
        console.log(splits[1]);

        console.log(weatherInfo.list[0].main.humidity);
        console.log(weatherInfo.list[0].wind.speed);
        console.log(weatherInfo.city.population);
        console.log(weatherInfo);


        let storeObjects = {

        cityName: weatherInfo.city.name,
        humidity: weatherInfo.list[0].main.humidity,
        windSpeed: weatherInfo.list[0].wind.speed,
        Populations: weatherInfo.city.population,
        FirstMin: weatherInfo.list[0].main.temp_min,
        FirstMax: weatherInfo.list[0].main.temp_max,

        secondDay:[
        { secondMin: weatherInfo.list[8].main.temp_min},
        { secondMax: weatherInfo.list[8].main.temp_max}

        ],
        thirdDay:
        [
            { thirdMin: weatherInfo.list[17].main.temp_min},
            { thirdMax: weatherInfo.list[17].main.temp_max}
        ],
        fourthDay:
        [
            { fourthMin: weatherInfo.list[25].main.temp_min},
            { fourthMax: weatherInfo.list[25].main.temp_max}
        ],
        fifthDay:
        [
            { fifthMin: weatherInfo.list[32].main.temp_min},
            { fifthMax: weatherInfo.list[32].main.temp_max}
        ]
        };

    })

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
    }
fetchWeather();