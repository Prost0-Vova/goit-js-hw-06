const counterEl = document.getElementById('value');

let counterValue = 0;

function updateCounter() {
  counterEl.textContent = counterValue;
}


const incrementBtn = document.querySelector('.increment-btn');
const decrementBtn = document.querySelector('.decrement-btn')

incrementBtn.addEventListener('click', function() {
    counterValue++;
    updateCounter()

})

decrementBtn.addEventListener("click", function() {
  counterValue--;
  updateCounter();
});

updateCounter()