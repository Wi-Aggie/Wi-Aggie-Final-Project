let Form = document.querySelector("#Form");
const display = document.getElementById('msg'); 
Form.addEventListener("submit", checkForm, );


function checkForm(event) {
   Form.contactInfo.style.backgroundColor = "LightGreen";
   

   if (Form.contactInfo.value === "") {
      Form.contactInfo.style.backgroundColor = "Orange";
      display.textContent = "";
      event.preventDefault();
   }


   }

function showSuccessMessage(event){
    event.preventDefault();

    if(Form.contactInfo.value != ""){
      display.textContent = "We Have recived you're info and will contact you soon!";
      display.style.color = "Green";
    }
    
}

const form = document.getElementById('Form');
form.addEventListener('submit', showSuccessMessage)

