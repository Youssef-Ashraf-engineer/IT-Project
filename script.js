function search(){
    let hotels = document.querySelectorAll(".hotel-card")
    let placevalue = document.querySelector("#place").value
    let datevalue = document.querySelector("#date").value
    let numbervalue = document.querySelector("#number-input").value
    hotels.forEach(element => {
        let place = element.dataset.place;
        let dates = element.dataset.date;
        let number = element.dataset.number;
        if(place!==placevalue && placevalue!="all"){
            element.style.display="none"
        }
        else if(!dates.includes(datevalue) && datevalue!="all"){
            element.style.display="none"
        }
        else if(number<numbervalue && numbervalue!=0){
            element.style.display="none"
        }
        else{
            element.style.display="block"
        }
    });
}

const input = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");
const place = document.getElementById("place");


input.addEventListener("focus", () => {
  dropdown.style.display = "block";
});

document.querySelectorAll(".dropdown div").forEach(item => {
  item.onclick = () => {
    input.value = item.textContent;
    dropdown.style.display = "none";
    place.value=item.textContent;
  };
});


const dateinput = document.getElementById("dateInput");
const datedropdown = document.getElementById("datedropdown");
const date = document.getElementById("date");


dateinput.addEventListener("focus", () => {
  datedropdown.style.display = "block";
});

document.querySelectorAll("#datedropdown div").forEach(item => {
  item.onclick = () => {
    dateinput.value = item.textContent;
    datedropdown.style.display = "none";
    date.value=item.textContent;
  };
});
//************************************************* */
//************************************************* */
// register of page by uoeel 
//************************************************* */
/************************************************** */
const myRegister = document.getElementById("register");

myRegister.addEventListener('submit', function (event) {
    // will appear error if user do not give the first name 

    const firstName = document.getElementById("firstName").value;
    const error1 = document.getElementById("firstNameError");
    error1.textContent = "";
    if (firstName === "") {
        event.preventDefault();
        error1.textContent = "Please Enter your First Name";
    }

    // will appear error if user do not give the last name

    const lastName = document.getElementById("lastname").value;
    const error2 = document.getElementById("lastNameError");
    error2.textContent = "";
    if (lastName === "") {
        event.preventDefault();
        error2.textContent = "Please Enter Your Last Name";
    }

    // will appear error if user do not give the email

    const email = document.getElementById("email").value;
    const error3 = document.getElementById("emailll");
    error3.textContent = "";
    if (email === "") {
        event.preventDefault();
        error3.textContent = "Please Enter Your Email";
    }

    // will appear error if user do not give the password

    const password = document.getElementById("pass").value;
    const error4 = document.getElementById("PSSWORD");
    error4.textContent = "";
    if (password === "") {
        event.preventDefault();
        error4.textContent = "Please Enter Your Password";
    }

    // will appear error if user do not give the password

    const password2 = document.getElementById("pass2").value;
    const error5 = document.getElementById("PSSWORD2");
    error5.textContent = "";
    if (password2 === "" || password !== password2) {
        event.preventDefault();
        if (password2 === "") { error5.textContent = "Please Confirm Your Password"; }
        if (password !== password2) { error5.textContent = "Password Do not Match" }
    }


    // will appear error if user do not give the ID national

    const ID = document.getElementById("idnumber").value;
    const error6 = document.getElementById("IDNumber");
    error6.textContent = "";
    if (ID.length === "" || ID.length !== 14) {
        event.preventDefault();
        if (ID.length === "") { error6.textContent = "Please Enter Your ID National"; }
        if (ID.length !== 14 && ID.length > 0) { error6.textContent = "ID must be 14 Numbers"; }
    }

})

// Local storage

let UserName = document.querySelector('#firstName');
let LastName = document.querySelector('#lastname');
let Email = document.querySelector('#email');
let Password = document.querySelector('#pass');
let IDNationl = document.querySelector('#idnumber');
let Number1 = document.querySelector('#Number');
let Birth = document.querySelector('#birth');
let Photo = document.querySelector('#photo');
let submit = document.querySelector('#submit');

// array of task
let arrayOfTask = localStorage.getItem("allUsers") ?
JSON.parse(localStorage.getItem("allUsers")):[];

// submit task
submit.onclick = function (e) {
    e.preventDefault();
    addTaskToArray(
    UserName.value ,
    LastName.value ,
    Email.value ,
    Password.value,
    IDNationl.value ,
    Number1.value ,
    Birth.value ,
    Photo.value 
    );
    UserName.value = "";
    LastName.value = "";
    Email.value = "";
    Password.value = "";
    IDNationl.value = "";
    Number1.value = "";
    Birth.value = "";
    Photo.value = "";
}

function addTaskToArray(username, lastname, email, password, idnumber, numbers, birth, photo) {
    const task = {
        UserName: username,
        LastName: lastname,
        Email: email,
        Password: password,
        IDNationl: idnumber,
        Number1: numbers,
        Birth: birth,
        Photo: photo,
    };
    arrayOfTask.push(task);
    window.localStorage.setItem("allUsers",JSON.stringify(arrayOfTask));
}

/* ************************* */
/* ************************* */
/* page of sign in by uoeel  */
/* ************************  */
/* ************************  */
const signInForm = document.getElementById("signin");

signInForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const userNameError = document.getElementById("userNameError"); 
    const passwordError = document.getElementById("passwordError");
    userNameError.textContent = "";
    passwordError.textContent = "";
    
    let isValid = true;
    if (usernameInput === "") {
        userNameError.textContent = "Please enter your username or email";
        isValid = false;
    }

    if (passwordInput === "") {
        passwordError.textContent = "Please enter your password";
        isValid = false;
    }

    if (!isValid) return;

    const allUsers = localStorage.getItem("allUsers") ? JSON.parse(localStorage.getItem("allUsers")) : [];
    
    // Search for user by UserName OR Email AND check Password
    const userFound = allUsers.find(user => 
        (user.UserName === usernameInput || user.Email === usernameInput) && 
        user.Password === passwordInput
    );

    if (userFound) {
        alert("Welcome back, " + userFound.UserName);
        // Save session if needed
        sessionStorage.setItem("loggedInUser", JSON.stringify(userFound));
        window.location.href = "home.html"; 
    } else {
        userNameError.textContent = "Invalid username/email or password";
    }
});
