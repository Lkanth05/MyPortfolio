const navLink = document.querySelectorAll(".nav-link");
const navButton = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar-collapse");

const emailForm = document.getElementById("contact-form");
const inputs = document.querySelectorAll("#name, #email, #message");
const emailSuccess = document.getElementById("email-sent");
const newEmail = document.getElementById("new-email");

// Collapse navbar when user clicks on navbar links
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", collapseNav);
}

// Collapse navbar when user clicks outside of navbar
document.addEventListener("click", function (event) {
  if (navbar.classList.contains("show") && event.target != navbar) {
    collapseNav();
  }
});

// Collapse navbar
function collapseNav() {
  navButton.classList.add("collapsed");
  navButton.setAttribute("aria-expanded", "false");
  navbar.classList.add("collapsed");
  navbar.classList.remove("show");
}

// Hide email form when submit is successful
function hideEmailForm() {
  inputs.forEach((input) => {
    input.value = "";
  });

  emailForm.style.display = "none";
  emailSuccess.style.display = "block";
}

// Show email form when button clicked
newEmail.addEventListener("click", showEmailForm);

function showEmailForm() {
  emailForm.style.display = "block";
  emailSuccess.style.display = "none";
}
document.addEventListener('DOMContentLoaded', function () {
  const nameElement = document.getElementById('name');
  const nameText = nameElement.textContent;
  nameElement.textContent = '';

  let index = 0;
  function type() {
      if (index < nameText.length) {
          nameElement.textContent += nameText.charAt(index);
          index++;
          setTimeout(type, 10); // Adjust typing speed here
      }
  }

  type();
  setTimeout(function () {
    nameElement.style.borderRight = 'none';
}, 250);
});

