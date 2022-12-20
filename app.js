//User and computer choice display
const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");

// set up results display
const computerResultDisplay = document.getElementById("computerResults");
const userResultDisplay = document.getElementById("userResults");

//Computer and User score
const computerScoreDisplay = document.getElementById("computerScore");
const userScoreDisplay = document.getElementById("user-score");

//choices
const possibleChoices = document.querySelectorAll("button");//will target all buttons


let userChoice;
let computerChoice;
let resultUsers;
let resultComputer;
let scoreCPU = 0;
let scoreUser = 0;
//setting up choices and results
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  calculateUserResults(userChoice, computerChoice, scoreUser);
  calculateComputerResults(computerChoice, userChoice, scoreCPU);
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}


function calculateUserResults(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    resultUsers = "It's A Tie!";
  }
  if (userChoice === "Rock" && computerChoice === "Scissors")
  {
    resultUsers = "VICTORY!";
  }
  if (userChoice === "Scissors" && computerChoice === "Paper") {
    resultUsers = "Winner Winner!";
  }
  if (userChoice === "Paper" && computerChoice === "Rock") {
    resultUsers = "Victory is yours!";
  }
  if (userChoice === "Scissors" && computerChoice === "Rock" ) {
    resultUsers = "Point for CPU!";
  }
  if (userChoice === "Rock" && computerChoice === "Paper") {
    resultUsers = "Taste Defeat!";
  }
  if (userChoice === "Paper" && computerChoice === "Scissors"
  ) {
    resultUsers = "Computer wins!";
  }
  userResultDisplay.innerHTML = resultUsers;
}


function calculateComputerResults(computerChoice, userChoice, scoreCPU) {
  if (computerChoice === userChoice) {
    resultComputer = "It's A Tie!";
  }
  if (computerChoice === "Scissors" && userChoice === "Rock")
  {
    resultComputer = "Rematch, Pls?";

  }
  if (computerChoice === "Paper" && userChoice === "Scissors") {
    resultComputer = "Congrats, GG";
  }
  if (computerChoice === "Rock" && userChoice === "Paper" ) {
    resultComputer = "Let's go again";
    
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    resultComputer = "I win 0100101!";
    scoreCPU +=1;
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    resultComputer = "AIs are superior!";
    scoreCPU += 1;
  }
  if (computerChoice === "Scissors" && userChoice === "Paper"
  ) {
    resultComputer = "Point for me";
    scoreCPU = scoreCPU + 1;
  }
;
  computerResultDisplay.innerHTML = resultComputer;
  computerScoreDisplay.innerHTML = scoreCPU;
}
