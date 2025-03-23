document.addEventListener("DOMContentLoaded", function () {
    // Intersection Observer for revealing items on scroll
    const items = document.querySelectorAll(".website-item");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.removeItem('dark-mode');
        }
    });

    // Back to Top Button
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 200 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Settings Menu Toggle
    const settingsHeader = document.getElementById('settings-header');
    const settingsMenu = document.getElementById('settings-popup');

    settingsHeader.addEventListener('click', () => {
        const isOpen = settingsMenu.style.display === 'flex';
        settingsMenu.style.display = isOpen ? 'none' : 'flex';
        settingsHeader.classList.toggle('settings-open', !isOpen);
    });
});
