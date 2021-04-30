"use strict";
var spinner = document.querySelector("div");
var rotateCount = 0;
var rAF;
var startTime = null;
// Boolean variable to store state of spinner — true is spinning, false is not spinning
var spinning = false;
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
    // If rotateCount gets over 359, set it to 'remainder of dividing by 360'
    if (rotateCount > 359) {
        rotateCount %= 360;
    }
    if (spinner === null) {
        alert("Invalid");
    }
    else {
        spinner.style.transform = "rotate(" + rotateCount + "deg)";
    }
    rAF = requestAnimationFrame(draw);
    // event listener to start and stop spinner when page is clicked
}
document.body.addEventListener("click", function () {
    if (spinning) {
        cancelAnimationFrame(rAF);
        spinning = false;
    }
    else {
        draw();
        spinning = true;
    }
});
