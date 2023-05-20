const formInputEl = document.querySelector('.js-name-input');
const formOutputEl = document.querySelector('.js-name-output');

formInputEl.addEventListener("input", (e) => {
    formOutputEl.textContent = e.target.value.length !== 0 ? e.target.value : "Anonymous";
});