"use strict";
var displayedImage = document.querySelector(".displayed-img");
var thumbBar = document.querySelector(".thumb-bar");
var btn = document.querySelector("button");
var overlay = document.querySelector(".overlay");
var _loop_1 = function (i) {
    var newImage = document.createElement("img");
    var imgFile = "images/pic" + String(i + 1) + ".jpg";
    newImage.setAttribute("src", imgFile);
    if (thumbBar === null) {
        alert("Invalid");
    }
    else {
        thumbBar.appendChild(newImage);
    }
    newImage.onclick = function () {
        if (displayedImage === null) {
            alert("Invalid");
        }
        else {
            displayedImage.setAttribute("src", imgFile);
        }
    };
};
/* Looping through images */
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
/* Wiring up the Darken/Lighten button */
if (btn === null || overlay === null || btn.getAttribute("class") === null) {
    alert("Invalid");
}
else {
    btn.onclick = function () {
        var currentClass = btn.getAttribute("class");
        if (currentClass === "dark") {
            btn.setAttribute("class", "light");
            btn.textContent = "Lighten";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        }
        else if (currentClass === "light") {
            btn.setAttribute("class", "dark");
            btn.textContent = "Darken";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
    };
}
