console.log("cnit133_hw2_part3");



// Count Negative numbers
// Count Positive numbers
// Count 0



function process() {
    var number,
        countNegative,
        countPositive,
        count0;

    // number1 = document.forms["myform"].elements["num1"].value;
    // number2 = document.forms["myform"].elements["num2"].value;
    // number3 = document.forms["myform"].elements["num3"].value;
    // number4 = document.forms["myform"].elements["num4"].value;
    // number5 = document.forms["myform"].elements["num5"].value;


    countNegative = 0;
    countPositive = 0;
    count0 = 0;


    for (var i = 0; i < 5; i++) {

        var elementNumber = "num" + (i + 1);

        number = document.forms["myform"].elements[elementNumber].value;


        if (number > 0) {
            countPositive++;
        } else if (number < 0) {
            countNegative++;
        } else {
            count0++;
        }


        console.log(number);
        console.log(countNegative);
        console.log(countPositive);
        console.log(count0);
        console.log("*********");
    }





    result = "Results: <br/>" +
        "The count of negative Numbers is " + countNegative +
        "<br/>The count of positive Numbers is " + countPositive +
        "<br/>The count of 0s is " + count0;


    document.getElementById("result").innerHTML = result;


}

$(document).ready(function() {
    $("button").click(function() {
        $("#result").fadeTo("slow", 0.15);

    })
});
