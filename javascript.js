const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;  
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } 
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")){
            playerScore++;
            playerScoreElement.textContent = playerScore;
            return "You win! " + playerSelection + " beats " + computerSelection;
        } 
    else {
            computerScore++;
            computerScoreElement.textContent = computerScore;
            return "You lose! " + computerSelection + " beats " + playerSelection;
        }
}

function game() {
    for (let i = 0; i < 5; i++) {
        
        console.log(playRound(playerSelection, computerSelection));
    }
}