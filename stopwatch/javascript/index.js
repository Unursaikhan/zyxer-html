const startButton = document.querySelector("button:nth-of-type(1)");
const stopButton = document.querySelector("button:nth-of-type(2)");
const resetButton = document.querySelector("button:nth-of-type(3)");
const hour = document.querySelector(".hour");
const minutess = document.querySelector(".min");
const secondss = document.querySelector(".sec");
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = 0;
function startTimer() {
  if (interval === 0) {
    interval = setInterval(() => {
      seconds++;
      if (seconds === 100) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      hour.innerHTML = hours < 10 ? "0" + hours : hours;
      minutess.innerHTML = minutes < 10 ? "0" + minutes : minutes;
      secondss.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }, 10);
  }
}
startButton.addEventListener("click", () => {
  startTimer();
});
stopButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = 0;
});
resetButton.addEventListener("click", () => {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  hour.innerHTML = "00";
  minutess.innerHTML = "00";
  secondss.innerHTML = "00";
  interval = 0;
});
