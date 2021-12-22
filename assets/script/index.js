var comOption = ["Rock", "Paper", "Scissors"];

var wins = 0;
var ties = 0;
var losses = 0;

function playGame() {
  //User Choices

  document.getElementById("rock").onclick = function () {
    var userChoice = "Rock";
    window.alert("You choose " + userChoice);
    computerDecision(userChoice);
  };

  document.getElementById("paper").onclick = function () {
    var userChoice = "Paper";
    window.alert("You choose " + userChoice);
    computerDecision(userChoice);
  };

  document.getElementById("scissors").onclick = function () {
    var userChoice = "Scissors";
    window.alert("You choose " + userChoice);
    computerDecision(userChoice);
  };

  //Computer Decision making

  var computerDecision = function (userChoice) {
    var index = Math.floor(Math.random() * comOption.length);
    var compChoice = comOption[index];
    window.alert("The computer chose " + compChoice);
    result(userChoice, compChoice);
    console.log('You chose: ' + userChoice, 'Computer chose: ' + compChoice);
    console.log(wins, ties, losses);
    document.getElementById("win").innerHTML = 'Wins: ' + wins
    document.getElementById("tie").innerHTML = 'Ties: ' + ties
    document.getElementById("loss").innerHTML = 'Losses: ' + losses
  };

  //Results

  var result = function (userChoice, compChoice) {
    if (userChoice === compChoice) {
      ties++;
      window.alert("It's a tie!");
    } else if (
      (userChoice === "Rock" && compChoice === "Scissors") ||
      (userChoice === "Paper" && compChoice === "Rock") ||
      (userChoice === "Scissors" && compChoice === "Paper")
    ) {
      wins++;
      window.alert("You win!");
    } else {
      losses++;
      window.alert("You lost!");
    }
  };
}

playGame();
