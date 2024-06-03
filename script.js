function validation() {
  let fName = document.getElementById("fName");
  let lName = document.getElementById("lName");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (!fName.checkValidity()) {
    document.getElementById("firstnameError").innerHTML =
      fName.validationMessage;
  }

  if (!lName.checkValidity()) {
    document.getElementById("lastnameError").innerHTML =
      lName.validationMessage;
  }

  if (!email.checkValidity()) {
    document.getElementById("emailError").innerHTML = email.validationMessage;
  }

  if (!password.checkValidity()) {
    document.getElementById("passwordError").innerHTML =
      password.validationMessage;
  }
}
