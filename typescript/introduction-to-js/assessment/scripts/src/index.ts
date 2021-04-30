const customName = document.getElementById("customname") as HTMLInputElement;
const randomize = document.querySelector(".randomize") as HTMLButtonElement;
const story = document.querySelector(".story") as HTMLParagraphElement;
let engType = document.getElementById("uk") as HTMLInputElement;

function randomValueFromArray(array: any) {
  const random: number = Math.floor(Math.random() * array.length);
  return array[random];
}

let storyText: string =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX: string[] = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

let insertY: string[] = ["the soup kitchen", "Disneyland", "the White House"];

let insertZ: string[] = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

randomize.addEventListener("click", result);

function result() {
  let newStory: string = storyText;

  let xItem: string = randomValueFromArray(insertX);
  let yItem: string = randomValueFromArray(insertY);
  let zItem: string = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if (customName.value !== "") {
    let name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (engType.checked) {
    let weight = Math.round(300 / 14).toString() + " stone";
    let temperature =
      Math.round(((94 - 32) * 5) / 9).toString() + " centigrade";

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
