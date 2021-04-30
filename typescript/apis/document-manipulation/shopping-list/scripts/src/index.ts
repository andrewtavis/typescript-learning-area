const shoppingList = document.querySelector("ul") as HTMLUListElement;
const input = document.querySelector("input") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;

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
