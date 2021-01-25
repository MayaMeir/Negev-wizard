const   myName = localStorage.getItem("name"), 
        email = localStorage.getItem("email"), 
        birthdayDate = localStorage.getItem("birthdayDate"),
        city = localStorage.getItem("city"),
        street = localStorage.getItem("street"),
        streetNumber = localStorage.getItem("streetNumber"),
        imageUrl =  localStorage.getItem("imageUrl"),
        hobbies =  localStorage.getItem("hobbies");

const   displayName = document.querySelector("#userName"),
        displayEmail = document.querySelector("#userEmail"),
        displayBirthday = document.querySelector("#userBirthday"),
        displayAddress = document.querySelector("#userAddress"),
        displayHobbies = document.querySelector("#userHobbies");

function updateDetails(){
        if(myName !== null){
                displayName.innerHTML += " "+myName;
        }
        if(email !== null){
                displayEmail.innerHTML += " "+email;
        }
        if(birthdayDate !== null){
                displayBirthday.innerHTML += " "+birthdayDate;
        }
        if(city !== null && street !== null && streetNumber !== null){
                displayAddress.innerHTML += " "+street+", "+streetNumber+", "+city;

        }
        if(hobbies !== null){
                displayHobbies.innerHTML += "Hobbies: "+hobbies;
        }
}
        
updateDetails();