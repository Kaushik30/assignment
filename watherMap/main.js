// Get DOM elements
let searchBtn = document.querySelector("#search");
let cityInput = document.querySelector("#cityInp");
let mapIframe = document.querySelector("#map");
let displayYourData = document.querySelector("#dataCity");

// Event listener for the search button
searchBtn.addEventListener("click", function () {
    let cityInputElement = cityInput.value;
    mapIframe.src = `https://maps.google.com/maps?q=${cityInputElement}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    searchYourCityClimate(cityInputElement);
});

// Function to fetch weather data from OpenWeatherMap
async function searchYourCityClimate(cityName) {
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d65dcca6fcfdef690ff9957e0561fb39`);
        let data = await res.json();
        printData(data);
    } catch (error) {
        console.error("Data not found:", error);
        displayYourData.textContent = 'Weather data not found.';
    }
}

function printData(data) {
    displayYourData.innerHTML = ""; // Clear previous data

    let weatherCard = document.createElement("div");
    weatherCard.className = "weather-card";

    let cityName = createWeatherInfo("City Name: " + data.name);

    let cityMinTemp = createWeatherInfo("Minimum Temperature: " + data.main.temp_min, "https://cdn-icons-png.flaticon.com/128/2322/2322701.png");
    let cityMaxTemp = createWeatherInfo("Maximum Temperature: " + data.main.temp_max, "https://cdn-icons-png.flaticon.com/128/1684/1684426.png");
    let citySunRise = createWeatherInfo("Sunrise at: " + new Date(data.sys.sunrise * 1000).toLocaleTimeString(), "https://cdn-icons-png.flaticon.com/128/8098/8098355.png");
    let citySunSet = createWeatherInfo("Sunset at: " + new Date(data.sys.sunset * 1000).toLocaleTimeString(), "https://cdn-icons-png.flaticon.com/128/8098/8098358.png");
    let cityWind = createWeatherInfo("Wind Speed: " + data.wind.speed + " m/s", "https://cdn-icons-png.flaticon.com/128/2011/2011448.png");

    let cityWeatherIcon = document.createElement("img");
    cityWeatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    cityWeatherIcon.alt = "Weather Icon";

    let cityWeather = createWeatherInfo(data.weather[0].description);

    weatherCard.append(cityName, cityMinTemp, cityMaxTemp, citySunRise, citySunSet, cityWind, cityWeatherIcon, cityWeather);
    displayYourData.appendChild(weatherCard);
}

// Helper function to create weather information with an optional icon
function createWeatherInfo(text, iconSrc) {
    let infoContainer = document.createElement("div");
    infoContainer.className = "weather-info";

    if (iconSrc) {
        let icon = document.createElement("img");
        icon.src = iconSrc;
        icon.className = "weather-icon";
        infoContainer.appendChild(icon);
    }

    let infoText = document.createElement("p");
    infoText.textContent = text;
    infoContainer.appendChild(infoText);

    return infoContainer;
}
