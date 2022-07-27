function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1;
    let choiceString;

    switch (choiceNumber) {
        case 1:
            choiceString = 'rock';
            break;
        case 2:
            choiceString = 'paper';
            break;
        case 3:
            choiceString = 'scissors';
            break;
    }

    return choiceString;
}

function playRound(computerChoice, playerChoice) {

    if (computerChoice === playerChoice) {
        return "It is a tie";
    }

    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        return "Computer wins!";
    }

    if (computerChoice === 'paper' && playerChoice === 'rock') {
        return "Computer wins!";
    }

    if (computerChoice === 'scissors' && playerChoice === 'paper') {
        return "Computer wins!";
    }

    if (computerChoice === 'paper' && playerChoice === 'scissors') {
        return "You win!";
    }

    if (computerChoice === 'scissors' && playerChoice === 'rock') {
        return "You win!";
    }

    if (computerChoice === 'rock' && playerChoice === 'paper') {
        return "You win!";
    }

}

function game() {


    let computerScore, playerScore;
    computerScore = playerScore = 0;


    // getting choices divs
    const playerChoiceDiv = document.querySelector('#player-choice');
    const computerChoiceDiv = document.querySelector('#computer-choice');

    // getting scores divs

    const playerScoreDiv = document.querySelector('#player-score');
    const computerScoreDiv = document.querySelector('#computer-score');

    // event listener for buttons
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let computerChoice = getComputerChoice();
            let playerChoice = button.id;
            playerChoiceDiv.textContent = playerChoice;
            computerChoiceDiv.textContent = computerChoice;
            let result = playRound(computerChoice, playerChoice);
            if (result === "You win!") {
                playerScore++;
            }
            else if (result === "Computer wins!") {
                computerScore++;
            }

            playerScoreDiv.textContent = playerScore;
            computerScoreDiv.textContent = computerScore;
        })
    })

    if (playerScore === 5) {
        playerScoreDiv.textContent =  0;
    }
    else if (computerScore === 5) {
        computerScoreDiv.textContent =  0;
    }
}





game();