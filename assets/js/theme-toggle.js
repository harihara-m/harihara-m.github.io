(function () {
    const toggleButton = document.getElementById("theme-toggle");

    // Guard clause in case the button doesn't exist
    if (!toggleButton) {
        return;
    }

    const toggleIcon = toggleButton.querySelector("i");

    // Get the current theme from localStorage or OS preference
    let currentTheme =
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");

    // Apply the theme on initial load
    applyTheme(currentTheme);

    // Add click event to the button
    toggleButton.addEventListener("click", (e) => {
        e.preventDefault();
        // Switch theme
        let newTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    });

    function applyTheme(theme) {
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            if (toggleIcon) {
                toggleIcon.classList.remove("fa-moon");
                toggleIcon.classList.add("fa-sun");
            }
            currentTheme = "dark";
        } else {
            document.documentElement.removeAttribute("data-theme");
            if (toggleIcon) {
                toggleIcon.classList.remove("fa-sun");
                toggleIcon.classList.add("fa-moon");
            }
            currentTheme = "light";
        }
    }
})();
