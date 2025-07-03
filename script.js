// Smooth scroll to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll animation trigger
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-visible');
    }
  });
});

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Navbar background effect on scroll
const navbar = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-opacity-90", "backdrop-blur");
  } else {
    navbar.classList.remove("bg-opacity-90", "backdrop-blur");
  }
});

// Ripple button effect
document.querySelectorAll('.btn-primary, button').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    const rect = this.getBoundingClientRect();
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + "px";
    ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + "px";
    ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + "px";
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
// Animate sections on load
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = `all 0.6s ease ${index * 0.2}s`;

    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, 100);
  });
});
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
window.addEventListener("load", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("visible");
    }, index * 200);  // stagger effect: each section delayed by 200ms
  });
});
