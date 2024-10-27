const words = ["javascript", "programming", "hangman", "development", "computer", "code"];
let selectedWord = "";
let guessedLetters = [];
let lives = 6;
const wordToGuessElement = document.getElementById("wordToGuess");
const messageElement = document.getElementById("message");
const livesCountElement = document.getElementById("livesCount");
const letterInput = document.getElementById("letterInput");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const hangmanCanvas = document.getElementById("hangmanCanvas");
const ctx = hangmanCanvas.getContext("2d");

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    lives = 6;
    updateDisplay();
    drawHangman();
    messageElement.textContent = "";
    restartButton.style.display = "none";
}

function updateDisplay() {
    const displayedWord = selectedWord.split("").map(letter => (guessedLetters.includes(letter) ? letter : "_")).join(" ");
    wordToGuessElement.textContent = "Word: " + displayedWord;
    livesCountElement.textContent = lives;
}


function drawHangman() {
    ctx.clearRect(0, 0, hangmanCanvas.width, hangmanCanvas.height); // 
    ctx.beginPath();
    if (lives < 6) {
        ctx.arc(100, 30, 10, 0, Math.PI * 2, true);
    }
    if (lives < 5) { 
        ctx.moveTo(100, 40);
        ctx.lineTo(100, 100);
    }
    if (lives < 4) { 
        ctx.moveTo(100, 50);
        ctx.lineTo(70, 80);
    }
    if (lives < 3) { 
        ctx.moveTo(100, 50);
        ctx.lineTo(130, 80);
    }
    if (lives < 2) { 
        ctx.moveTo(100, 100);
        ctx.lineTo(70, 130);
    }
    if (lives < 1) { 
        ctx.moveTo(100, 100);
        ctx.lineTo(130, 130);
    }
    ctx.stroke();
}

function makeGuess() {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = "";
    
    if (!letter || guessedLetters.includes(letter) || letter.length !== 1) {
        return;
    }

    guessedLetters.push(letter);

    if (!selectedWord.includes(letter)) {
        lives--;
        drawHangman();
    }

    updateDisplay();

   
    if (lives === 0) {
        messageElement.textContent = "Game Over! The word was: " + selectedWord;
        restartButton.style.display = "block";
    } else if (selectedWord.split("").every(letter => guessedLetters.includes(letter))) {
        messageElement.textContent = "Congratulations! You've guessed the word!";
        restartButton.style.display = "block";
    }
}

guessButton.addEventListener("click", makeGuess);
restartButton.addEventListener("click", startGame);

startGame();
