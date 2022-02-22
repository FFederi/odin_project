function computerPlay() {
    let play = ['Rock', 'Paper', 'Scissor']
    return play[Math.floor(Math.random() * play.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === 'ROCK') { return (
        (computerSelection === 'ROCK') ? 'It\'s a draw!' :
        (computerSelection === 'PAPER') ?  'You Lose! Paper beats Rock!':
        'You Win! Rock beats Scissor!')} 
    else if (playerSelection === 'PAPER') { return (
        (computerSelection === 'ROCK') ?'You Win! Paper beats Rock!' :
        (computerSelection === 'PAPER') ? 'It\'s a draw!' :
        'You Lose! Scissor beats Paper!')} 
    else { return (
        (computerSelection === 'ROCK') ?'You Lose! Rock beats Scissor!' :
        (computerSelection === 'PAPER') ? 'You Win! Scissor beats Paper' :
        'It\'s a draw!')} 
} 

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter rock, paper or scissor')
        let computerSelection = computerPlay()
        console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
     }
     
}
