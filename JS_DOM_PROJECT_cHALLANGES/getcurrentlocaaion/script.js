const button = document.getElementById('btn')   

async function getweather(lat,long) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=f7221e3637f1425494561440252702&q=${lat},${long}&aqi=yes`);
    console.log(lat,long);
    return  await promise.json();
}

async function successgetlocation(position){
    const {latitude, longitude} = position.coords;
    console.log(latitude, longitude);
    getweather(latitude, longitude).then((result)=>{
        console.log(result)
    })
}
async function failedgetlocation(){
     console.log("There is some issue with the location, I can not find it. Please try again")
}
function fetchCurrentLocationWeather(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(successgetlocation , failedgetlocation)
    }
    else{
        console.log("Geolocation is not supported by this browser.")
    }
}
window.onload = fetchCurrentLocationWeather;






















// button.addEventListener('click', async() => {
//     navigator.geolocation.getCurrentPosition(successgetlocation , failedgetlocation)
// })

// getweather(navigator.geolocation.getCurrentPosition(successgetlocation , failedgetlocation))

// const currentlocation = navigator.geolocation.getCurrentPosition(successgetlocation , failedgetlocation)
// getweather(currentlocation.latitude, currentlocation.longitude)
// // console.log(currentlocation);
// console.log(currentlocation.latitude, currentlocation.longitude)