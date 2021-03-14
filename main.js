const button =document.querySelector('button');
const body = document.querySelector('body');
const color =['blue', 'red','green', 'yellow','pink'];

body.style.backgroundColor ='violet';
button.addEventListener('click', changeColor);

function changeColor() {
const index =parseInt(Math.random() * color.length);
body.style.backgroundColor =color[index];
button.style.backgroundColor =color[index];
}