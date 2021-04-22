"use strict";
// Define a counter variable for the number of seconds and set it to zero.
var secondCount = 0;
// Define a global to store the interval when it is active.
var stopWatch;
// Store a reference to the display paragraph in a variable
var displayPara = document.querySelector(".clock");
// Function to calculate the current hours, minutes, and seconds, and display the count
function displayCount() {
    // Calculate current hours, minutes, and seconds
    var hours = Math.floor(secondCount / 3600);
    var minutes = Math.floor((secondCount % 3600) / 60);
    var seconds = Math.floor(secondCount % 60);
    // Display a leading zero if the values are less than ten
    var displayHours = hours < 10 ? "0" + hours : hours;
    var displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    var displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    // Write the current stopwatch display time into the display paragraph
    if (displayPara === null) {
        alert("Invalid");
    }
    else {
        displayPara.textContent =
            displayHours + ":" + displayMinutes + ":" + displaySeconds;
    }
    // Increment the second counter by one
    secondCount++;
}
// Store references to the buttons in constants
var startBtn = document.querySelector(".start");
var stopBtn = document.querySelector(".stop");
var resetBtn = document.querySelector(".reset");
// When the start button is pressed, start running displayCount() once per second using setInterval()
if (startBtn === null) {
    alert("Invalid");
}
else {
    startBtn.addEventListener("click", function () {
        stopWatch = setInterval(displayCount, 1000);
        startBtn.disabled = true;
    });
}
// When the stop button is pressed, clear the interval to stop the count.
if (stopBtn === null || startBtn === null) {
    alert("Invalid");
}
else {
    stopBtn.addEventListener("click", function () {
        clearInterval(stopWatch);
        startBtn.disabled = false;
    });
}
// When the reset button is pressed, set the counter back to zero, then immediately update the display
if (resetBtn === null || startBtn === null) {
    alert("Invalid");
}
else {
    resetBtn.addEventListener("click", function () {
        clearInterval(stopWatch);
        startBtn.disabled = false;
        secondCount = 0;
        displayCount();
    });
}
// Run displayCount() once as soon as the page loads so the clock is displayed
displayCount();
