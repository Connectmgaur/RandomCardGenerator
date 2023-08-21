/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//write your code here
//window.onload = function() {

// console.log("Everything is working");
//};
// Function to shuffle the card
//};

window.onload = function() {
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
    card.textContent = numbers[numberIndex];
  }
};
