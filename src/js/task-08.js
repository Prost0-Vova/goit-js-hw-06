const loginForm = document.querySelector(".login-form");
loginForm.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
      const formData = {}
      for (let i = 0; i < loginForm.elements.length; i++) {
          const el = loginForm.elements[i];
          if (el.type !== "submit") {
              formData[el.name] = el.value
          }
      }
  const isFormValid = Object.values(formData).every((value) => value !== "");
  if (!isFormValid) {
    alert("Будь ласка, заповніть всі поля форми.");
    return;
  }
      console.log(formData);
    loginForm.reset();
  }
