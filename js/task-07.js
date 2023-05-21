const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", inputTextChanger)

function inputTextChanger(event) {
 
    text.style.fontSize = input.value + "px";
   
}
