// Welcome message when the homepage loads
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("index.html")) {
    alert("Welcome to My Life Journey!");
  }

  // Automatically update footer year
  const footer = document.querySelector("footer p");
  if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} [Your Name]. All rights reserved.`;
  }
});

// Simple contact form validation
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      event.preventDefault(); // Prevent form submission
    } else {
      alert("Thank you for your message!");
    }
  });
}
