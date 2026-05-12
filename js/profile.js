const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const idNumber = document.getElementById("idNumber");
const birth = document.getElementById("birth");
const photo = document.getElementById("photo");
const updatePhotoBtn = document.querySelector(".photo-custom-btn");
const hiddenPhotoInput = document.querySelector(".hidden-upload");
const editButtons = document.querySelectorAll(".name-section .custom-btn, .mail-section .custom-btn, .pass-section .custom-btn, .ID-section .custom-btn, .date-section .custom-btn");
const saveBtn = document.getElementById("saveBtn");
const logOutBtn = document.querySelector(".action-btns button:nth-child(1)");
const deleteBtn = document.querySelector(".action-btns button:nth-child(2)");

if (loggedInUser) {
    firstName.value = loggedInUser.FirstName || "";
    lastName.value = loggedInUser.LastName || "";
    email.value = loggedInUser.Email || "";
    password.value = loggedInUser.Password || "";
    idNumber.value = loggedInUser.IDNumber || "";
    birth.value = loggedInUser.BirthDate || "";
    photo.src = loggedInUser.Photo || "account.png";
}
if (!loggedInUser) {
    alert("Please log in to access your profile.");
    //window.location.href = "../pages/login.html";
}

/* This part handles the image upload functionality  by clicking the custom button instead of the default file input which has a bad UI */
updatePhotoBtn.addEventListener("click", () => {
    hiddenPhotoInput.click();
});

/*This part handles the edit and show/hide functionality for the input fields*/
document.querySelectorAll(".custom-btn").forEach((btn) => {

    if (btn.innerText.trim() === "Edit") {
        btn.addEventListener("click", () => {
            const input = btn.closest("div").querySelector("input");
            input.removeAttribute("readonly");
            input.focus();
        });
    }

    if (btn.innerText.trim() === "Show") {
        btn.addEventListener("click", () => {
            if (password.type === "password") {
                password.type = "text";
                btn.innerText = "Hide";
            } else {
                password.type = "password";
                btn.innerText = "Show";
            }
        });
    }
});

/*This part handles the photo upload functionality*/
hiddenPhotoInput.addEventListener("change",e => {
    const file = hiddenPhotoInput.files[0];
    const reader = new FileReader();

    reader.addEventListener("load",() =>{
        loggedInUser.Photo = reader.result;
        sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

        const index = allUsers.findIndex(user => user.Email === loggedInUser.Email);
        if (index !== -1) {
            allUsers[index] = loggedInUser;
            localStorage.setItem("allUsers", JSON.stringify(allUsers));
        }

        photo.src = reader.result;
    });
    reader.readAsDataURL(file);
});

/*Validation when user clicks Edit*/
function validateInput(input) {
    const errorMsg = input.parentElement.querySelector(".error-msg");

    if (!errorMsg) return true;

    if (!input.checkValidity()) {
        errorMsg.textContent = "Please enter valid data";
        return false;
    }

    if (input === password && input.value.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters";
        return false;
    }

    errorMsg.textContent = "";
    return true;
}

document.querySelectorAll("input").forEach(i => {
    i.addEventListener("input", () => validateInput(i));
});

/*Save changes to the profile and update localStorage and sessionStorage*/
saveBtn.addEventListener("click", () => {
    let valid = true;
    document.querySelectorAll("input").forEach(i => {
        if (!validateInput(i)) valid = false;
    });
    if (!valid) {
        showAlert("Please fix the errors first!");
        return;
    }

    const originalEmail = loggedInUser.Email;   /*Store original email to find the user in allUsers array later after update because the email might be changed*/

    loggedInUser.FirstName = firstName.value;
    loggedInUser.LastName = lastName.value;
    loggedInUser.Email = email.value;
    loggedInUser.Password = password.value;
    loggedInUser.IDNumber = idNumber.value;
    loggedInUser.BirthDate = birth.value;

    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    const userIndex = allUsers.findIndex(user => user.Email === originalEmail);
    if (userIndex !== -1) {
        allUsers[userIndex] = loggedInUser;
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }
    showAlert("Profile updated successfully!");
    setTimeout(() => window.location.reload(), 1500);
});

/*log out*/
logOutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("loggedInUser");
    showAlert("Logged out successfully!");
    setTimeout(() => window.location.href = "../index.html", 3000);
    window.location.href = "../index.html";
});

/*Delete Account*/

deleteBtn.addEventListener("click", () => {

    const updated = allUsers.filter(user => user.Email !== loggedInUser.Email);

    localStorage.setItem("allUsers", JSON.stringify(updated));
    sessionStorage.removeItem("loggedInUser");
    localStorage.removeItem("recent-image");

    showAlert("Account deleted");
    setTimeout(() => window.location.href = "../index.html", 3000);
});



function showAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";
    alertBox.innerText = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.classList.add("hide");
        setTimeout(() => alertBox.remove(), 300);
    }, 3000);
}