$(document).ready(function(){
    $("#show-instructions").click(function(){
        $("#instructions").slideToggle("slow");
    });
});

var isPalindrome = function(str){
  return str === str.split('').reverse().join('');
}

var onFormSubmit = function() {
  var str = $("#numberInput").val();
  $("#resultInfo").css("display", "none");
  if(str.length < 5 || str.charAt(0) === '0') {
    $("#errorInfo").css("display", "block");
  } else {
    $("#errorInfo").css("display", "none");
    if (isPalindrome(str)){

      $("#resultInfo").html(str + " is a palindrome");
      $("#resultInfo").css("display", "block");
    } else {
      $("#resultInfo").css("display", "block");
      $("#resultInfo").html(str + " isn't a palindrome");
    }
  }
}
