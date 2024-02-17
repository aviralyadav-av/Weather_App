const apiKey = "9831c4ba763d9d605f8f350643b6289a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";

  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/H";

  if (data.weather[0].main == "clouds") {
    weatherIcon.src = "images/clouds.png";
  } 
  else if (data.weather[0].main == "clear") {
    weatherIcon.src = "images/clear.png";
  }
  else if (data.weather[0].main == "drizzle") {
    weatherIcon.src = "images/drizzle.png";
  }
  else if (data.weather[0].main == "mist") {
    weatherIcon.src = "images/mist.png";
  }
  else if (data.weather[0].main == "rain") {
    weatherIcon.src = "images/rain.png";
  }

  // switch(data.weather[0].main){
  //   case 'clear': weatherIcon.src = "images/clear.png";
  // break;
  // case'clouds':
  // weatherIcon.src = "images/clouds.png";
  // break;
  // case 'mist': weatherIcon.src = "images/mist.png";
  // break;
  // case 'rain': weatherIcon.src = "images/rain.png";
  // break;
  // case'snow': weatherIcon.src = "images/snow.png";
  // break;
  //   }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
