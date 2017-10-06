console.log("cnit133_hw3_part2");

var salesperson,
	item1qty,
    item2qty,
    item3qty,
    item4qty,
    item1price,
    item2price,
    item3price,
    item4price,
    item1total,
    item2total,
    item3total,
    item4total,
    totalsold,
    totalearnings;

item1price = 239.99;
item2price = 129.75;
item3price = 99.95;
item4price = 350.89;


$(function() {
	resetForm();
    $(document).tooltip();
    $("#item1-price").text("$" + item1price);
    $("#item2-price").text("$" + item2price);
    $("#item3-price").text("$" + item3price);
    $("#item4-price").text("$" + item4price);
})


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}




function calculateEarnings() {

	salesperson = $("#salesperson").val();

    while (salesperson === "undefined" || salesperson === "") {
        salesperson = prompt("Please provide the salesperson name");
        console.log(salesperson);
    }

    $("#salesperson").val(salesperson);


    item1qty = parseFloat($("#item1").val());
    while (item1qty === "undefined" || item1qty === "" || item1qty < 0 || isNaN(item1qty)) {
        item1qty = parseFloat(prompt("Item 1 - Please enter a number greater or equal 0"));
    }
    $("#item1").val(item1qty);

    item2qty = parseFloat($("#item2").val());
    while (item2qty === "undefined" || item2qty === "" || item2qty < 0 || isNaN(item2qty)) {
        item2qty = parseFloat(prompt("Item 2 - Please enter a number greater or equal 0"));
    }
    $("#item2").val(item2qty);

    item3qty = parseFloat($("#item3").val());
    while (item3qty === "undefined" || item3qty === "" || item3qty < 0 || isNaN(item3qty)) {
        item3qty = parseFloat(prompt("Item 3 - Please enter a number greater or equal 0"));
    }
    $("#item3").val(item3qty);

    item4qty = parseFloat($("#item4").val());
    while (item4qty === "undefined" || item4qty === "" || item4qty < 0 || isNaN(item4qty)) {
        item4qty = parseFloat(prompt("Item 4 - Please enter a number greater or equal 0"));
    }
    $("#item4").val(item4qty);

    item2qty = $("#item2").val();
    item3qty = $("#item3").val();
    item4qty = $("#item4").val();

    // Calculate Items Totals (quantities * price)
    item1total = parseFloat((item1qty * item1price).toFixed(2));
    item2total = parseFloat((item2qty * item2price).toFixed(2));
    item3total = parseFloat((item3qty * item3price).toFixed(2));
    item4total = parseFloat((item4qty * item4price).toFixed(2));

    // Caculate total ammount
    totalsold = parseFloat((item1total + item2total + item3total + item4total).toFixed(2));


    // Calculate Total Earnings
    totalearnings = (200 + 0.09 * totalsold).toFixed(2);

    //validate inputs


    // Display items quantity
    $("#item1-sold").val(item1qty);
    $("#item2-sold").val(item2qty);
    $("#item3-sold").val(item3qty);
    $("#item4-sold").val(item4qty);


    //Display items total ammounts
    $("#item1-total").val("$" + item1total);
    $("#item2-total").val("$" + item2total);
    $("#item3-total").val("$" + item3total);
    $("#item4-total").val("$" + item4total);

    // Display all items total ammount
    $("#total-sold").val("$" + totalsold);

    // Display total earnings
    $("#total-ernings").val("$" + totalearnings);


}

function resetForm(){
	$("#item1").val("0");
	$("#item2").val("0");
	$("#item3").val("0");
	$("#item4").val("0");

	$("#item1-sold").val("0");
    $("#item2-sold").val("0");
    $("#item3-sold").val("0");
    $("#item4-sold").val("0");

    $("#item1-total").val("$0.00");
    $("#item2-total").val("$0.00");
    $("#item3-total").val("$0.00");
    $("#item4-total").val("$0.00");

    $("#total-sold").val("$ 0.00");
    $("#total-ernings").val("$ 0.00");
}
