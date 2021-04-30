const displayedImage = document.querySelector(
  ".displayed-img"
) as HTMLImageElement;
const thumbBar = document.querySelector(".thumb-bar") as HTMLDivElement;

const btn = document.querySelector("button") as HTMLButtonElement;
const overlay = document.querySelector(".overlay") as HTMLDivElement;

/* Looping through images */
for (let i = 0; i < 5; i++) {
  const newImage = document.createElement("img") as HTMLImageElement;
  let imgFile: string = "images/pic" + String(i + 1) + ".jpg";

  newImage.setAttribute("src", imgFile);
  if (thumbBar === null) {
    alert("Invalid");
  } else {
    thumbBar.appendChild(newImage);
  }

  newImage.onclick = function () {
    if (displayedImage === null) {
      alert("Invalid");
    } else {
      displayedImage.setAttribute("src", imgFile);
    }
  };
}

/* Wiring up the Darken/Lighten button */
if (btn === null || overlay === null || btn.getAttribute("class") === null) {
  alert("Invalid");
} else {
  btn.onclick = function () {
    let currentClass = btn.getAttribute("class") as string;
    if (currentClass === "dark") {
      btn.setAttribute("class", "light");
      btn.textContent = "Lighten";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else if (currentClass === "light") {
      btn.setAttribute("class", "dark");
      btn.textContent = "Darken";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  };
}
