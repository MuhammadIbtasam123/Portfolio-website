function sendEmail() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("exampleInputEmail1").value;
  var subject = document.getElementById("Subject").value;
  var message = document.getElementById("message").value;

  var mailtoLink =
    "mailto:" +
    email +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(message);

  // Open the default email client with the mailto link
  window.location.href = mailtoLink;
}
