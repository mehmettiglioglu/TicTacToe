let box=document.querySelectorAll(".boxes");
let playerX="X";
let playerY="Y";

box.forEach(element => {
    element.addEventListener("click",(e)=>{
         e.target.innerText=playerX;
    })
});