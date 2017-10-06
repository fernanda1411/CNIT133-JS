var account,
    balance,
    newBalance,
    itemsTotal,
    creditsTotal,
    creditAllowed,
    creditAvailable,
    results;

function test() {
    account = $('#account').val();
    var test = parseFloat(account);
    console.log(test);
}

function getInput() {
    account = parseFloat($('#account').val());
    console.log(account.length);
    while (account === "undefined" || account === "" || account < 0 || isNaN(account)) {
        alert("Account Number are numbers only")
        account = parseFloat(prompt("Account Number - Please enter your account number"));
    }
    $('#account').val(account);

    balance = parseFloat($('#balance').val());
    while (balance === "undefined" || balance === "" || balance < 0 || isNaN(balance)) {
        alert("Ammounts must be numbers and greater then 0")
        balance = parseFloat(prompt("Initial Balance - Please enter a number greater or equal 0"));
    }
    $('#balance').val(balance);

    itemsTotal = parseFloat($('#itemsTotal').val());
    while (itemsTotal === "undefined" || itemsTotal === "" || itemsTotal < 0 || isNaN(itemsTotal)) {
        alert("Ammounts must be numbers and greater then 0")
        itemsTotal = parseFloat(prompt("Total of all items - Please enter a number greater or equal 0"));
    }
    $('#itemsTotal').val(itemsTotal);

    creditsTotal = parseFloat($('#creditsTotal').val());
    while (creditsTotal === "undefined" || creditsTotal === "" || creditsTotal < 0 || isNaN(creditsTotal)) {
        alert("Ammounts must be numbers and greater then 0")
        creditsTotal = parseFloat(prompt("Total of all credits applied - Please enter a number greater or equal 0"));
    }
    $('#creditsTotal').val(creditsTotal);

    creditAllowed = parseFloat($('#creditAllowed').val());
    while (creditAllowed === "undefined" || creditAllowed === "" || creditAllowed < 0 || isNaN(creditAllowed)) {
        alert("Ammounts must be numbers and greater then 0")
        creditAllowed = parseFloat(prompt("Allowed credit limit - Please enter a number greater or equal 0"));
    }
    $('#creditAllowed').val(creditAllowed);
}

// Calculate the new balance (which equals beginning balance + charges – credits)
function calculateNewBalance() {
    newBalance = balance + itemsTotal - creditsTotal;

    if (newBalance < 0) {
        newBalance = 0;
    }

    return newBalance;
}

// Determine whether the new balance exceeds the customer's credit limit and by how much.
function checkCredit() {

    creditAvailable = Math.abs(newBalance - creditAllowed);

    if (newBalance <= creditAllowed) {
        return "Credit available: " + creditAvailable;
    } else {
        return "Credit limit exceeded by: " + creditAvailable;
    }


}


// Prepare output
function outputResults() {

    results = "Credit Account Summary Account Number: " + account + "\n";
    results += "Credit Limit: " + creditAllowed + "\n";
    results += "Balance at beginning of month: " + balance + "\n";
    results += "Total amount charged this month: " + itemsTotal + "\n";
    results += "Total amount of credits this month: " + creditsTotal + "\n";
    results += "Summary - The new balance is: " + newBalance + "\n";
    results += checkCredit();

    return results;
}



function submitForm() {
    getInput();
    calculateNewBalance();
    checkCredit();
    // Display in a form textarea,
    $("#output").val(outputResults());
}

function resetForm() {
    alert("test");
}


$(document).ready(function() {
    $('#toogleTextArea').on("click", function() {
        $("#output").toggleClass("changed");
    });
});
