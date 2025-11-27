// MOBILE MENU
const menuBtn = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const expanded = navLinks.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", expanded);
    menuBtn.textContent = expanded ? "✕" : "☰";
});

// CONTACT FORM VALIDATION (simple)
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        msg.textContent = "Please fill all required fields.";
        msg.style.color = "red";
    } else {
        msg.textContent = "Thank you! Your message has been received.";
        msg.style.color = "green";
        form.reset();
    }
});
