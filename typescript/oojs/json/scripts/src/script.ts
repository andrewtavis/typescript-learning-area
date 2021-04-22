const header = document.querySelector("header") as HTMLElement;
const section = document.querySelector("section") as HTMLElement;

let requestURL: string =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

let request = new XMLHttpRequest();
request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function () {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

function populateHeader(obj: { [x: string]: string }) {
  const myH1 = document.createElement("h1");
  myH1.textContent = obj["squadName"];
  if (header === null) {
    alert("Invalid");
  } else {
    header.appendChild(myH1);
  }

  const myPara = document.createElement("p");
  myPara.textContent =
    "Hometown: " + obj["homeTown"] + " // Formed: " + obj["formed"];
  if (header === null) {
    alert("Invalid");
  } else {
    header.appendChild(myPara);
  }
}

function showHeroes(obj: { [x: string]: any }) {
  const heroes = obj["members"];

  for (let i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement("article") as HTMLElement;
    const myH2 = document.createElement("h2") as HTMLHeadingElement;
    const myPara1 = document.createElement("p") as HTMLParagraphElement;
    const myPara2 = document.createElement("p") as HTMLParagraphElement;
    const myPara3 = document.createElement("p") as HTMLParagraphElement;
    const myList = document.createElement("ul") as HTMLUListElement;

    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";

    const superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    if (section === null) {
      alert("Invalid");
    } else {
      section.appendChild(myArticle);
    }
  }
}
