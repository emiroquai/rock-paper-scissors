//Button event listener
const buttons = document.querySelectorAll('button');
const selections = ['Rock', 'Paper', 'Scissors'];

let playerScore = 0;
let computerScore = 0;
let result = null;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${playerScore}`;

const output = document.querySelector("#output");
output.textContent = `First to score 5 wins`;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerSelection());
    });
    });

function getComputerSelection() {
    const computerSelection = selections[Math.floor(Math.random() * selections.length)];
        return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + (playerSelection.slice(1)).toLowerCase()
    // playerSelection = button.id;
    // computerSelection = getComputerSelection();
    
    if (playerSelection === "Rock" &&  computerSelection === "Paper") {
        result = "playerLose";
        output.textContent = `Paper beats rock, you lose!`;
    } else if (playerSelection === "Rock" &&  computerSelection === "Scissors") {
        result = "playerWin";
        output.textContent = `Rock beats Scissors, you win!`;
    } else if (playerSelection === "Rock" &&  computerSelection === "Rock") {
        result = "tie";
        output.textContent = `It's a tie.`;
    } else if (playerSelection === "Paper" &&  computerSelection === "Rock") {
        result = "playerWin";
        output.textContent = `Paper beats rock, you win!`;
    } else if (playerSelection === "Paper" &&  computerSelection === "Paper") {
        output.textContent = `It's a tie.`;
    } else if (playerSelection === "Paper" &&  computerSelection === "Scissors") {
        result = "playerLose";
        output.textContent = `Scissors beats paper, you lose!`;
    } else if (playerSelection === "Scissors" &&  computerSelection === "Rock") {
        result = "playerLose";
        output.textContent = `Rock beats Scissors, you lose!`;
    } else if (playerSelection === "Scissors" &&  computerSelection === "Paper") {
        result = "playerWin";
        output.textContent = `Scissors beats paper, you win!`;
    } else if (playerSelection === "Scissors" &&  computerSelection === "Scissors") {
        result = "tie";
        output.textContent = `It's a tie.`;
    }
    game();
}       
    
function game() {
    
    
    // let computerSelection = getComputerSelection();
    // let playerSelection = prompt("Rock, Paper or Scissors?");
    // console.log('Computer playes ' + computerSelection);
    // let result = playRound(playerSelection, computerSelection);
    // console.log(result);

    
    if (result === 'playerWin') {
        playerScore++;

    } else if (result === 'playerLose') {
        computerScore++;
    } 
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;


    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            output.textContent = `Player Wins!`;
        } else if (playerScore < computerScore) {
            output.textContent = `Computer Wins!`;
        } else {
            output.textContent = `It's a tie`;
        }
    }
}
    

   
