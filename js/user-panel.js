const userPanelIcon = document.querySelector(".user__icon");
const cptPanelIcon = document.querySelector(".computer__icon");

const userRock = document.querySelector("div.rsp__rock");
const userSissors = document.querySelector(".rsp__sissors");
const userPaper = document.querySelector(".rsp__paper");
const resultPanel = document.querySelector(".rsp span");

const rootCptScore = document.querySelector(".score__computer");
const rootUserScore = document.querySelector(".score__user");
let cptScore = rootCptScore.innerText;
let userScore = rootUserScore.innerText;

const ROCK = "fa-hand-back-fist";
const SISSORS = "fa-hand-peace";
const PAPER = "fa-hand";

const rspClassArray = [ROCK, SISSORS, PAPER];

function result() {
  if (
    (userPanelIcon.classList.contains(ROCK) &&
      cptPanelIcon.classList.contains(ROCK)) ||
    (userPanelIcon.classList.contains(SISSORS) &&
      cptPanelIcon.classList.contains(SISSORS)) ||
    (userPanelIcon.classList.contains(PAPER) &&
      cptPanelIcon.classList.contains(PAPER))
  ) {
    resultPanel.innerText = "Draw!";
  } else if (
    (userPanelIcon.classList.contains(ROCK) &&
      cptPanelIcon.classList.contains(SISSORS)) ||
    (userPanelIcon.classList.contains(SISSORS) &&
      cptPanelIcon.classList.contains(PAPER)) ||
    (userPanelIcon.classList.contains(PAPER) &&
      cptPanelIcon.classList.contains(ROCK))
  ) {
    resultPanel.innerText = "You won!";
    userScore = parseInt(userScore) + 1;
    rootUserScore.innerText = userScore;
  } else {
    resultPanel.innerText = "You lost!";
    cptScore = parseInt(cptScore) + 1;
    rootCptScore.innerText = cptScore;
  }
}

//랜덤으로 array에서 item을 선택해서 classList에 추가하고,
// 나머지 두 개를 classList에서 제거하기 위해서 %3을 이용함.
function cptRandomPrint() {
  const randomNumber = Math.floor(Math.random() * rspClassArray.length);
  const randomClassNameOne = rspClassArray[randomNumber % 3];
  const randomClassNameTwo = rspClassArray[(randomNumber + 1) % 3];
  const randomClassNameThree = rspClassArray[(randomNumber + 2) % 3];
  cptPanelIcon.classList.add(randomClassNameOne);
  cptPanelIcon.classList.remove(randomClassNameTwo, randomClassNameThree);
}

function userClickedRock() {
  userPanelIcon.classList.add(ROCK);
  userPanelIcon.classList.remove(SISSORS, PAPER);
  cptRandomPrint();
  result();
}
function userClickedSissors() {
  userPanelIcon.classList.add(SISSORS);
  userPanelIcon.classList.remove(ROCK, PAPER);
  cptRandomPrint();
  result();
}
function userClickedPaper() {
  userPanelIcon.classList.add(PAPER);
  userPanelIcon.classList.remove(ROCK, SISSORS);
  cptRandomPrint();
  result();
}

userRock.addEventListener("click", userClickedRock);
userSissors.addEventListener("click", userClickedSissors);
userPaper.addEventListener("click", userClickedPaper);
