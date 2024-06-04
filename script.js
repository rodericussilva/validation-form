function validation(event) {
  event.preventDefault();
  
  let fName = document.getElementById("fName");
  let lName = document.getElementById("lName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let errors = [];

  if (!fName.checkValidity()) {
    document.getElementById("firstnameError").innerHTML = fName.validationMessage;
    erros.push('firstnameError');
  }

  if (!lName.checkValidity()) {
    document.getElementById("lastnameError").innerHTML = lName.validationMessage;
    errors.push('lastnameError');
  }

  if (!email.checkValidity()) {
    document.getElementById("emailError").innerHTML = email.validationMessage;
    errors.push('emailError');
  }

  if (!password.checkValidity()) {
    document.getElementById("passwordError").innerHTML = password.validationMessage;
    errors.push('passwordError');
  }

  setTimeout(() => {
    errors.forEach((error) => {
      document.getElementById(error).innerHTML = '';
    });
  }, 5000);

  if (errors.length === 0) {
    alert('Formulário enviado com sucesso!');
    document.getElementById('registerForm').reset();
  } else {
    alert('Por favor, corrija os erros no formulário antes de enviar.');
  }
}

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', validation);
  });

}
