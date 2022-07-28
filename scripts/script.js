let computerScore, playerScore;
computerScore = playerScore = 0;

// getting choices divs
const playerChoiceDiv = document.querySelector('#player-choice');
const computerChoiceDiv = document.querySelector('#computer-choice');

// getting scores divs

const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');

// getting game winner div
const winnerDiv = document.querySelector('#winner');

//getting the buttons
const buttons = document.querySelectorAll('button:not(#try-again)');

// getting try-again button
const tryAgainButton = document.querySelector('#try-again');

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

    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        computerScore++;
        computerScoreDiv.textContent = computerScore;
    }

    if (computerChoice === 'paper' && playerChoice === 'rock') {
        computerScore++;
        computerScoreDiv.textContent = computerScore;
    }

    if (computerChoice === 'scissors' && playerChoice === 'paper') {
        computerScore++;
        computerScoreDiv.textContent = computerScore;
    }

    if (computerChoice === 'paper' && playerChoice === 'scissors') {
        playerScore++;
        playerScoreDiv.textContent = playerScore;
    }

    if (computerChoice === 'scissors' && playerChoice === 'rock') {
        playerScore++;
        playerScoreDiv.textContent = playerScore;
    }

    if (computerChoice === 'rock' && playerChoice === 'paper') {
        playerScore++;
        playerScoreDiv.textContent = playerScore;
    }

    checkWinner();

}

function checkWinner() {

    if (computerScore === 5) {
        winnerDiv.textContent = "Computer wins the game";
        setButtonState('disable');
        tryAgainButton.style.visibility = 'visible';
    }

    if (playerScore === 5) {
        winnerDiv.textContent = "Player wins the game";
        setButtonState('disable');
        tryAgainButton.style.visibility = 'visible';
    }
}

function setButtonState(state) {
    buttons.forEach((button) => {
        if (state === 'disable')
            button.disabled = true;
        if (state === 'enable')
            button.disabled = false;
    })
}



// event listener for buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        let playerChoice = button.id;
        playerChoiceDiv.textContent = playerChoice;
        computerChoiceDiv.textContent = computerChoice;
        playRound(computerChoice, playerChoice);
    })
})

// event listener for trying again button
tryAgainButton.addEventListener('click', () => {
    winnerDiv.textContent = '';
    playerScoreDiv.textContent = playerScore = 0;
    computerScoreDiv.textContent = computerScore = 0;
    setButtonState('enable');
    tryAgainButton.style.visibility = 'hidden';
})


