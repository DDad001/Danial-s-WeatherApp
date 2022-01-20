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


function fetchWeather()
{
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=Texas&APPID=6deba018ba79d7228f7ada2989972f0c")

    .then(response => response.json())
    .then(data => {
        console.log(data.city.name);
        console.log(data.city.country);
        console.log(data.list[0].main.temp);
        console.log(data.list[1].main.temp);
        console.log(data.list[2].main.temp);
        console.log(data.list[3].main.temp);
        console.log(Math.floor(data.list[4].main.temp));
        console.log(data.list[0].weather[0].description);
    })
}
fetchWeather();

