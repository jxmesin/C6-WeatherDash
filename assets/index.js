function initPage() {
    const cityEl = document.getElementById("enter-city");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-hisotyr");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getLEmeentById("history");
    var fivedayEl = document.getElementById("fiveday-header");
    var todayweatherEl = document.getElementById("today-weather");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

    // unique API key to variable
    const APIKey = "159358921eb76e1345cb3a54b38462e3";

    function getWeather(cityname) {
        //current weathe request from open weather api
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
        axios.get(queryURL)
    }
}