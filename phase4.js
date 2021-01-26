const displayName = document.querySelector("#userName"),
    displayEmail = document.querySelector("#userEmail"),
    displayBirthday = document.querySelector("#userBirthday"),
    displayAddress = document.querySelector("#userAddress"),
    displayHobbies = document.querySelector("#userHobbies"),
    displayImage = document.querySelector("#userImg");

let userString = localStorage.getItem('User'),
    UserObj = {},
    prevBtn = document.querySelector("#prev");


function prev() {
    location.href = 'phase3.html';

}

prevBtn.addEventListener("click", function () {
    prev();
});



function updateDetails() {
    if (userString) {
        UserObj = JSON.parse(userString);
        if (UserObj.name !== null && UserObj.name !== undefined) {
            displayName.innerHTML += " " + UserObj.Name;
        }
        if (UserObj.email !== null && UserObj.email !== undefined) {
            displayEmail.innerHTML += " " + UserObj.email;
        }
        if (UserObj.birthdayDate !== null && UserObj.birthdayDate !== undefined) {
            displayBirthday.innerHTML += " " + UserObj.birthdayDate;
        }
        if ((UserObj.city !== null && UserObj.city !== undefined) &&
            (UserObj.street !== null && UserObj.street !==undefined) &&
             (UserObj.streetNumber !== null && UserObj.streetNumber !== undefined)) {
            displayAddress.innerHTML += " " + UserObj.street + ", " + UserObj.streetNumber + ", " + UserObj.city;

        }
        if (UserObj.hobbies !== null && UserObj.hobbies !== undefined) {
            displayHobbies.innerHTML += "Hobbies: " + UserObj.hobbies;
        }
        if (UserObj.imageUrl !== null && UserObj.imageUrl !== undefined) {
            displayImage.src = UserObj.imageUrl;
        }
    }
}

updateDetails();