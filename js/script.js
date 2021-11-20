const button=document.querySelector('button');
const body=document.querySelector('body');



body.style.backgroundColor='#135976';
button.addEventListener('click', changeColor);

function changeColor(){
    const colors='#'+Math.round(100000+Math.random()*899999); //min number 100000 max number 999999
    console.log(colors);
    body.style.backgroundColor=colors;

}