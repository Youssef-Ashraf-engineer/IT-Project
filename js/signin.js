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