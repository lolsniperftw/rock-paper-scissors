function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1;
    let choiceString;

    switch(choiceNumber) {
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
    for (let i = 1; i <= 5; i++) {
        const playerChoice = prompt("Enter choice");
        let winner = playRound(getComputerChoice(), playerChoice.toLowerCase());
        if (winner === 'You win!') {
            playerScore++;
        }
        else if (winner === 'Computer wins!') {
            computerScore++;
        }
    }
    console.log('Computer: ' + computerScore + ' Player: ' + playerScore);
}

game();