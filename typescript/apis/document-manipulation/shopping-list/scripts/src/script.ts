const shoppingList = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function () {
  let currentInput = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = currentInput;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";

  shoppingList.appendChild(listItem);

  listBtn.onclick = function (e: any) {
    shoppingList.removeChild(listItem);
  };

  input.focus();
};
