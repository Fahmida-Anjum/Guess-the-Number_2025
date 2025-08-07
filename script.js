let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById("userGuess").value);
    let message = document.getElementById("message");
    let attemptsDisplay = document.getElementById("attempts");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
        message.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
        message.style.color = "green";
        alert(`🎉 Congratulations! You guessed the number in ${attempts} attempts!`);
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try again.";
        message.style.color = "blue";
        alert("Too high! Try again.");
    } else {
        message.textContent = "Too low! Try again.";
        message.style.color = "blue";
        alert("Too low! Try again.");
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("message").textContent = "";
    document.getElementById("userGuess").value = "";
    alert("Game reset! Try again with a new number.");
}
