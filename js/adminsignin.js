const signInForm = document.getElementById("signin");

signInForm.addEventListener('submit',function(event){event.preventDefault();adminlogin()})

function adminlogin(){
    const usernameInput = document.getElementById("username").value.trim();
const passwordInput = document.getElementById("password").value.trim();
let isValid=false
if (usernameInput === "") {

    userNameError.textContent = "Please enter your username or email";
        isValid = false;
    }

    if (passwordInput === "") {
        passwordError.textContent = "Please enter your password";
        isValid = false;
    }
    // if (!isValid) return;
    if(usernameInput=="admin2025" && passwordInput=="2025"){
        isValid=true
        sessionStorage.setItem("loggedInAdmin", true);
        window.location.href = "admin.html"; 

    }
    if (!isValid) {
        passwordError.textContent = "wrong user name or password";
    }


}
