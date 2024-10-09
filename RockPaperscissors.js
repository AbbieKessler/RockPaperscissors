// This is a file to program a playable game of rps

// Step 1:
// test that your javascript file is linked to your HTML file by console.log("Hello, world!");
//console.log("hello world");   //works

// Step 2: 
// Create a function called getComputerChoice
// -getComputerChoice will randomly return "rock", "paper", "scissors"
// -HINT: Math.random() is a function that returns a number between 0 and 1.  You can use this to make random selections.
// -Once you think you've got this working, test it by console.log(getComputerChoice());
function getComputerChoice(){
    if ((Math.random() <= 0.333) && (Math.random() >= 0)){
        return("rock");
    }
    else if ((Math.random() > 0.333) && (Math.random() <= .666)){
        return("paper");
    }
    else{
        return("scissors");
    }
}
//console.log(getComputerChoice());

// Step 3:
// Create a function called getHumanChoice:
// -Write the code so getHumanChoice returns one of "rock", "paper", or "scissors" based on user input
// -HINT: prompt() is a function that will allow you to get user input
// -Once you think you've got this working, test it by console.log(getHumanChoice());
const options = ["rock", "paper", "scissors"]; 
function getHumanChoice(){
        const choice = prompt("Rock, Paper or Scissors?");
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
//console.log(getHumanChoice());
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
        console.log(humanChoice);
        console.log(computerChoice);
        if (humanChoice == "rock" && computerChoice == "paper"){
            console.log("You Lose! Paper beats rock.");
            console.log(humanScore);
            console.log(computerScore + 1);
        }
        else if (humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You Lose! Scissors beat paper.");
            console.log(humanScore);
            console.log(computerScore + 1);
        }
        else if (humanChoice == "scissors" && computerChoice == "rock"){
            console.log("You Lose! Rock beats scissors.");
            console.log(humanScore);
            console.log(computerScore + 1);
        }
        else if (humanChoice == "paper" && computerChoice == "rock"){
            console.log("You Win! Paper beats rock.");
            console.log(humanScore + 1);
            console.log(computerScore);
        }
        else if (humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You Win! Scissors beat paper.");
            console.log(humanScore + 1);
            console.log(computerScore);
        }
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You Win! Rock beats scissors.");
            console.log(humanScore + 1);
            console.log(computerScore);
        }
        else if (humanChoice == computerChoice){
            console.log("It's a Tie!")
            console.log("Your score: ", humanScore);
            console.log("Computer Score: ", computerScore);
        }
}

playRound(getHumanChoice(),getComputerChoice())