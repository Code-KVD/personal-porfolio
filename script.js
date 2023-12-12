document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Text to be typed
    var textToType = "Hey, there";

    // Speed of typing in milliseconds
    var typingSpeed = 100; // Adjust the typing speed as needed

    // Get the element where text will be typed
    var typedTextElement = document.getElementById('typed-text');

    // Function to simulate typing and backspacing
    function typeTextWithCursor(text, index) {
        if (index <= text.length) {
            // Add a character to the typed text
            typedTextElement.innerHTML = text.substring(0, index) + '<span class="cursor">|</span>';

            // Wait for the typing speed and call the function recursively
            setTimeout(function() {
                typeTextWithCursor(text, index + 1);
            }, typingSpeed);
        } else {
            // Backspace after typing is complete
            backspaceText(text.length);
        }
    }

    // Function to simulate backspacing
    function backspaceText(index) {
        if (index >= 0) {
            // Remove a character from the typed text
            typedTextElement.innerHTML = textToType.substring(0, index) + '<span class="cursor">|</span>';

            // Wait for the typing speed and call the function recursively
            setTimeout(function() {
                backspaceText(index - 1);
            }, typingSpeed);
        } else {
            // Typing and backspacing are complete, restart the process
            setTimeout(function() {
                typeTextWithCursor(textToType, 0);
            }, typingSpeed);
        }
    }

    // Start typing and backspacing when the DOM is fully loaded
    typeTextWithCursor(textToType, 0);
});
