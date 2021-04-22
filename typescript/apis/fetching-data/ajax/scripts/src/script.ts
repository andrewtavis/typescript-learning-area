const verseChoose = document.querySelector("select") as HTMLSelectElement;
const poemDisplay = document.querySelector("pre") as HTMLPreElement;

verseChoose.onchange = function () {
  const verse: string = verseChoose.value;
  updateDisplay(verse);
};

function updateDisplay(verse: string) {
  verse = verse.replace(" ", "");
  verse = verse.toLowerCase();
  let url = "verses/" + verse + ".txt";

  let request = new XMLHttpRequest() as XMLHttpRequest;
  request.open("GET", url);
  request.responseType = "text";

  request.onload = function () {
    poemDisplay.textContent = request.response;
  };

  request.send();
}

updateDisplay("Verse 1");
verseChoose.value = "Verse 1";
