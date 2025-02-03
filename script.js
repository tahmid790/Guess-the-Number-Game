// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5; // Maximum attempts

// Function to check the guess
function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");
    let attemptsLeft = document.getElementById("attemptsLeft");

    // Reset animation
    message.style.opacity = "0";
    message.style.transform = "scale(0.8)";

    setTimeout(() => {
        if (userGuess < 1 || userGuess > 100) {
            message.textContent = "Please enter a number between 1 and 100!";
            message.style.color = "red";
        } else if (userGuess < randomNumber) {
            attempts--;
            message.textContent = `Too low! Try again. (${attempts} guesses left)`;
            message.style.color = "#20c997"; /* Teal color */
        } else if (userGuess > randomNumber) {
            attempts--;
            message.textContent = `Too high! Try again. (${attempts} guesses left)`;
            message.style.color = "#20c997"; /* Teal color */
        } else {
            message.textContent = `🎉 Congratulations! You guessed the number ${randomNumber}!`;
            message.style.color = "green";
            document.getElementById("guessInput").disabled = true; // Disable input after win
        }

        // Update attempts display
        attemptsLeft.textContent = `Attempts left: ${attempts}`;

        // Apply animation
        message.style.opacity = "1";
        message.style.transform = "scale(1)";

        // Check if attempts are over
        if (attempts === 0 && userGuess != randomNumber) {
            message.textContent = `Game over! The number was ${randomNumber}.`;
            message.style.color = "red";
            document.getElementById("guessInput").disabled = true;
        }
    }, 200); // Short delay for smooth animation
}

// Function to restart the game
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    document.getElementById("message").textContent = "";
    document.getElementById("attemptsLeft").textContent = "Attempts left: 5";
    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessInput").value = "";
}
