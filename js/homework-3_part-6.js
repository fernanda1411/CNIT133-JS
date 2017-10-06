function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var a, b;

function generateQuestion() {
  a = getRandomInt(0, 9);
  b = getRandomInt(0, 9);

  $("#currentQuestion").html(`How much is ${a} times ${b}?`)
  $("#questionWrapper").css("display", "block");
  $("#nextAction").css("display", "none");
  $("#successAlert").css("display", "none");
  $("#userAnswer").val('');
}

function checkAnswer() {
  var userAnswer = $("#userAnswer").val();
  var expectedAnswer = a * b;
  $("#errorAlert").css("display", "none");

  if (userAnswer == expectedAnswer) {
      console.log("yes");
      $("#successAlert").css("display", "block");
      $("#successAlert").html("Congratulation!!!");
      $("#questionWrapper").css("display", "none");
      $("#nextAction").css("display", "block");
  } else {
    $("#errorAlert").css("display", "block");
    $("#errorAlert").html("Wrong Anwer!!! Try Again");
  }
}

function gameOver() {
  $("#successAlert").css("display", "block");
  $("#successAlert").html("Thanks for playing. Come back soon!!");
  $("#questionWrapper").css("display", "none");
  $("#nextAction").css("display", "none");
}


$( document ).ready(function() {
    generateQuestion();
});
