// Establish some global variables
let game = 0;
let round = 0;
let rounds = 0;
let userRoundWins = 0;
let computerRoundWins = 0;
let userChoice = "";
let computerChoice = "";
let winner = "";
let gameTracker = document.getElementById("gameTracker");

// Game flows through functions as follows:
// 1. Get the user's name
// 2. Have the user determine the number of rounds, within parameters
// 3. Set the header of the next game to display round results
// 4. Prompt user to pick a choice
// 5. Have computer randomly choose a choice
// 6. Determine the winner of the round and alert the result
// 7. If rounds are over, determine the winner and alert the result
// 8. Add round results to DOM
// 9. A button in the HTML will start the process over with step 2

// Get the player's name
let user =
    prompt("Welcome Stranger! I'm Twills.\nWhat should I call you?");
alert(`Nice to meet you, ${user}!! Let's play some roshambo!`);

// Establish the number of rounds to be played
establishRoundCount();
function establishRoundCount() {
    rounds =
        +prompt("How many rounds shall we play?", 0);
    switch (true) {
        case isNaN(rounds):
            alert("We're gonna need an actual number of rounds before we proceed.");
            establishRoundCount();
            break;
        case rounds == 0:
            alert("Zero?! Come on now.\nYou can't win unless you play!");
            establishRoundCount();
            break;
        case rounds % 2 == 0:
            alert("Let's play an odd number of rounds.\nThere shall only be one winner!");
            establishRoundCount();
            break;
        case !(Math.floor(rounds) - rounds == 0):
            alert("Pick a nice, round number.\nNo partial games!!");
            establishRoundCount();
            break;
        case rounds < 0:
            alert("How the heck are we suppose to play a negative amount of rounds?!");
            establishRoundCount();
            break;
        case rounds == 1:
            alert(`Alright! ${(rounds)} round of roshambo it is. Sudden Death!`);
            startGame();
            break;
        case rounds > 29:
            alert(`${(rounds)} rounds?! You must have a lot of time on your hands.\n It's on!`);
            startGame();
            break;
        default:
            alert(`Alright! ${(rounds)} rounds of roshambo it is. Let's begin!`);
            startGame();
    }
}

// Add the header for the next game which will have round results displayed beneath
function startGame() {
    game += 1;
    let gameTitle = document.createElement("h1");
    let gameTitleText = document.createTextNode
        (`Game number: ${(game)} (A total of ${(rounds)} rounds)`);
    gameTitle.appendChild(gameTitleText);
    gameTracker.insertBefore(gameTitle, gameTracker.firstElementChild);
    userPlay();
}

// Declare the player's choice
function userPlay() {
    if (round < rounds) {
        userChoice = prompt("Choose your weapon: Rock, Paper, or Scissors","").toLowerCase();
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            computerPlay();
        } else {
            alert(`Misspelled weapons aren't authorized! Try again.`);
            userPlay();
        }
    }else{
        determineGameWinner();
        alert(`Select "Play Again" if you dare to play another game!`);
    }
}

// Declare the computer's choice
function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    computerChoice = options[Math.floor(Math.random() * (options.length))];
    determineRoundWinner();
}

// Determine the winner of the round
function determineRoundWinner() {
    switch (true) {
        case (userChoice === computerChoice):
            winner = "Nobody";
            alert(`You chose ${(userChoice)}, I chose ${(computerChoice)}.\nIt's a draw! What are the odds!!`);
            displayRound();
            userPlay();
            break;
        case ((userChoice === "rock") && (computerChoice === "scissors")):
        case ((userChoice === "paper") && (computerCoice === "rock")):
        case ((userChoice === "scissors") && (computerChoice === "paper")):
            winner = user;
            userRoundWins += 1;
            alert(`You chose ${(userChoice)}, I chose ${(computerChoice)}.\nYou won the round! You're a genius!!`);
            displayRound();
            userPlay();
            break;
        default:
            winner = "Twills";
            computerRoundWins += 1;
            alert(`You chose ${(userChoice)}, I chose ${(computerChoice)}.\nI won! I really really won!!`);
            displayRound();
            userPlay();
    }
}

// Determine the winner of the game
function determineGameWinner() {
    if (userRoundWins > computerRoundWins) {
        alert(`You're the champion! Congrats!!`);
    }else{
        alert(`I'm the winner! Me!!`);
    }
}

// Add round results under each game header after each round; most recent on top
function displayRound() {
    round += 1;
    let roundResults = document.createElement("p");
    let roundResultsText = document.createTextNode
        (`Round #${(round)}: You chose ${(userChoice)} and I chose ${(computerChoice)}. ${(winner)} won!`);
    roundResults.appendChild(roundResultsText);
    gameTracker.insertBefore(roundResults, gameTracker.children[1]);
}