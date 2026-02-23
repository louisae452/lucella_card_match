// Wait for document to load befor running the script.
document.addEventListener("DOMContentLoaded", function() {
    let start = document.getElementById("start-button");
    let level_button = document.getElementById("choose-level");
    start.addEventListener("click", function() {
        level_button.classList.remove("hidden");
    });
});