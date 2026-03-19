const themeToggle = document.getElementById("theme-toggle");

// If no theme is saved → default to dark
if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
}

// Apply saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) {
        themeToggle.textContent = "☀️";
    }
} else {
    if (themeToggle) {
        themeToggle.textContent = "🌙";
    }
}

// Toggle on click
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    });
}
