// Wait for document to load befor running the script.
document.addEventListener("DOMContentLoaded", function() {
    //Event listener to show level choices when start button is clicked.
    let start = document.getElementById("start-button");
    let level_button = document.getElementById("choose-level");
    start.addEventListener("click", function() {
        level_button.classList.remove("hidden");
    });
    //
});