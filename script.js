let box=document.querySelectorAll(".boxes");
let alertDOM=document.querySelector("#alert");
let boxArea=document.querySelector(".box-area")
let playerX="X";
let playerO="O";
let oTurn=false;
let gameActive=true;
let counter=0;

box.forEach(element => {
    element.addEventListener("click",(e)=>{
         if(oTurn==false)
         {
            e.target.textContent=playerX;
            e.target.style="color:#003865"
            e.target.disabled=true;
            oTurn=true;
         }
        
        else if(oTurn==true)
        {
            e.target.textContent=playerO;
            e.target.style="color:#EF5B0C"
            e.target.disabled=true;
            oTurn=false;
        }

     checkWin();
     disableButton();
     checkTie();
    })
});


function checkWin()
{
    if(box[0].textContent=="X" && box[1].textContent=="X" && box[2].textContent=="X" ||box[3].textContent=="X" && box[4].textContent=="X" && box[5].textContent=="X" || box[6].textContent=="X" && box[7].textContent=="X" && box[8].textContent=="X" || box[0].textContent=="X" && box[4].textContent=="X" && box[8].textContent=="X" || box[2].textContent=="X" && box[4].textContent=="X" && box[6].textContent=="X" || box[0].textContent=="X" && box[3].textContent=="X" && box[6].textContent=="X" || box[1].textContent=="X" && box[4].textContent=="X" && box[7].textContent=="X" || box[2].textContent=="X" && box[5].textContent=="X" && box[8].textContent=="X")
        {
            alertDOM.innerHTML=` <div id="alert">PLAYER "X" WON </div>`
            alertDOM.classList.add("alert")
            alertDOM.style="border:1px solid red; border-radius:10px; background-color:azure"
            
            gameActive=false;
            box.disabled=true;
        }
    else if(box[0].textContent=="O" && box[1].textContent=="O" && box[2].textContent=="O" ||box[3].textContent=="O" && box[4].textContent=="O" && box[5].textContent=="O" || box[6].textContent=="O" && box[7].textContent=="O" && box[8].textContent=="O" || box[0].textContent=="O" && box[4].textContent=="O" && box[8].textContent=="O" || box[2].textContent=="O" && box[4].textContent=="O" && box[6].textContent=="O"|| box[0].textContent=="O" && box[3].textContent=="O" && box[6].textContent=="O" || box[1].textContent=="O" && box[4].textContent=="O" && box[7].textContent=="O" || box[2].textContent=="O" && box[5].textContent=="O" && box[8].textContent=="O")

        {
            alertDOM.innerHTML=` <div id="alert">PLAYER "O" WON </div>`
            alertDOM.classList.add("alert")
            alertDOM.style="border:1px solid red; border-radius:10px; background-color:#EF5B0C"
            gameActive=false;
        }
}

function disableButton(){
    if(gameActive==false){
        box.forEach(element => {
           element.disabled=true; 
        });
    }
}
function checkTie()
{
    for(let i=0;i<box.length;i++)
        {
            if(box[i].textContent)
            {
        counter++;
            }
        }

    if(counter==45 && gameActive!=false)
        {
            alertDOM.innerHTML=` <div id="alert"> TIE </div>`
            alertDOM.classList.add("alert")
            alertDOM.style="border:1px solid red; border-radius:10px; background-color:azure"
            gameActive=false;
            box.disabled=true;
        }
}