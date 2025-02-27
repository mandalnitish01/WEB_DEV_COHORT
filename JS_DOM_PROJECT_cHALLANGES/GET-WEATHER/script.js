const input = document.getElementById('input-city');
const button = document.getElementById('get-weather');

const Cname = document.getElementById('Cname');
const Ctemp = document.getElementById('Ctemp');
const Ccontry = document.getElementById('Ccontry');  
const Creason = document.getElementById('Creason');
const time = document.getElementById('time');
const temprature = document.getElementById('temprature');
const icon = document.getElementById('icon');
const humidity = document.getElementById('humidity');

async function getWeatherByCity(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=f7221e3637f1425494561440252702&q=${city}&aqi=yes`);
   
    return await response.json();
}

async function getWeatherByCoords(lat, long) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=f7221e3637f1425494561440252702&q=${lat},${long}&aqi=yes`);
    return await response.json();
}

async function successgetlocation(position) {
    const { latitude, longitude } = position.coords;
    getWeatherByCoords(latitude, longitude).then((result) => {
        Ccontry.innerText = result.location.country;
        Creason.innerText = result.current.condition.text;
        Cname.innerText = result.location.name;
        Ctemp.innerText = result.location.region;
        time.innerText = result.location.localtime;
        temprature.innerText = result.current.temp_c;
        icon.src = result.current.condition.icon;
        humidity.innerText = result.current.humidity;
    });
}

function failedgetlocation() {
    console.log("There is some issue with the location, I can not find it. Please try again.");
}

function fetchCurrentLocationWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successgetlocation, failedgetlocation);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

window.onload = fetchCurrentLocationWeather;

button.addEventListener('click', async () => {
    const city = input.value;
    await getWeatherByCity(city).then((result)=>{
        Ccontry.innerText = result.location.country;
        Creason.innerText = result.current.condition.text;
        Cname.innerText = result.location.name;
        Ctemp.innerText = result.location.region;
        time.innerText = result.location.localtime;
        temprature.innerText = result.current.temp_c;
        icon.src = result.current.condition.icon;
        humidity.innerText = result.current.humidity;
    })
    .then(() => {
        input.value = "";
    })
    .catch(() => {
        Cname.innerText = "City not found";
        console.log("error");
    });

});



