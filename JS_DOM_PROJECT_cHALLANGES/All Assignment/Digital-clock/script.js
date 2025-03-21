const Time = document.getElementById("time")
const date = document.getElementById("date");

const now = new Date();
const houre = now.getHours() % 12 || 12;
const minutes = now.getMinutes().toString().padStart(2,"0");
const second = now.getSeconds().toString().padStart(2,"0")
const ampm = now.getHours()>= 12 ? "PM" : "AM";
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
const currentdate = now.toLocaleDateString(undefined , Option);

Time.textContent = `${houre} : ${minutes} : ${second} : ${ampm}`
date.textContent = `${currentdate}`

