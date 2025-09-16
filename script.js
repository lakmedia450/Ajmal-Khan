// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Scroll Effect for Header
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// Hero Section text animation on load
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");

  heroTitle.style.opacity = "0";
  heroSubtitle.style.opacity = "0";

  setTimeout(() => {
    heroTitle.style.transition = "opacity 1.5s ease, transform 1.5s ease";
    heroTitle.style.opacity = "1";
    heroTitle.style.transform = "translateY(0)";
  }, 300);

  setTimeout(() => {
    heroSubtitle.style.transition = "opacity 1.5s ease";
    heroSubtitle.style.opacity = "1";
  }, 900);
});
// Fade-in effect for service cards on scroll
const serviceCards = document.querySelectorAll(".service-card");

function revealServices() {
  const triggerBottom = window.innerHeight * 0.85;

  serviceCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transition = "opacity 1s ease, transform 1s ease";
    }
  });
}

window.addEventListener("scroll", revealServices);
// Motion effect when scrolling into view
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(aboutSection);
});
// Animate portfolio items on scroll
document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  portfolioItems.forEach((item) => observer.observe(item));
});
// Animate course cards on scroll
document.addEventListener("DOMContentLoaded", () => {
  const courseCards = document.querySelectorAll(".course-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  courseCards.forEach((card) => observer.observe(card));
});
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonials-slider");
  const cards = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // Intersection Observer for fade-in
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  cards.forEach(card => observer.observe(card));

  // Slider functionality
  let scrollAmount = 0;
  const scrollStep = 320; // width + gap approx

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: scrollStep, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
  });

  // Optional auto-slide
  setInterval(() => {
    slider.scrollBy({ left: scrollStep, behavior: "smooth" });
  }, 8000);
});
document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".cta-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(cta);
});
document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector(".contact-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          contactSection.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(contactSection);

  // Simple form submission (demo)
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting Lak Multi Media. We'll get back to you soon!");
    form.reset();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          footer.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(footer);
});
