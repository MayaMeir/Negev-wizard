
let userString = localStorage.getItem('User');
let UserObj = {};
if (userString){
    UserObj = JSON.parse(userString);
}
else{
    alert("YOU DONT BELONG HERE!!!");
    // location.href = 'doom.com';

}

let hobbies = [{ id: 1, name: 'Chess' }, { id: 2, name: 'Movies' }, { id: 3, name: 'Sport' }, { id: 4, name: 'Cars' }, { id: 5, name: 'Dolls' }];
let btn = document.querySelector("#finishBtn");


window.onload = function () {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        next();
    })
}

function setUp() {

    let url = document.querySelector("#imageUrl");
    let hobbies = document.querySelector("#hobbies").value;

    if (UserObj.imageUrl != null || UserObj.imageUrl != undefined) {
        url.value = UserObj.imageUrl;
    }

    if (UserObj.hobbies != null || UserObj.hobbies != undefined) {
        for (let hobby of UserObj.hobbies) {
            let currentHobby = document.querySelector(`input[value = '${hobby}']`);
            currentHobby.checked = true;
        }
    }

}

function next() {
    let url = document.querySelector("#imageUrl").value;
    let checkboxes = document.querySelectorAll('#hobbies');
    if (url == '') {
        alert("You have to enter a picture url! ");
        return;
    }
    else {
        //push to local storage
        UserObj.imageUrl = url;
        let checked = [];
        for (let hobby of checkboxes) {
            if (hobby.checked) {
                checked.push(hobby.value);
            }
            console.log(hobby.value);
            console.log(hobby.checked);

        }
        UserObj.hobbies = checked;
        let objString = JSON.stringify(UserObj); //now its string
        localStorage.setItem('User', objString);
        // location.href = 'phase4.html';
    }

}

function prev() {
    //pull from local storage
    location.href = 'phase2.html';

}


setUp();