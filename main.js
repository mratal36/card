const btn = document.querySelector("button");
const back = document.querySelector(".back");
btn.addEventListener("click",()=>{
    back.classList.add("show");
    let mySound = new Audio('Mishri.mp3');
    mySound.play();
})