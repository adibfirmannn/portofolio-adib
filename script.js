var typed = new Typed(".input", {
  strings: ["Web Developer", "Frontend Engineer", "Backend Engineer"],
  typedSpeed: 70,
  backSpeed: 55,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    // Loop untuk mencari section yang sedang terlihat
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Tambahkan offset agar lebih tepat
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    // Tambahkan class 'active' pada link yang sesuai
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});
