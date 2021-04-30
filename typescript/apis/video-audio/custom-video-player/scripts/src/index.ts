const media = document.querySelector("video") as HTMLVideoElement;
const controls = document.querySelector(".controls") as HTMLDivElement;

const play = document.querySelector(".play") as HTMLButtonElement;
const stop = document.querySelector(".stop") as HTMLButtonElement;
const rwd = document.querySelector(".rwd") as HTMLButtonElement;
const fwd = document.querySelector(".fwd") as HTMLButtonElement;

const timerWrapper = document.querySelector(".timer") as HTMLDivElement;
const timer = document.querySelector(".timer span");
const timerBar = document.querySelector(".timer div");

media.removeAttribute("controls");
controls.style.visibility = "visible";

play.addEventListener("click", playPauseMedia);

function playPauseMedia() {
  rwd.classList.remove("active");
  fwd.classList.remove("active");
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);

  if (media.paused) {
    play.setAttribute("data-icon", "u");
    media.play();
  } else {
    play.setAttribute("data-icon", "P");
    media.pause();
  }
}

stop.addEventListener("click", stopMedia);
media.addEventListener("ended", stopMedia);

function stopMedia() {
  media.pause();
  media.currentTime = 0;
  play.setAttribute("data-icon", "P");

  rwd.classList.remove("active");
  fwd.classList.remove("active");
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);
}

rwd.addEventListener("click", mediaBackward);
fwd.addEventListener("click", mediaForward);

let intervalFwd: number | undefined;
let intervalRwd: number | undefined;

function mediaBackward() {
  clearInterval(intervalFwd);
  fwd.classList.remove("active");

  if (rwd.classList.contains("active")) {
    rwd.classList.remove("active");
    clearInterval(intervalRwd);
    media.play();
  } else {
    rwd.classList.add("active");
    media.pause();
    intervalRwd = setInterval(windBackward, 200);
  }
}

function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove("active");

  if (fwd.classList.contains("active")) {
    fwd.classList.remove("active");
    clearInterval(intervalFwd);
    media.play();
  } else {
    fwd.classList.add("active");
    media.pause();
    intervalFwd = setInterval(windForward, 200);
  }
}

function windBackward() {
  if (media.currentTime <= 3) {
    rwd.classList.remove("active");
    clearInterval(intervalRwd);
    stopMedia();
  } else {
    media.currentTime -= 3;
  }
}

function windForward() {
  if (media.currentTime >= media.duration - 3) {
    fwd.classList.remove("active");
    clearInterval(intervalFwd);
    stopMedia();
  } else {
    media.currentTime += 3;
  }
}

media.addEventListener("timeupdate", setTime);

function setTime() {
  let minutes: number = Math.floor(media.currentTime / 60);
  let seconds: number = Math.floor(media.currentTime - minutes * 60);
  let minuteValue: string;
  let secondValue: string;

  if (minutes < 10) {
    minuteValue = "0" + String(minutes);
  } else {
    minuteValue = String(minutes);
  }

  if (seconds < 10) {
    secondValue = "0" + seconds;
  } else {
    secondValue = String(seconds);
  }

  let mediaTime: string = minuteValue + ":" + secondValue;
  timer.textContent = mediaTime;

  let barLength: number =
    timerWrapper.clientWidth * (media.currentTime / media.duration);
  timerBar.style.width = barLength + "px";
}
