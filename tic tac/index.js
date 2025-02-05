const board = document.querySelectorAll(".inner");
const clear = document.querySelector("#clearButton");
let clicktimes = 0;
let gameover = false;

function checkWinner() {
  const winningPostion = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningPostion.length; i++) {
    const combo = winningPostion[i];
    const [a, b, c] = combo;
    const firstCell = board[a].innerHTML;
    const secondCell = board[b].innerHTML;
    const thirdCell = board[c].innerHTML;
    if (
      firstCell === secondCell &&
      secondCell === thirdCell &&
      secondCell !== ""
    ) {
      return firstCell;
    }
  }
  return null;
}

function displayMessage(winner) {
  const message = document.getElementById("message");
  if (winner) {
    message.innerHTML = `Player ${winner} wins!`;
  } else if (clicktimes === 9) {
    message.innerHTML = "It's a tie!";
  } else {
    message.innerHTML = "";
  }
}

for (let i = 0; i < board.length; i++) {
  board[i].addEventListener("click", () => {
    if (gameover) return;

    let value = board[i].innerHTML;
    if (value === "") {
      if (clicktimes % 2 === 0) {
        board[i].innerHTML = "X";
      } else {
        board[i].innerHTML = "O";
      }
      clicktimes++;

      const winner = checkWinner();
      if (winner) {
        displayMessage(winner);
        gameover = true;
      } else {
        displayMessage();
      }
    }
  });
}

clear.addEventListener("click", () => {
  for (let i = 0; i < board.length; i++) {
    board[i].innerHTML = "";
  }
  clicktimes = 0;
  gameover = false;
  displayMessage();
});
