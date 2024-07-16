const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";

    if(playerChoice === computerChoice) {
        result = "Tie...";
    } else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors" && "lizard") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock" && "spock") ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper" && "lizard") ? "You win!" : "You lose!";
                break;
            case "lizard":
                result = (computerChoice === "paper" && "spock") ? "You win!" : "You lose!";
                break;
            case "spock":
                result = (computerChoice === "scissors" && "rock") ? "You win!" : "You lose!";
                break;
            case "dynamite":
                result = "You win!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
}