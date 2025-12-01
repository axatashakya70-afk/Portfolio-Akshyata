// MOBILE MENU
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuButton.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

// CONTACT FORM MESSAGE
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        msg.textContent = "Please fill all fields.";
        msg.style.color = "#ff4b4b";
        return;
    }

    msg.textContent = "Message sent successfully!";
    msg.style.color = "#00eaff";
    form.reset();
});
