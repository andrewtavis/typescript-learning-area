const link = document.querySelector("a") as HTMLAnchorElement;
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section") as HTMLElement;
const para = document.createElement("p") as HTMLParagraphElement;
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

const text = document.createTextNode(
  " — the premier source for web development knowledge."
) as Text;
const linkPara = document.querySelector("p") as HTMLParagraphElement;
linkPara.appendChild(text);

sect.appendChild(linkPara);

para.setAttribute("class", "highlight");

const div = document.querySelector("div") as HTMLDivElement;
let winWidth: number = window.innerWidth;
let winHeight: number = window.innerHeight;
div.style.width = winWidth + "px";
div.style.height = winHeight + "px";

window.onresize = function () {
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
  div.style.width = winWidth + "px";
  div.style.height = winHeight + "px";
};
