const input = document.querySelector("input");
const ageDiv = document.querySelector(".age");

const now = Date.now();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const value = input.value;
  const birthday = new Date(value).getTime();
  ageMilSec = now - birthday;
  const age = ageMilSec / 1000 / 60 / 60 / 24 / 365;
  ageDiv.innerHTML = "Your age is : " + Math.floor(age);
});
