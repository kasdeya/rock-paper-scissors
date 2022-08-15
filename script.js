const choices = ['rock', 'paper', 'scissors'];
let playerChoice
let randomChoice
let playerScore = 0
let computerScore = 0
let drawScore = 0

function getComputerChoice() {
  // randomly return either 'Rock','Paper' or 'Scissors'
 randomChoice = choices[Math.floor(Math.random() * 3)]; // create a new variable 
  // and do choices[random number] to get a random value from array
  return randomChoice
}
function playerSelection() {
  // prompt user for choice
  playerChoice = prompt('Choose between rock, paper and scissors').toLowerCase();
  // only accept choice if it's included in the choices array
  while (!choices.includes(playerChoice)) {
    alert("Please enter only: 'rock', 'paper' or 'scissors'");
    playerChoice = prompt('Choose between rock, paper and scissors').toLowerCase();
  }
  return playerChoice
}
function playRound(player, computer) {
  if (player === computer) {
    drawScore++
    return `player chose ${player}, computer chose ${computer}
    It's a Draw!`
  } else if (player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper") {
    playerScore++
    return `player chose ${player}, computer chose ${computer}
    player wins!`
  } else {
    computerScore++
    return `player chose ${player}, computer chose ${computer} \ncomputer wins!`
  }
}
function game() {
  let winner 
  if (playerScore > 3) {
    winner = 'player'
  } else if (computerScore > 3) {
    winner = 'computer'
  } else {
    winner = 'draw'
  }
  // loop 5 rounds
  for (let index = 0; index < 5; index++) {
    // get a new computer selection every round
    let computerSelection = getComputerChoice();
    // prompt for a new player input every round
    playerSelection();
    // display the round and play it
    console.log(playRound(playerChoice, computerSelection));
  }
  // return the score and winner
  return `player: ${playerScore}, computer: ${computerScore}, draws: ${drawScore}
${winner}`
}
console.log(game());

