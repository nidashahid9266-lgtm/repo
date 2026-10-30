
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Typing animation
const words = [
    "Web Developer",
    "Frontend Developer",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    const word = words[wordIndex];

    typing.textContent = word.substring(0, charIndex);

    if (!deleting) {
        charIndex++;

        if (charIndex > word.length) {
            deleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            charIndex = 0;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

// Close mobile menu after clicking a link
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// Contact form demo
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    this.reset();
});
