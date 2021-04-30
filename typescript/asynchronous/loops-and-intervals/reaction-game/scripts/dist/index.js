"use strict";
var spinner = document.querySelector(".spinner p");
var spinnerContainer = document.querySelector(".spinner");
var rotateCount = 0;
var startTime = null;
var rAF;
var btn = document.querySelector("button");
var result = document.querySelector(".result");
function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}
function draw(timestamp) {
    if (!startTime) {
        startTime = timestamp;
    }
    if (startTime === null) {
        alert("Invalid");
    }
    else {
        rotateCount = (timestamp - startTime) / 3;
    }
    rotateCount %= 360;
    if (spinner === null) {
        alert("Invalid");
    }
    else {
        spinner.style.transform = "rotate(" + rotateCount + "deg)";
        rAF = requestAnimationFrame(draw);
    }
}
if (result === null) {
    alert("Invalid");
}
else {
    result.style.display = "none";
}
if (spinnerContainer === null) {
    alert("Invalid");
}
else {
    spinnerContainer.style.display = "none";
}
function reset() {
    if (btn === null) {
        alert("Invalid");
    }
    else {
        btn.style.display = "block";
    }
    if (result === null) {
        alert("Invalid");
    }
    else {
        result.textContent = "";
        result.style.display = "none";
    }
}
if (btn === null) {
    alert("Invalid");
}
else {
    btn.addEventListener("click", start);
}
function start() {
    draw();
    if (spinnerContainer === null) {
        alert("Invalid");
    }
    else {
        spinnerContainer.style.display = "block";
    }
    if (btn === null) {
        alert("Invalid");
    }
    else {
        btn.style.display = "none";
    }
    setTimeout(setEndgame, random(5000, 10000));
}
function setEndgame() {
    cancelAnimationFrame(rAF);
    if (spinnerContainer === null) {
        alert("Invalid");
    }
    else {
        spinnerContainer.style.display = "none";
    }
    if (result === null) {
        alert("Invalid");
    }
    else {
        result.style.display = "block";
        result.textContent = "PLAYERS GO!!";
    }
    document.addEventListener("keydown", keyHandler);
    function keyHandler(e) {
        var isOver = false;
        console.log(e.key);
        if (e.key === "a") {
            if (result === null) {
                alert("Invalid");
            }
            else {
                result.textContent = "Player 1 won!!";
            }
            isOver = true;
        }
        else if (e.key === "l") {
            if (result === null) {
                alert("Invalid");
            }
            else {
                result.textContent = "Player 2 won!!";
            }
            isOver = true;
        }
        if (isOver) {
            document.removeEventListener("keydown", keyHandler);
            setTimeout(reset, 5000);
        }
    }
}
