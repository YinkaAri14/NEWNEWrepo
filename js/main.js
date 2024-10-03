// JS scripts placed here

const myButton = document.getElementById("intro")
const myButton2 = document.getElementById("submit")
console.log(myButton);
console.log(myButton2)

const element = document.getElementsByTagName("p")
console.log(element)

const x = document.querySelectorAll(".logo")
console.log(x);

const y = document.querySelector(".logo")
console.log(y);


const nameInput = document.getElementById('name')
const nameValue = nameInput.value;
console.log('nameInput:', nameInput);
console.log('nameValue', nameValue);
alert('You clicked me!,'+ nameValue);