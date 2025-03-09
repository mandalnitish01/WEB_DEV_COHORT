// console.log("hii");
// const data = fetch("https://apii.freeapi.app/api/v1/public/randomproducts");
// data.then(function () {
//   console.log("loogi data aa gya");
// });
// console.log(data)
// data.catch(function(){
//     console.log("error");
// })
// console.log("byy");

const title = document.getElementById("title");

function rendertoscreen(obj) {
  const products = obj.data.data;
  // console.log(products)
  products.forEach((product) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const button = document.createElement("button");
    li.innerText = product.title;
    p.innerText = product.description;
    button.innerText = product.price;
    title.appendChild(li);
    title.appendChild(p);
    title.appendChild(button);
  });
}
const result = fetch("https://api.freeapi.app/api/v1/public/randomproducts");
result
  .then((res) => {
    return res.json();
  })
  .then(rendertoscreen);

result.catch((err) => {
  console.log("error");
});
