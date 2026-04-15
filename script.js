// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out"
});

// Button Click Animation
document.querySelectorAll(".contact-btn").forEach(button => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);
  });
});

console.log("Contact section loaded successfully");
