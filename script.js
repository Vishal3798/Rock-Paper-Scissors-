const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');

let playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

playerScoreElement.textContent = playerScore;
computerScoreElement.textContent = computerScore;

const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

const rulesBtn = document.getElementById('rules-btn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

rulesBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'HURRY!!';
        playerScore++;
        localStorage.setItem('playerScore', playerScore);
        celebrate();
    } else {
        result = 'YOU LOST';
        computerScore++;
        localStorage.setItem('computerScore', computerScore);
    }

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    resultElement.textContent = result;
}

function celebrate() {
    resultElement.classList.add('celebration');
    setTimeout(() => {
        resultElement.classList.remove('celebration');
    }, 2000);
}
