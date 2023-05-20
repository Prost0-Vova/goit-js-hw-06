const formInputValidation = document.getElementById('validation-input');
const dataLength = Number(formInputValidation.getAttribute('data-length'));

formInputValidation.addEventListener('blur', function()  {
    const inputValue = formInputValidation.value.trim();
    if (inputValue.length === dataLength) {
        
        formInputValidation.classList.add("valid");
        formInputValidation.classList.remove("invalid");
    }
    else {

        formInputValidation.classList.add("invalid");
        formInputValidation.classList.remove("valid");
        
    }

})