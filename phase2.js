
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
    location.href = 'https://www.google.co.il/';
    }
}



function back(){
    location.href = 'https://www.google.co.il/';
}


