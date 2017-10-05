function validateNumberInput(inputValue) {
  return (inputValue !== "undefined" && inputValue >= 0 && inputValue <= 100 && !isNaN(inputValue));
}

function processStudentGrades() {
    var lettergrade;
    var outputMessage;
    var showResult = false;

    var homeworkAverage = parseFloat(document.forms["stundentsGrade"].elements["homeworkAverage"].value);
  	var midTermScore = parseFloat(document.forms["stundentsGrade"].elements["midTermScore"].value);
  	var finalExameScore = parseFloat(document.forms["stundentsGrade"].elements["finalExameScore"].value);
  	var acr = parseFloat(document.forms["stundentsGrade"].elements["acr"].value);

    if (validateNumberInput(homeworkAverage) && validateNumberInput(midTermScore) && validateNumberInput(finalExameScore) && validateNumberInput(acr)) {
      var finalaverage = .5 * homeworkAverage + .2 * midTermScore + .2 * finalExameScore + .1 * acr;
      if(finalaverage >= 90){
      	lettergrade = "A";
      } else if (finalaverage >= 80){
      	lettergrade = "B";
      } else if (finalaverage >=70){
      	lettergrade = "C";
      } else if (finalaverage >=60){
      	lettergrade = "D";
      } else{
      	lettergrade = "F";
      }

      if (lettergrade === "D" || lettergrade === "F"){
      	outputMessage =finalaverage + " " + lettergrade + " - Student must retake the course";
      } else {
        outputMessage = finalaverage + " " + lettergrade;
      }
      showResult = true;
      document.getElementById("result").innerHTML = outputMessage;
    } else {
      showResult = true;
      document.getElementById("result").innerHTML = "Please fill up all fields and make sure that all numbers are in between 0 and 100";    
    }

    document.getElementById("result").style.display = (showResult) ? "block" : "none";

}


$(document).ready(function(){
    $("#show-instructions").click(function(){
        $("#instructions").slideToggle("slow");
    });
});

























// sum, average, and product of the three integers, and the smallest and largest of t

// ç
// 	var homework = prompt("Homework average"),
// 		midterm,
// 		final,
// 		acr;



// 	homework = document.forms["myform"].elements["homework"].value;
// 	midterm = document.forms["myform"].elements["midterm"].value;
// 	final = document.forms["myform"].elements["final"].value;
// 	acr = document.forms["myform"].elements["acr"].value;



// 	console.log("homework: ",homework);
// 	console.log(midterm);
// 	console.log(final);
// 	console.log(acr);




// 	//document.forms["myform"].elements["result"].value = quotient;


// }
