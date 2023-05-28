
/* const cards = document.querySelector(".card");

cards.addEventListener("click", function(){

}) */

const openbtn = document.querySelector(".openbtn");
const closebtn = document.querySelector(".closebtn");
const menu = document.querySelector(".menu");

openbtn.addEventListener("click", ()=>{
    closebtn.style.display = "block";
    menu.style.display = "block";
    openbtn.style.display = "none";
})

closebtn.addEventListener("click", ()=>{
    closebtn.style.display = "none";
    menu.style.display = "none";
    openbtn.style.display = "block";
})