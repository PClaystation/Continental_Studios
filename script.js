document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".website-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 }); // Adjust threshold to control when the effect triggers

    items.forEach(item => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for stored dark mode setting
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.removeItem('dark-mode');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome";
    let index = 0;
    function type() {
        if (index < text.length) {
            document.getElementById("hero-title").textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
