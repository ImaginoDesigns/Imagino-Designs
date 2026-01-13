document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_lavhg4q",
    "template_yk70y1v",
    this,
    "uGXvsvRqBRphph3i0"
  )
  .then(() => {
    alert("Consultation request sent successfully!");
    this.reset();
  }, (error) => {
    alert("Failed to send. Please try again.");
    console.log(error);
  });
});

