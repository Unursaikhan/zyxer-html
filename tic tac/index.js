const board = document.querySelectorAll(".inner");
const clear = document.querySelector("#clearButton");
let clicktimes = 0;
for (let i = 0; i < board.length; i++) {
  board[i].addEventListener("click", () => {
    let value = board[i].innerHTML;
    if (value === "") {
      board[i].innerHTML = "X";
      clicktimes++;
      if ((clicktimes > 1) & (clicktimes % 2 === 0)) {
        board[i].innerHTML = "O";
      }
    }
  });
  clear.addEventListener("click", () => {
    value = "";
    board[i].innerHTML = value;
  });
}
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
  for (let j = 0; j < winningPostion.length; j++) {
    if (
      (board[j][0].innerHTML = "X") &&
      (board[j][1].innerHTML = "X") &&
      (board[j][2].innerHTML = "X")
    ) {
    }
    console.log(board[j][0]);
  }
}
