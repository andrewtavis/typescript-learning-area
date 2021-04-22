document.addEventListener("DOMContentLoaded", function () {
  function createParagraph() {
    let para = document.createElement("p") as HTMLParagraphElement;
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll(
    "button"
  ) as NodeListOf<HTMLButtonElement>;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", createParagraph);
  }
});
