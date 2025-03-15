// ✅ Form Validation for Contact Page
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) { // Ensure form exists before adding event listener
        form.addEventListener("submit", function (event) {
            const name = document.querySelector("input[name='name']").value.trim();
            const email = document.querySelector("input[name='email']").value.trim();
            const message = document.querySelector("textarea[name='message']").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields before submitting!");
                event.preventDefault(); // Stop form submission if fields are empty
            }
        });
    }
});

// ✅ Navbar Highlighting Active Page
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); // Get current page filename
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Add 'active' class for current page
        }
    });
});
// Fade-in effect when scrolling
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

fadeElements.forEach(el => observer.observe(el));