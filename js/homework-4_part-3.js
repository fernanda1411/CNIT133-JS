function tableCreate(amount, years, interest){
    var tbl  = document.createElement('table');

    var header = document.createElement('tr');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    header = thead.insertRow();
    var h1 = header.insertCell();
    var h2 = header.insertCell();
    var h3 = header.insertCell();

    h1.appendChild(document.createTextNode('Year'));
    h2.appendChild(document.createTextNode('Amount on deposit'));
    h3.appendChild(document.createTextNode('Interest Rate'));
    h1.style.border = '1px solid black';
    h2.style.border = '1px solid black';
    h3.style.border = '1px solid black';
    thead.appendChild(header);
    tbl.appendChild(thead);
    var amountValue = amount;
    for (var i = 0; i < 10; i++) {
        var tr = tbody.insertRow();
        var yearCell = tr.insertCell();
        var amountCell = tr.insertCell();
        var interestCell = tr.insertCell();

        var yearValue = i + 1;
        var interestValue = interest / 100;
        amountValue += amountValue * interestValue;

        yearCell.appendChild(document.createTextNode(yearValue));
        amountCell.appendChild(document.createTextNode(amountValue.toFixed(2)));
        interestCell.appendChild(document.createTextNode(interestValue.toFixed(2)));

        yearCell.style.border = '1px solid black';
        amountCell.style.border = '1px solid black';
        interestCell.style.border = '1px solid black';
    }
    var tableTitle = document.createElement('h4');
    var tableTitleContent = `Interest of ${interest}% over a deposit of ${amount} in ${years} years`;
    tableTitle.appendChild(document.createTextNode(tableTitleContent));

    tbl.appendChild(tbody);
    document.getElementById('main-content').appendChild(tableTitle);
    document.getElementById('main-content').appendChild(tbl);
    $(function() {
      $("table tr:nth-child(even)").addClass("striped");
    });
}

for(var i = 5; i <= 10; i++){
  tableCreate(1000, 10, i)
}
