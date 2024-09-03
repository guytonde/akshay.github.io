const darkModeBtn = document.getElementById('dark-mode-toggle');

// Function to toggle dark mode
function toggleDarkMode() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.remove("latex-dark");
        localStorage.setItem('theme', 'light');
        darkModeBtn.textContent = '◑'
    } else {
        document.body.classList.add("latex-dark");
        localStorage.setItem('theme', 'dark');
        darkModeBtn.textContent = '◐'
    }
}

// Run applySavedTheme on page load
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add("latex-dark");
        localStorage.setItem('theme', 'dark');
        darkModeBtn.textContent = '◐'
    } else {
        document.body.classList.remove("latex-dark");
        localStorage.setItem('theme', 'light');
        darkModeBtn.textContent = '◑'
    }
}

// Event listener for dark mode toggle button
darkModeBtn.addEventListener('click', toggleDarkMode);
