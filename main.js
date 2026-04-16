// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
