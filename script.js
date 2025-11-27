// MOBILE MENU TOGGLE
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "✕" : "☰";
});

// FORM VALIDATION
const form = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        messageBox.textContent = "Please fill out all required fields.";
        messageBox.style.color = "red";
        return;
    }

    messageBox.textContent = "Thank you! Your message has been sent.";
    messageBox.style.color = "green";

    form.reset();
});
