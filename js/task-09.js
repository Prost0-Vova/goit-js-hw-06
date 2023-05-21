
const btn = document.querySelector(".change-color")
const writeColor = document.querySelector(".color")

btn.addEventListener("click", changeBgrColor);

function changeBgrColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  writeColor.textContent = newColor;
  
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
