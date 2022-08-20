const btnChoices = document.querySelectorAll("button");
btnChoices.forEach(e => e.addEventListener('click', function() {
  console.log(playRound(e.textContent, getComputerChoice()))
}));
const drawScore1 = document.querySelector("#draw-score");
const playerScore1 = document.querySelector("#player-score");
const computerScore1 = document.querySelector("#computer-score");
const log = document.querySelector("#log");
const choices = ['✊', '🤚', '✌️'];
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
function playRound(player, computer) {
  if (player === computer) {
    drawScore++
    drawScore1.textContent = drawScore;
    log.textContent = `Player chose: ${player}, Computer chose: ${computer}
    It's a Draw!`
  } else if (player == "✊" && computer == "✌️" || player == "🤚" && computer == "✊" || player == "✌️" && computer == "🤚") {
    playerScore++
    playerScore1.textContent = playerScore;
    log.textContent = `Player chose: ${player}, Computer chose: ${computer}
    Player wins!`
  } else {
    computerScore++
    computerScore1.textContent = computerScore;
    log.textContent = `Player chose: ${player}, Computer chose: ${computer} Computer wins!`
  }
}
