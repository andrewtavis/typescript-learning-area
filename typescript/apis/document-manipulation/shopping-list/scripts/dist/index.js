"use strict";
var shoppingList = document.querySelector("ul");
var input = document.querySelector("input");
var button = document.querySelector("button");
button.onclick = function () {
    var currentInput = input.value;
    input.value = "";
    var listItem = document.createElement("li");
    var listText = document.createElement("span");
    var listBtn = document.createElement("button");
    listItem.appendChild(listText);
    listText.textContent = currentInput;
    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    shoppingList.appendChild(listItem);
    listBtn.onclick = function (e) {
        shoppingList.removeChild(listItem);
    };
    input.focus();
};
