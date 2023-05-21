const input = document.querySelector("#validation-input")


input.addEventListener('blur', onInputBlur); 
    
    function onInputBlur(event) {
        const inputValue = event.target.value;
        const inputLength = Number(event.target.dataset.length)
        if (inputValue.length === inputLength) {
        
            input.classList.add("valid");
            input.classList.remove("invalid");
        }
        else {

            input.classList.add("invalid");
            input.classList.remove("valid");
        
        }
    
}