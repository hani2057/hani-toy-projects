const userPanelIcon = document.querySelector(".user__icon");
const cptPanelIcon = document.querySelector(".computer__icon");

const userRock = document.querySelector("div.rsp__rock");
const userSissors = document.querySelector(".rsp__sissors");
const userPaper = document.querySelector(".rsp__paper");

const ROCK = "fa-hand-back-fist";
const SISSORS = "fa-hand-peace";
const PAPER = "fa-hand";

function userClickedRock() {
  userPanelIcon.classList.add(ROCK);
  userPanelIcon.classList.remove(SISSORS);
  userPanelIcon.classList.remove(PAPER);
}
function userClickedSissors() {
  userPanelIcon.classList.add(SISSORS);
  userPanelIcon.classList.remove(ROCK);
  userPanelIcon.classList.remove(PAPER);
}
function userClickedPaper() {
  userPanelIcon.classList.add(PAPER);
  userPanelIcon.classList.remove(SISSORS);
  userPanelIcon.classList.remove(ROCK);
}

userRock.addEventListener("click", userClickedRock);
userSissors.addEventListener("click", userClickedSissors);
userPaper.addEventListener("click", userClickedPaper);
