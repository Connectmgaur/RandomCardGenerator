/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function shuffleCard() {
  const suits = ["spade", "club", "heart", "diamond"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let suitIndex = getRandomNumber(0, 3);
  let numberIndex = getRandomNumber(0, 12);

  let card = document.querySelector(".card");
  card.className = "card " + suits[suitIndex];
  card.querySelector(".number").textContent = numbers[numberIndex];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//shuffleCard(); // Shuffle the card on initial page load
//const shuffleButton = document.getElementById("shuffleButton");

window.onload = shuffleCard();
let ok = document.querySelector(".shuffleButton");
ok.addEventListener("click", shuffleCard);
