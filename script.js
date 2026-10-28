document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("welcomeBtn");
    
    if (button) {
        button.addEventListener("click", function() {
            alert("Hello! Thanks for visiting my CS50 homepage assignment!");
        });
    }
});
