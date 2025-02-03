const textelement = document.querySelectorAll(".text");
for (let i = 0; i < textelement.length; i++) {
  textelement[i].innerHTML = "Hi ";
}
console.log(textelement.innerHTML);
