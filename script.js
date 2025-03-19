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

// Settings Menu
document.addEventListener("DOMContentLoaded", function () {
    // Show settings menu when the settings button is clicked
    document.getElementById('settings-button').addEventListener('click', function() {
        document.getElementById('settings-popup').style.display = 'flex';
    });

    // Close the settings menu when the exit button is clicked
    document.getElementById('exit-settings-button').addEventListener('click', function() {
        document.getElementById('settings-popup').style.display = 'none';
    });
});

// Back to Top Button
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

// Show settings menu when the settings button is clicked
document.getElementById('settings-button').addEventListener('click', function() {
    document.getElementById('settings-popup').style.display = 'flex';
});

// Show settings menu when the settings header text is clicked
document.getElementById('settings-header').addEventListener('click', function() {
    document.getElementById('settings-popup').style.display = 'flex';
});

// Close the settings menu when the exit button is clicked
document.getElementById('exit-settings-button').addEventListener('click', function() {
    document.getElementById('settings-popup').style.display = 'none';
});