console.log("homework_part2");

// sum, average, and product of the three integers, and the smallest and largest of t
function process(){
	console.log("process");
	var number1,
		number2, 
		number3, 
		sum, 
		average, 
		product,
		smallest,
		largest,
		result;

	number1 = document.forms["myform"].elements["num1"].value;
	number2 = document.forms["myform"].elements["num2"].value;
	number3 = document.forms["myform"].elements["num3"].value;

	sum = parseInt(number1) + parseInt(number2) + parseInt(number3);

	average = sum / 3;
	product = number1 * number2 * number3;
	smallest = Math.min(number1, number2, number3);
	largest = Math.max(number1, number2, number3);


	result = "Results: <br/>" +
			 "The sum is " + sum +
	         "<br/>The average is " + average +
	         "<br/>The product is " + product +
	         "<br/>The smallest is " + smallest +
	         "<br/>The largest is " + largest;


	document.getElementById("result").innerHTML = result;
}

