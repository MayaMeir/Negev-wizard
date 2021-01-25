var nextBtn = document.querySelector('#addData'),
    inputName = document.querySelector("#name"),
    inputEmail = document.querySelector("#email"),
    inputDate = document.querySelector("#birthdate");

window.onload = function(){
   document.querySelector("#addData").
    addEventListener("click", function(e){
       e.preventDefault();
   })
}

function checkNameLength(){
    var inputName = document.getElementById("name");
    if(inputName.value.length <= 3){
        alert("name input invalid")
        return;
    }
}

function checkMailValidation(){
    var inputEmail = document.getElementById("email");
    if(inputEmail.value = ""){
        alert("email input invalid")
        return;
    }
}
function ValidateEmail(inputEmail)
{
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    var inputEmail = document.getElementById("inputEmail");
    
    if (regexEmail.test(!inputEmail.value)) {
        alert("Not valid")
    }
}

function checkDate(){
    var inputDate = document.getElementById("birthdate");
    if(inputDate.value = ""){
        alert("Please insert birth date")
        return;
    }
}

