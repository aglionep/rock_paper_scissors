////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var 'move';
    'move' = null
    'move' = 'randomPlay()'
    return 'move';
}
function getComputerMove(move) {
    var 'move';
    'move' = 10
    'move' = 'getInput()'
}

function getWinner(playerMove,computerMove) {
    var winner;
      if ('rock' > 'scissors') {
        (playerMove > computerMove);
      }  else if ('scissors' > 'paper') {
        playerMove > computerMove);
      }  else if ('paper' > 'rock') {
        playerMove > computerMove);
      }  else if ('rock' < 'paper')
        playerMove > computerMove);
         else { ('rock' > 'rock') {
        playerMove > computerMove);
         return winner;
    }


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}
