document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav__link");
    const sections = document.querySelectorAll(".section");

    window.addEventListener("scroll", () => {
        let currentSection = null;

        sections.forEach((section) => {
            const contentTop = section.getBoundingClientRect().top;
            if (contentTop <= 100) {
                currentSection = section.id;
            }
        });

        navLinks.forEach((link) => {
            const target = link.getAttribute("href").substring(1);
            if (target === currentSection) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
});
