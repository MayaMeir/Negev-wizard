let userString = localStorage.getItem('User');
let UserObj = {};
if (userString){
    UserObj = JSON.parse(userString);
}
else{
    alert("YOU DONT BELONG HERE!!!");
    // location.href = 'doom.com';

}
window.onload = function(){
    document.querySelector("#nextBtn").addEventListener("click", function (e){
        e.preventDefault();
        next();
    })
}

function next(){

    const city = document.querySelector("#city").value;
    const street = document.querySelector("#street").value;
    const streetNumber = document.querySelector("#streetNumber").value;

    if((city == '') || (street == '') ||(streetNumber == '')){
        alert("oops! you missed something");
    }
    else{
        UserObj.city = city;
        UserObj.street = street;
        UserObj.streetNumber = streetNumber;
        let objString = JSON.stringify(UserObj); //now its string
        localStorage.setItem('User', objString);
    // location.href = 'phase3.html';
    }
}


function back(){
    location.href = 'index.html';
}


function setUp() {

    const city = document.querySelector("#city").value;
    const street = document.querySelector("#street").value;
    const streetNumber = document.querySelector("#streetNumber").value;

    if (UserObj.city != null || UserObj.city != undefined) {
        city.value = UserObj.city;
    }
    if (UserObj.street != null || UserObj.street != undefined) {
        street.value = UserObj.street;
    }
    if (UserObj.streetNumber != null || UserObj.streetNumber != undefined) {
        streetNumber.value = UserObj.streetNumber;
    }
}
setUp();



