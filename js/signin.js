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
        window.location.href = "../index.html"; 
    } else {
        userNameError.textContent = "Invalid username/email or password";
    }
});
window.addEventListener("load",function(){
    if( JSON.parse(sessionStorage.getItem("loggedInUser"))){
        alert("alredy signed in")
        window.location.href = "../index.html"; 
        return
        
    }
})
// const themeBtn = document.getElementById('theme-toggle'); 
// const body = document.body;

// const currentTheme = localStorage.getItem('theme');

// if (currentTheme === 'light') {
//     body.classList.add('light-theme');
// }

// themeBtn.addEventListener('click', () => {
   
//     body.classList.toggle('light-theme');
//     if (body.classList.contains('light-theme')) {
//         localStorage.setItem('theme', 'light');
//     } else {
//         localStorage.setItem('theme', 'dark');
//     }
// })