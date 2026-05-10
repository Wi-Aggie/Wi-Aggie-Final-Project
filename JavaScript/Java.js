let Game = document.querySelector("#Game");
const display = document.getElementById('msg'); 
Game.addEventListener("submit", checkForm, );


function checkForm(event) {
   Game.favoriteGame.style.backgroundColor = "LightGreen";
   

   if (Game.favoriteGame.value === "") {
      Game.favoriteGame.style.backgroundColor = "Orange";
      display.textContent = "";
      event.preventDefault();
   }


   }

function showSuccessMessage(event){
    event.preventDefault();

    if(Game.favoriteGame.value != ""){
      display.textContent = "Thats a good Game";
      display.style.color = "Green";
    }
    
}

const form = document.getElementById('Game');
form.addEventListener('submit', showSuccessMessage)

