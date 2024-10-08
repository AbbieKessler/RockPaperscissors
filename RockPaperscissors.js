// This is a file to program a playable game of rps

// Step 1:
// test that your javascript file is linked to your HTML file by console.log("Hello, world!");
//console.log("hello world");   //works

// Step 2: 
// Create a function called getComputerChoice
// -getComputerChoice will randomly return "rock", "paper", "scissors"
// -HINT: Math.random() is a function that returns a number between 0 and 1.  You can use this to make random selections.
// -Once you think you've got this working, test it by console.log(getComputerChoice());
const options = ["rock","paper","scissors"]
function getComputerChoice(){
    const random = options[Math.floor(Math.random) * options.length]
    return random;
}
console.log(getComputerChoice());

// Step 3:
// Create a function called getHumanChoice:
// -Write the code so getHumanChoice returns one of "rock", "paper", or "scissors" based on user input
// -HINT: prompt() is a function that will allow you to get user input
// -Once you think you've got this working, test it by console.log(getHumanChoice());
function getHumanChoice(){
        const choice = prompt("Rock, Paper or Scissors?");
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
console.log(getHumanChoice());
// Step 4:
// Score tracking
// -Create two variables to score human and computer scores
// -initialize these variables with a score of 0
let humanScore = 0;
let computerScore = 0;
// Step 5: 
// Write the logic to play one game
// -Create a function called playRound
// -2 parameters (humanChoice, computerChoice)
// -make sure that human choice logic is case-insensitive (rock, RoCK, RocK, ROCK should all work equally well)
// -Should console.log a message like "You win! Rock beats scissors")
// -increment the human/computer score based on winner
function playRound(humanChoice, computerChoice){
    humanchoice == getHumanChoice();
    computerChoice == getComputerChoice();
    if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You Lose! Paper beats rock.");
        console.log(humanScore);
        console.log(computerScore + 1);
    }
    if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You Lose! Scissors beat paper.");
        console.log(humanScore);
        console.log(computerScore + 1);
    }
    if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You Lose! Rock beats scissors.");
        console.log(humanScore);
        console.log(computerScore + 1);
    }
    if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You Win! Paper beats rock.");
        console.log(humanScore + 1);
        console.log(computerScore);
    }
    if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You Win! Scissors beat paper.");
        console.log(humanScore + 1);
        console.log(computerScore);
    }
    if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You Win! Rock beats scissors.");
        console.log(humanScore + 1);
        console.log(computerScore);
    }
    if (humanChoice == computerChoice){
        console.log("It's a Tie!")
        console.log(humanScore);
        console.log(computerScore);
    }
} 