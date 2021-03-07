let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".match > p");
const reset = document.querySelector(".reset > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");



function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissor";
}

function win(userChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    if (playerScore === 5 || computerScore === 5) {
        gameEnd();
    }
}

function lose(userChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose!`;  
    if (playerScore === 5 || computerScore === 5) {
        gameEnd(); 
    }
}

function draw(userChoice, computerChoice) {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It\'s a draw!`;
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    reset.innerHTML = "";
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function gameEnd() {
    playerScore = 0;
    computerScore = 0;
    if (playerScore > computerScore) {
        reset.innerHTML = `You won the game, choose an option to play again!`;
    } else {
        reset.innerHTML = `You lost the game, choose an option to play again!`;   
    }
}

function main() {
    rock_div.addEventListener("click", function() {
        game("r");
    })
    paper_div.addEventListener("click", function() {
        game("p");
    })
    scissor_div.addEventListener("click", function() {
        game("s");
    })
}

main();



