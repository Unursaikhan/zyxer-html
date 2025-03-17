const step = document.querySelectorAll(".circle");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const text = document.querySelectorAll(".steps");
const barFront = document.querySelector(".bar-front");
let k = 0;

barFront.style.width = "0%";

next.addEventListener("click", () => {
  k++;
  step[k].classList.add("checked");
  text[k].classList.add("steps-flex");
  const img = document.createElement("img");
  img.classList.add("img");
  img.src = "imag/—Pngtree—green check mark icon design_6219078.png";
  img.alt = "Checkmark";
  const percentage = (k / (step.length - 1)) * 100;
  barFront.style.width = `${percentage}%`;
  prev.classList.remove("disabled");

  if (k === 4) {
    next.classList.add("disabled");
    next.disabled = true;
  }

  if (k > 0) {
    prev.disabled = false;
  }
});

prev.addEventListener("click", () => {
  step[k].classList.remove("checked");
  text[k].classList.remove("steps-flex");
  k--;
  img.classList.remove("img");
  img.src = "imag/—Pngtree—green check mark icon design_6219078.png";
  img.alt = "Checkmark";

  const percentage = (k / (step.length - 1)) * 100;
  barFront.style.width = `${percentage}%`;

  if (k === 0) {
    prev.disabled = true;
    prev.classList.add("disabled");
  }

  if (k < 4) {
    next.disabled = false;
    next.classList.remove("disabled");
  }
});
