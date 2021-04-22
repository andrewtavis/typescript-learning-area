const btn = document.querySelector("button") as HTMLButtonElement;
btn.onclick = function () {
  displayMessage("Your inbox is almost full — delete some mails", "warning");
  displayMessage("Brian: Hi there, how are you today?", "chat");
};

function displayMessage(msgText: string, msgType: string) {
  const html = document.querySelector("html") as HTMLHtmlElement;

  const panel = document.createElement("div") as HTMLDivElement;
  panel.setAttribute("class", "msgBox");

  html.appendChild(panel);

  const msg = document.createElement("p") as HTMLParagraphElement;
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement("button") as HTMLButtonElement;
  closeBtn.textContent = "x";
  panel.appendChild(closeBtn);

  closeBtn.onclick = function () {
    if (panel.parentNode === null) {
      alert("Invalid");
    } else {
      panel.parentNode.removeChild(panel);
    }
  };

  if (msgType === "warning") {
    msg.style.backgroundImage = "url(icons/warning.png)";
    panel.style.backgroundColor = "red";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(icons/chat.png)";
    panel.style.backgroundColor = "aqua";
  } else {
    msg.style.paddingLeft = "20px";
  }
}
