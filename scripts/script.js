let dataStored = document.getElementById("dataStored");
function MakeTheStorage(cityName) {
  let ul = document.createElement("ul");
  ul.className = "favoritesStored";

  let li = document.createElement("li");
  li.textContent = cityName;
  li.id = cityName;

  let span = document.createElement("span");
  span.className = "close";
  span.textContent = "x";
  span.addEventListener("click", function () {
    if (cityName == li.id) {
      RemoveFromLocalStorage(cityName);
      document.getElementById(cityName).remove();
      FavoriteBtn.className = "button createButton";
      favOn = false;
    }
  });

  li.appendChild(span);
  ul.appendChild(li);

  dataStored.appendChild(ul);
}

import { GetWeatherByCityName, GetOneCall, weatherOneCall } from "./fetch.js";
import {
  SaveToLocalStorageByCityName,
  GetLocalStorage,
  RemoveFromLocalStorage,
  localStorageItem,
  favorites,
} from "./localStorage.js";
import { GetLocationData } from "./geolocation.js";

let CitySearchBtn = document.getElementById("CitySearchBtn");
let cityNameEntered = document.getElementById("cityNameEntered");

let FavoriteBtn = document.getElementById("FavoriteBtn");
let injectHere = document.getElementById("injectHere");
let FavoriteOff;
let FavoriteOn;

CitySearchBtn.addEventListener("click", function (e) {
  GetWeatherByCityName(cityNameEntered.value);
  favOn = false;
  if (!localStorageItem.includes(cityNameEntered.value.toLowerCase())) {
    favOn = false;
    FavoriteBtn.className = "button createButton";
  } else {
    favOn = true;
    FavoriteBtn.className = "button createButton2";
  }
});

function setFavoriteList() {
  if (favorites == []) {
    GetWeatherByCityName("Lodi");
  } else {
    for (let i = 0; i < favorites.length; i++) {
      MakeTheStorage(favorites[i]);
    }
  }
}

function getFavorites() {
  GetWeatherByCityName(favorites[0]);
  favorites.forEach((element) => {
    if (!element == "") {
      MakeTheStorage(false, element.toUpperCase());
      favOn = true;
      FavoriteBtn.className = "button createButton2";
    }
  });
}

cityNameEntered.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    GetWeatherByCityName(cityNameEntered.value);
    document.body.style.cursor = "wait";

    favOn = false;
    if (!localStorageItem.includes(cityNameEntered.value.toLowerCase())) {
      favOn = false;
      FavoriteBtn.className = "button createButton";
    } else if (localStorageItem.includes(cityNameEntered.value.toLowerCase())) {
      favOn = true;
      document.body.style.cursor = "default";

      FavoriteBtn.className = "button createButton2";
    }
  }
});

let favOn = false;
FavoriteBtn.addEventListener("click", function (e) {
  if (favOn == true) {
    //Needs to be unfavorited
    RemoveFromLocalStorage(cityNameEntered.value);
    //finds id of city name and removes it favorites
    document.getElementById(cityNameEntered.value).remove();
    FavoriteOff = FavoriteBtn.className = "button createButton";
  } else {
    //Needs to be favorited
    SaveToLocalStorageByCityName(cityNameEntered.value);
    FavoriteOn = FavoriteBtn.className = "button createButton2";
    MakeTheStorage(cityNameEntered);
  }
  favOn = !favOn;
});

GetLocationData();
GetWeatherByCityName("Lodi");
setFavoriteList();
