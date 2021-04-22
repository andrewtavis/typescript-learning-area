"use strict";
var btn = document.querySelector("button");
function random(number) {
    return Math.floor(Math.random() * number);
}
function bgChange() {
    var rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = rndCol;
}
btn.onmouseover = bgChange;
