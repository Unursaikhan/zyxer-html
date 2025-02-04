const input = document.querySelector("input");
const five = document.querySelector(".body > button:nth-of-type(1)");
const ten = document.querySelector(".body > button:nth-of-type(2)");
const fifteen = document.querySelector(".body > button:nth-of-type(3)");
const twenty = document.querySelector(".body > button:nth-of-type(4)");
const thirty = document.querySelector(".body > button:nth-of-type(5)");
const half = document.querySelector(".body >button:nth-of-type(6)");
const sixty = document.querySelector(".body > button:nth-of-type(7)");
const eighty = document.querySelector(".body > button:nth-of-type(8)");
const reset = document.querySelector(".footer > button");
const total = document.querySelector(".footer > div");

five.addEventListener("click", () => {
  total.innerHTML =
    "Total : " + (Number(input.value) + (5 * input.value) / 100);
});
ten.addEventListener("click", () => {
  total.innerHTML =
    "Total : " + (Number(input.value) + (10 * input.value) / 100);
});
fifteen.addEventListener("click", () => {
  total.innerHTML =
    "Total : " + (Number(input.value) + (15 * input.value) / 100);
});
twenty.addEventListener("click", () => {
  total.innerHTML =
    "Total : " + (Number(input.value) + (25 * input.value) / 100);
});
thirty.addEventListener("click", () => {
  total.innerHTML =
    "Total : " + (Number(input.value) + (35 * input.value) / 100);
});
half.addEventListener("click", () => {
  total.innerHTML =
    "Total : " + (Number(input.value) + (50 * input.value) / 100);
});
sixty.addEventListener("click", () => {
  total.innerHTML =
    "Total : " + (Number(input.value) + (65 * input.value) / 100);
});
eighty.addEventListener("click", () => {
  total.innerHTML =
    "Total : " + (Number(input.value) + (80 * input.value) / 100);
});
reset.addEventListener("click", () => {
  input.value = null;
  total.innerHTML = "Total :";
});
