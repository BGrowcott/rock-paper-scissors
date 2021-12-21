var compOp = ["Rock", "Paper", "Scissors"];

var wins = 0;
var ties = 0;
var losses = 0;

function playgame() {
  //User choices

  document.getElementById("rock").onclick = function () {
    var userchoice = "Rock";
    window.alert("You choose " + userchoice);
    computerdecision(userchoice);
  };

  document.getElementById("paper").onclick = function () {
    var userchoice = "Paper";
    window.alert("You choose " + userchoice);
    computerdecision(userchoice);
  };

  document.getElementById("scissors").onclick = function () {
    var userchoice = "Scissors";
    window.alert("You choose " + userchoice);
    computerdecision(userchoice);
  };

  //Computer decision making

  var computerdecision = function (userchoice) {
    var index = Math.floor(Math.random() * compOp.length);
    var compchoice = compOp[index];
    window.alert("The computer chose " + compchoice);
    result(userchoice, compchoice);
    console.log(userchoice, compchoice);
    console.log(wins, ties, losses);
    document.getElementById("win").innerHTML = 'Wins: ' + wins
    document.getElementById("tie").innerHTML = 'Ties: ' + ties
    document.getElementById("loss").innerHTML = 'Losses: ' + losses
  };

  //Results

  var result = function (userchoice, compchoice) {
    if (userchoice === compchoice) {
      ties++;
      window.alert("It's a tie!");
    } else if (
      (userchoice === "Rock" && compchoice === "Scissors") ||
      (userchoice === "Paper" && compchoice === "Rock") ||
      (userchoice === "Scissors" && compchoice === "Paper")
    ) {
      wins++;
      window.alert("You win!");
    } else {
      losses++;
      window.alert("You lost!");
    }
  };
}

playgame();
