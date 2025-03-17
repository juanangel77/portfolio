document.querySelector("form").addEventListener("submit", function(event) {
    let inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.value = input.value.replace(/</g, "&lt;").replace(/>/g, "&gt;"); // Protection XSS
    });
});