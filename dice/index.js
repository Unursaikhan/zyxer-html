const roll = document.querySelector("button");
const container = document.querySelector(".container");
let value = 0;
function result(min, max) {
  const results = document.createElement("div");
  results.classList.add("result");
  container.appendChild(results);
  results.innerHTML =
    "Roll " + value + " is: " + Math.floor(Math.random() * (max - min) + min);
  return results;
}
roll.addEventListener("click", () => {
  value++;
  result(0, 7);
});
