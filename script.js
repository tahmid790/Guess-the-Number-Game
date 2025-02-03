// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the guess
function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");

    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100!";
        message.style.color = "red";
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "blue";
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try again.";
        message.style.color = "blue";
    } else {
        message.textContent = `Congratulations! You guessed the number ${randomNumber}!`;
        message.style.color = "green";
    }
}
