"use strict";
// create needed constants
var rememberDiv = document.querySelector(".remember");
var forgetDiv = document.querySelector(".forget");
var form = document.querySelector("form");
var nameInput = document.querySelector("#entername");
var submitBtn = document.querySelector("#submitname");
var forgetBtn = document.querySelector("#forgetname");
var h1 = document.querySelector("h1");
var personalGreeting = document.querySelector(".personal-greeting");
// Stop the form from submitting when a button is pressed
form.addEventListener("submit", function (e) {
    e.preventDefault();
});
// run function when the 'Say hello' button is clicked
submitBtn.addEventListener("click", function () {
    // store the entered name in web storage
    localStorage.setItem("name", nameInput.value);
    // run nameDisplayCheck() to sort out displaying the
    // personalized greetings and updating the form display
    nameDisplayCheck();
});
// run function when the 'Forget' button is clicked
forgetBtn.addEventListener("click", function () {
    // Remove the stored name from web storage
    localStorage.removeItem("name");
    // run nameDisplayCheck() to sort out displaying the
    // generic greeting again and updating the form display
    nameDisplayCheck();
});
// define the nameDisplayCheck() function
function nameDisplayCheck() {
    // check whether the 'name' data item is stored in web Storage
    if (localStorage.getItem("name")) {
        // If it is, display personalized greeting
        var name_1 = localStorage.getItem("name");
        h1.textContent = "Welcome, " + name_1;
        personalGreeting.textContent =
            "Welcome to our website, " +
                name_1 +
                "! We hope you have fun while you are here.";
        // hide the 'remember' part of the form and show the 'forget' part
        forgetDiv.style.display = "block";
        rememberDiv.style.display = "none";
    }
    else {
        // if not, display generic greeting
        h1.textContent = "Welcome to our website ";
        personalGreeting.textContent =
            "Welcome to our website. We hope you have fun while you are here.";
        // hide the 'forget' part of the form and show the 'remember' part
        forgetDiv.style.display = "none";
        rememberDiv.style.display = "block";
    }
}
document.body.onload = nameDisplayCheck;
