const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerScoreElement = document.getElementById("player-score");
let computerScoreElement = document.getElementById("computer-score");
let resultElement = document.getElementById("result1");

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection=== 'scissors' && computerSelection === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}


function playRound(result) {
    if (result === "You win!") {
        playerScore++;
        playerScoreElement.textContent = playerScore;
        resultElement.textContent = result;
        resultElement.style.color = "green";
    } else if (result === "You lose!") {
        computerScore++;
        computerScoreElement.textContent = computerScore;
        resultElement.textContent = result;
        resultElement.style.color = "red"; 
    }
    else{
        resultElement.style.color = "black";
        resultElement.textContent = result;
    }
}

document.getElementById("reset").onclick = function() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    resultElement.textContent = "";
}


document.getElementById("rock").onclick = function() {
    const playerSelection = "rock";
    const computerSelection = computerChoice();
    const result = checkWinner(playerSelection, computerSelection);
    playRound(result);
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(result);
}

document.getElementById("paper").onclick = function() {
    const playerSelection = "paper";
    const computerSelection = computerChoice();
    result = checkWinner(playerSelection, computerSelection);
    playRound(result);
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(result);
}

document.getElementById("scissors").onclick = function() {
    const playerSelection = "scissors";
    const computerSelection = computerChoice();
    result = checkWinner(playerSelection, computerSelection);
    playRound(result);
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(result);
}