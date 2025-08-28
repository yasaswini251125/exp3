document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const message = document.getElementById("message");

  // Simple validation check
  if (!form.checkValidity()) {
    message.textContent = "Please fill all required fields correctly.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Registration Successful!";
  message.style.color = "green";
});

document.getElementById("registrationForm").addEventListener("reset", function () {
  const message = document.getElementById("message");
  message.textContent = "Form has been reset. Ready for new registration!";
  message.style.color = "blue";
});
