const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, observerOptions);

document
  .querySelectorAll(".animate, .animate-slide, .project")
  .forEach((el) => {
    observer.observe(el);
  });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const headerOffset = 80; // Height of your fixed header
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    const rect = project.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;

    if (isVisible) {
      project.classList.add("in-view");
    }
  });
});
