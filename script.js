document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  // Collect values from form
  const formData = new FormData(this);
  let details = `
    <h3>Submitted Details</h3>
    <table border="1" cellpadding="8" style="border-collapse: collapse; margin-top: 10px;">
      <tr><td><b>First Name</b></td><td>${formData.get("FirstName")}</td></tr>
      <tr><td><b>Last Name</b></td><td>${formData.get("LastName")}</td></tr>
      <tr><td><b>Father's Name</b></td><td>${formData.get("fathersName")}</td></tr>
      <tr><td><b>Mother's Name</b></td><td>${formData.get("mothersName")}</td></tr>
      <tr><td><b>Date of Birth</b></td><td>${formData.get("dob")}</td></tr>
      <tr><td><b>Gender</b></td><td>${formData.get("gender")}</td></tr>
      <tr><td><b>Address</b></td><td>${formData.get("address")}</td></tr>
      <tr><td><b>Education 1</b></td><td>${formData.get("qual1")} - ${formData.get("inst1")} (${formData.get("year1")})</td></tr>
      <tr><td><b>Education 2</b></td><td>${formData.get("qual2")} - ${formData.get("inst2")} (${formData.get("year2")})</td></tr>
      <tr><td><b>Email</b></td><td>${formData.get("email")}</td></tr>
      <tr><td><b>Phone</b></td><td>${formData.get("phone")}</td></tr>
    </table>
  `;

  // Show details in message area
  document.getElementById("message").innerHTML = details;
});
