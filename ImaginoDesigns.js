<script>
const form = document.getElementById("consultation-form");
const status = document.getElementById("form-status");
const button = form.querySelector("button");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Loading state
  status.innerHTML = "Sending...";
  status.style.color = "black";
  button.disabled = true;

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      status.innerHTML = "✅ Consultation request sent successfully!";
      status.style.color = "green";
      form.reset();
    } else {
      status.innerHTML = "❌ Failed to send. Please try again.";
      status.style.color = "red";
    }
  } catch (error) {
    status.innerHTML = "❌ Network error. Please try again later.";
    status.style.color = "red";
  }

  // Re-enable button
  button.disabled = false;
});
</script>
