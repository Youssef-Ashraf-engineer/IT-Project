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
const saveBtn = document.querySelector(".structure > div button");
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
    window.location.href = "login.html";
}

/* This part handles the image upload functionality  by clicking the custom button instead of the default file input which has a bad UI */
updatePhotoBtn.addEventListener("click", () => {
    hiddenPhotoInput.click();
});

/*This part handles the edit and show/hide functionality for the input fields*/
document.querySelectorAll(".custom-btn").forEach((btn) => {

    if (btn.innerText === "Edit") {
        btn.addEventListener("click", () => {
            const input = btn.previousElementSibling;
            input.removeAttribute("readonly");
            input.focus();
        });
    }

    if (btn.innerText === "Show") {
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

hiddenPhotoInput.addEventListener("change",e => {
    const file = hiddenPhotoInput.files[0];
    const reader = new FileReader();

    reader.addEventListener("load",() =>{
        localStorage.setItem("recent-image",reader.result);
    });
    reader.readAsDataURL(file);
});

/*Save changes to the profile and update localStorage and sessionStorage*/
saveBtn.addEventListener("click", () => {
    loggedInUser.FirstName = firstName.value;
    loggedInUser.LastName = lastName.value;
    loggedInUser.Email = email.value;
    loggedInUser.Password = password.value;
    loggedInUser.IDNumber = idNumber.value;
    loggedInUser.BirthDate = birth.value;

    sessionStorage.loggedInUser = JSON.stringify(loggedInUser);

    const userIndex = allUsers.findIndex(user => user.Email === loggedInUser.Email);
    if (userIndex !== -1) {
        allUsers[userIndex] = loggedInUser;
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }
    showAlert("Profile updated successfully!");
});

/*log out*/
logOutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("loggedInUser");
    showAlert("Logged out successfully!");
    window.location.href = "index.html";
});

/*Delete Account*/

deleteBtn.addEventListener("click", () => {

    const updated = allUsers.filter(user => user.Email !== loggedInUser.Email);

    localStorage.setItem("allUsers", JSON.stringify(updated));
    sessionStorage.removeItem("loggedInUser");

    showAlert("Account deleted");
    setTimeout(() => window.location.href = "index.html", 1500);
});



function showAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";
    alertBox.innerText = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.classList.add("hide");
        setTimeout(() => alertBox.remove(), 300);
    }, 1500);
}