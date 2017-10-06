var celsius = function(f) {
  return 5 / 9 * (f - 32);
}

var fahrenheit = function(c) {
  return (9/5 * c) + 32;
}


var convertToCelsius = function() {
  var input = $("#inputFahrenheit").val();
  $("#error").css("display", "none");
  if (typeof(parseFloat(input)) === 'number' && input !== '') {
    var result = celsius(input);
    $("#resultCelsius").val(result.toFixed(2));
  } else {
    $("#error").css("display", "block");
    $("#error").html("Please input a numeric value");
  }
}

var convertToFahrenheit = function() {
  var input = $("#inputCelsius").val();
  $("#error").css("display", "none");
  if (typeof(parseFloat(input)) === 'number' && input !== '') {
    var result = fahrenheit(input);
    $("#resultFahrenheit").val(result.toFixed(2));
  } else {
    $("#error").css("display", "block");
    $("#error").html("Please input a numeric value");
  }
}
