function computerPlay() {
    let play = ['Rock', 'Paper', 'Scissor']
    return play[Math.floor(Math.random() * play.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === 'ROCK') { return (
        (computerSelection === 'ROCK') ? 'It\'s a draw!' :
        (computerSelection === 'PAPER') ? (computerScore+=1, 'You Lose! Paper beats Rock!'):
        (playerScore+=1, 'You Win! Rock beats Scissor!'))} 
    else if (playerSelection === 'PAPER') { return (
        (computerSelection === 'ROCK') ? (playerScore+=1, 'You Win! Paper beats Rock!') :
        (computerSelection === 'PAPER') ? 'It\'s a draw!' :
        (computerScore+=1, 'You Lose! Scissor beats Paper!'))} 
    else { return (
        (computerSelection === 'ROCK') ? (computerScore+=1, 'You Lose! Rock beats Scissor!') :
        (computerSelection === 'PAPER') ? (playerScore+=1, 'You Win! Scissor beats Paper') :
        'It\'s a draw!')}
} 

function game() {

    const btns = document.querySelectorAll('button');
    const result = document.querySelector('.result');
    


    btns.forEach((button) => {
        button.addEventListener('click', () => {
            let computerSelection = computerPlay()
            let message = playRound(button.textContent, computerSelection)

            let match = document.createElement('div')
            match.textContent = `${message} YOU:${playerScore} COMPUTER:${computerScore}`
            result.appendChild(match)
            
            if (computerScore >= 5) {
                match.textContent = 'COMPUTER WINS'
                result.appendChild(match)
            }
            if (playerScore >=5) {
                match.textContent = 'PLAYER WINS'
                result.appendChild(match)
            }
        }
    )})
}

var playerScore = 0;
var computerScore = 0;
game();