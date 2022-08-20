// DOM etiketlerini seçtim

let box=document.querySelectorAll(".boxes");
let alertDOM=document.querySelector("#alert");
let boxArea=document.querySelector(".box-area");

let playerX="X";
let playerO="O";

// Sırayla olmasını kontrol etmek adına bir değişken oluşturdum ve default değeri olarak false verdim.
let turn=false;
// Oyunun bitip bitmediğini kontrol etmek için değişken oluşturup true değer atadım.
let gameActive=true;

let counter=0;

// Bütün buttonlara event eklemek için foreach kullandım. 

box.forEach(element => {
    element.addEventListener("click",(e)=>{
         if(turn==false)
         {
            // Tıklanılan öğeye "X" yazıyor.
            e.target.textContent=playerX;
            e.target.style="color:#003865"
            // Tıklanılan öğeye bir kez daha tıklanmamasını sağladım.
            e.target.disabled=true;
            // Player X tuşa bastıktan sonra turn değerini true'ya çevirdim.
            turn=true;
         }
        
        else if(turn==true)
        {
            // PlayerX tuşa bastığında turn değeri trueya dönüyor ve sıranın PlayerO'ya geçtiğini kontrol ediyorum.

            // Tıklanılan öğeye "X" yazıyor.
            e.target.textContent=playerO;
            e.target.style="color:#EF5B0C"
             // Tıklanılan öğeye bir kez daha tıklanmamasını sağladım.
            e.target.disabled=true;
            // Sıranın tekrar döndüğünü belirtmek için turn değerini false'a çevirdim.
            turn=false;
        }

        // Fonksiyonları çalıştırdım.
     checkWin();
     disableButton();
     checkTie();
    })
});




function checkWin()
{
    // Oyunu kazanabilecek kombinleri if yardımıyla kontrol ettim.Hepsini tek bir if yardımıyla kontrol edebilirdim fakat animasyon eklemek istediğim için böyle yaptım. Kesinlikle daha kısa bir yolu vardır fakat bilmediğim için böyle yapmak zorunda kaldım.
    if(box[0].textContent=="X" && box[1].textContent=="X" && box[2].textContent=="X")
        {   
            // Kazanan üçlüye animasyon ekledim.
            box[0].classList.add("animation")
            box[1].classList.add("animation")
            box[2].classList.add("animation")   
            // Kazandığında ekranın üstüne yazı yazdım.        
            alertDOM.innerHTML=` <div id="alert">PLAYER "X" WON </div>`
            alertDOM.classList.add("alert")
            alertDOM.style="border:2px solid black; border-radius:10px; background-color:beige" 
            // Oyun bittiği için false'a çevirdim.          
            gameActive=false;
            // Oyun bittiğinde buttonlara tıklanmamasını sağladım.
            box.disabled=true;
          
        }
    else if(box[3].textContent=="X" && box[4].textContent=="X" && box[5].textContent=="X" )
    {
        box[3].classList.add("animation")
        box[4].classList.add("animation")
        box[5].classList.add("animation")
        alertDOM.innerHTML=` <div id="alert">PLAYER "X" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:beige"    
        gameActive=false;
        box.disabled=true;
    }
    else if(box[6].textContent=="X" && box[7].textContent=="X" && box[8].textContent=="X")
    {
        box[6].classList.add("animation")
        box[7].classList.add("animation")
        box[8].classList.add("animation")
        alertDOM.innerHTML=` <div id="alert">PLAYER "X" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:beige"    
        gameActive=false;
        box.disabled=true;
    }
    else if( box[0].textContent=="X" && box[4].textContent=="X" && box[8].textContent=="X")
    {
        box[0].classList.add("animation")
        box[4].classList.add("animation")
        box[8].classList.add("animation")
        alertDOM.innerHTML=` <div id="alert">PLAYER "X" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:beige"    
        gameActive=false;
        box.disabled=true;
    }
    else if(box[2].textContent=="X" && box[4].textContent=="X" && box[6].textContent=="X" )
    {
        box[2].classList.add("animation")
        box[4].classList.add("animation")
        box[6].classList.add("animation")
        alertDOM.innerHTML=` <div id="alert">PLAYER "X" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:beige"    
        gameActive=false;
        box.disabled=true;
    }
    else if( box[0].textContent=="X" && box[3].textContent=="X" && box[6].textContent=="X" )
    {
        box[0].classList.add("animation")
        box[3].classList.add("animation")
        box[6].classList.add("animation")
        alertDOM.innerHTML=` <div id="alert">PLAYER "X" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:beige"    
        gameActive=false;
        box.disabled=true;
    }
    else if(box[1].textContent=="X" && box[4].textContent=="X" && box[7].textContent=="X" )
    {
        box[1].classList.add("animation")
        box[4].classList.add("animation")
        box[7].classList.add("animation")
        alertDOM.innerHTML=` <div id="alert">PLAYER "X" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:beige"    
        gameActive=false;
        box.disabled=true;
    }
    else if(box[2].textContent=="X" && box[5].textContent=="X" && box[8].textContent=="X")
    {
        box[2].classList.add("animation")
        box[5].classList.add("animation")
        box[8].classList.add("animation")
        alertDOM.innerHTML=` <div id="alert">PLAYER "X" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:beige"    
        gameActive=false;
        box.disabled=true;
    }
    else if(box[0].textContent=="O" && box[1].textContent=="O" && box[2].textContent=="O")

        {
            box[0].classList.add("animation");
            box[1].classList.add("animation");
            box[2].classList.add("animation");
            alertDOM.innerHTML=` <div id="alert">PLAYER "O" WON </div>`
            alertDOM.classList.add("alert")
            alertDOM.style="border:2px solid black; border-radius:10px; background-color:coral"
            gameActive=false;
        }
    else if(box[3].textContent=="O" && box[4].textContent=="O" && box[5].textContent=="O" )
    {
        box[3].classList.add("animation");
        box[4].classList.add("animation");
        box[5].classList.add("animation");
        alertDOM.innerHTML=` <div id="alert">PLAYER "O" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:coral"
        gameActive=false;
    }
    else if(box[6].textContent=="O" && box[7].textContent=="O" && box[8].textContent=="O" )
    {
        box[6].classList.add("animation");
        box[7].classList.add("animation");
        box[8].classList.add("animation");
        alertDOM.innerHTML=` <div id="alert">PLAYER "O" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:coral"
        gameActive=false;
    }
    else if( box[0].textContent=="O" && box[4].textContent=="O" && box[8].textContent=="O" )
    {
        box[0].classList.add("animation");
        box[4].classList.add("animation");
        box[8].classList.add("animation");
        alertDOM.innerHTML=` <div id="alert">PLAYER "O" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:coral"
        gameActive=false;
    }
    else if(box[2].textContent=="O" && box[4].textContent=="O" && box[6].textContent=="O")
    {
        box[2].classList.add("animation");
        box[4].classList.add("animation");
        box[6].classList.add("animation");
        alertDOM.innerHTML=` <div id="alert">PLAYER "O" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:coral"
        gameActive=false;
    }
    else if(box[0].textContent=="O" && box[3].textContent=="O" && box[6].textContent=="O" )
    {
        box[0].classList.add("animation");
        box[3].classList.add("animation");
        box[6].classList.add("animation");
        alertDOM.innerHTML=` <div id="alert">PLAYER "O" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:coral"
        gameActive=false;
    }
    else if( box[1].textContent=="O" && box[4].textContent=="O" && box[7].textContent=="O" )
    {
        box[1].classList.add("animation");
        box[4].classList.add("animation");
        box[7].classList.add("animation");
        alertDOM.innerHTML=` <div id="alert">PLAYER "O" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:coral"
        gameActive=false;
    }
    else if(box[2].textContent=="O" && box[5].textContent=="O" && box[8].textContent=="O")
    {
        box[2].classList.add("animation");
        box[5].classList.add("animation");
        box[8].classList.add("animation");
        alertDOM.innerHTML=` <div id="alert">PLAYER "O" WON </div>`
        alertDOM.classList.add("alert")
        alertDOM.style="border:2px solid black; border-radius:10px; background-color:coral"
        gameActive=false;
    }
}

// Oyun bittiğinde boşta kalan buttonlara tıklanmamasını sağlayan fonksiyonu yazdım.
function disableButton(){
    // Eğer oyun bitmişse gameActive false olacaktır. 
    if(gameActive==false){
        // Eğer gameActive false'sa her bir buttona tıklanmamasını sağladım foreach yardımıyla.
        box.forEach(element => {
           element.disabled=true; 
        });
    }
}

// Beraberliği kontrol edecek fonksiyonu yazdım. 
function checkTie()
{
    // For döngüsü ile her bir buttonun içinde değer olduğunu kontrol ettim.
    for(let i=0;i<box.length;i++)
        {
            if(box[i].textContent)
            {
        counter++;
            }
        }

        // Her buttona tıklandığında counter sayısı 45 oluyor.
        // Eğer hepsine tıklanmışsa ve oyun hala bitmemişse diyerek beraberlik durumunu kontrol ettim.
    if(counter==45 && gameActive!=false)
        {
            alertDOM.innerHTML=` <div id="alert"> TIE </div>`
            alertDOM.classList.add("alert")
            alertDOM.style="border:2px solid black; border-radius:10px; background-color:beige"
            gameActive=false;
            box.disabled=true;
        }
}