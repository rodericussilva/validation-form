function validation(event) {
  event.preventDefault();
  
  let fName = document.getElementById("fName");
  let lName = document.getElementById("lName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let errors = [];

  if (!fName.checkValidity()) {
    document.getElementById("firstnameError").innerHTML = fName.validationMessage;
    errors = true;
  } else {
    document.getElementById("firstnameError").innerHTML = '';
  }

  if (!lName.checkValidity()) {
    document.getElementById("lastnameError").innerHTML = lName.validationMessage;
    errors = true;
  } else {
    document.getElementById("lastnameError").innerHTML = '';
  }

  if (!email.checkValidity()) {
    document.getElementById("emailError").innerHTML = email.validationMessage;
    errors = true;
  } else {
    document.getElementById("emailError").innerHTML = '';
  }

  if (!password.checkValidity()) {
    document.getElementById("passwordError").innerHTML = password.validationMessage;
    errors = true;
  } else {
    document.getElementById("passwordError").innerHTML = '';
  }

  if (errors) {
    setTimeout(() => {
      document.querySelectorAll('.error').forEach((element) => {
        element.textContent = '';
      });
    }, 5000);
  } else {
    alert('Formulário enviado com sucesso!');
    document.getElementById('registerForm').reset();
  }

}
