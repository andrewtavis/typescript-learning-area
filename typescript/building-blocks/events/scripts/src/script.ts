const btn = document.querySelector("button") as HTMLButtonElement;

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol: string =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

btn.onmouseover = bgChange;
