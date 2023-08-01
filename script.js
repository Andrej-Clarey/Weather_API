const apiKey = "717aa06d0d462e7489c488ca56b63daf"
let search = ""
cityForm = document.getElementById("city-form");
cityInput = document.getElementById("city-input");

cityName = document.getElementById("city-name");
temperature = document.getElementById("temperature");
feelsLike = document.getElementById("feels-like");
windSpeed = document.getElementById("wind-speed");
icon = document.getElementById("weather-icon");

cityForm.addEventListener("submit",event=>{
    event.preventDefault();
    search = cityInput.value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`)
.then(response => response.json())
.then(data =>{
    cityName.innerHTML = data.name;
    temperature.innerHTML = data.main.temp;
    feelsLike.innerHTML = data.main.feels_like;
    windSpeed.innerHTML = data.wind.speed;

    let iconLink = data.weather[0].icon;
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${iconLink}@2x.png`)
})
});