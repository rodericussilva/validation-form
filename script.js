function validation(event) {
  event.preventDefault();

  let fName = document.getElementById("fName");
  let lName = document.getElementById("lName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (!fName.checkValidity()) {
    document.getElementById("firstnameError").innerHTML =
      fName.validationMessage;
    setTimeout(() => {
      document.getElementById("firstnameError").innerHTML = '';
    }, 5000);
  }

  if (!lName.checkValidity()) {
    document.getElementById("lastnameError").innerHTML =
      lName.validationMessage;
    setTimeout(() => {
      document.getElementById("lastnameError").innerHTML = '';
    }, 5000);
  }

  if (!email.checkValidity()) {
    document.getElementById("emailError").innerHTML = email.validationMessage;
    setTimeout(() => {
      document.getElementById("emailError").innerHTML = '';
    }, 5000);
  }

  if (!password.checkValidity()) {
    document.getElementById("passwordError").innerHTML =
      password.validationMessage;
    setTimeout(() => {
      document.getElementById("passwordError").innerHTML = '';
    }, 5000);
  }
}
