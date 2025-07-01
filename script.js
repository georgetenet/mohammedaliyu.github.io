// Scroll animation
const sections = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  observer.observe(section);
});

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});