const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const tasksContainer = document.querySelector(".bot");

function addTask(taskText) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("first");

  const checkDiv = document.createElement("div");
  checkDiv.classList.add("check");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.classList.add("img");
  img.src =
    "image/toppng.com-microsoft-word-check-mark-symbol-checkbox-with-tick-mark-980x980.png";
  img.alt = "Checkmark";

  const p = document.createElement("p");
  p.textContent = taskText;

  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.addEventListener("click", () => {
    tasksContainer.removeChild(taskDiv);
  });

  checkDiv.addEventListener("click", () => {
    img.style.display = img.style.display === "none" ? "block" : "none";
  });

  imgContainer.appendChild(img);
  checkDiv.appendChild(imgContainer);
  checkDiv.appendChild(p);
  taskDiv.appendChild(checkDiv);
  taskDiv.appendChild(removeButton);
  tasksContainer.appendChild(taskDiv);
}

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});
