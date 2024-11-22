// const func1 = () =>{
//     document.getElementById('demo5').innerHTML = 'External JS';
// }

// const func2 = () =>{
//     document.getElementById('demo6').innerHTML = 'External JS 2';
// }

// document.getElementById('demo6').addEventListener('click', func2);

let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let div4 = document.querySelector("#div4");
let div5 = document.querySelector("#div5");
let div6 = document.querySelector("#div6");

const event = new Event('click');

div1.addEventListener("click", function (event) {
    alert("Component 1 event clicked");
},false);

div2.addEventListener("click", function (event) {
    alert("Component 2 event clicked");
},false);

div3.addEventListener("click", function (event) {
    alert("Component 3 event clicked");
},false);

div4.addEventListener("click", function (event) {
    alert("Component 4 event clicked");
},false);

div5.addEventListener("click", function (event) {
    alert("Component 5 event clicked");
},false);

div6.addEventListener("click", function (event) {
    alert("Component 6 event clicked");
},false);