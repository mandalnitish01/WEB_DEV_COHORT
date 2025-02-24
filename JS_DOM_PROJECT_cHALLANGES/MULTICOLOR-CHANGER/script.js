const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const heading = document.querySelector('h1');

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e.target.id);
    heading.style.color = e.target.id;
    // body.style.backgroundColor = e.target.id; // This works as long as the button's ID is a valid color
  });
});