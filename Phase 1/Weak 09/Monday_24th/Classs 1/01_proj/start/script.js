function upadtedcoack(){
    const newtime = document.getElementById("time");
const newdate = document.getElementById("date");

const now = new Date();
// console.log(now)
const houers = now.getHours() % 12 || 12;
// console.log(houers)
const minutes = now.getMinutes().toString().padStart(2, "0");
// console.log(minutes)
const seconds = now.getSeconds().toString().padStart(2, "0");
// console.log(seconds)
const ampm = now.getHours() <= 12 ? "AM" : "PM";
// console.log(ampm)
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};
newdate.textContent = now.toLocaleDateString(undefined, options);
newtime.textContent = `${houers}:${minutes}:${seconds}:${ampm}`;
}
setInterval(upadtedcoack, 1000);
upadtedcoack()