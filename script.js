function checkemail() {
  const email_add = document.getElementById("email_input");
  if (email_add.validity.typeMismatch) {
    email_add.classList.remove("ring-gray-300");
    email_add.classList.add("ring-SoftRed");
    email_add.classList.remove("focus:ring-black");
    email_add.setCustomValidity(" ");

    const errortext = document.getElementById("errortext");
    errortext.classList.remove("hidden");
    errortext.classList.remove("block");
  }
}
