function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var rolldices = function() {
  var dice1 = getRandomInt(1,6);
  var dice2 = getRandomInt(1,6);

  var sum = dice1 + dice2;

  $("#sum").html(sum);
  var point = $("#point").html();

  $("#dice1").html(dice1);
  $("#dice2").html(dice2);


  if(point === '') {
    if (sum === 7 || sum === 11) {
      alert('You win');
    } else if (sum === 2 || sum === 3 || sum === 12) {
      alert('You lose');
    } else {
      point = sum;
      $("#point").html(point);
    }
  } else if (sum !== 7){
    alert('You win');
  } else {
    alert('You lose');
    point = '';
    $("#point").html(point);
    $("#dice1").html('');
    $("#dice2").html('');
    $("#sum").html('');

  }
}

var game = function() {
  rolldices();
}
