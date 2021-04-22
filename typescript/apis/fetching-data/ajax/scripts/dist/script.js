"use strict";
var verseChoose = document.querySelector("select");
var poemDisplay = document.querySelector("pre");
verseChoose.onchange = function () {
    var verse = verseChoose.value;
    updateDisplay(verse);
};
function updateDisplay(verse) {
    verse = verse.replace(" ", "");
    verse = verse.toLowerCase();
    var url = "verses/" + verse + ".txt";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "text";
    request.onload = function () {
        poemDisplay.textContent = request.response;
    };
    request.send();
}
updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
