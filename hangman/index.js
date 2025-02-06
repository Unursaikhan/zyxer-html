const wordLetters = document.querySelectorAll(".word > div");
const letters = document.querySelectorAll(".keys > button");
const word = ["H", "O", "N", "E", "Y"];
let remainingGuesses = 5;
const topDisplay = document.querySelector(".top");
const background = document.querySelector(".container");
const text = document.querySelector(".text");

function count() {
  topDisplay.innerHTML = `Guess Remaining: ${remainingGuesses}`;
}

function isWordGuessed() {
  return [...wordLetters].every((div) => div.innerHTML !== "");
}

function updateWordDivs(letter) {
  let correctGuess = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter && wordLetters[i].innerHTML === "") {
      wordLetters[i].innerHTML = letter;
      correctGuess = true;
    }
  }
  return correctGuess;
}

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("click", () => {
    letters[i].classList.add("color");
    letters[i].disabled = true;

    const clickedLetter = letters[i].innerHTML;
    const isCorrect = updateWordDivs(clickedLetter);

    if (isCorrect) {
      console.log(`Correct guess: ${clickedLetter}`);
    } else {
      remainingGuesses--;
      console.log(`Incorrect guess: ${clickedLetter}`);
    }
    count();
    if (remainingGuesses <= 0) {
      text.innerHTML = "You Lost!";
      background.classList.add("lose");

      letters.forEach((button) => (button.disabled = true));
    }

    if (isWordGuessed()) {
      text.innerHTML = "You Win!";
      background.classList.add("win");
    }
  });
}
count();
