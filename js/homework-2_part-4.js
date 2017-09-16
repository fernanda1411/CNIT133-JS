console.log("cnit133_hw2_part4");



var table1,
    table2,
    number,
    square,
    cube;


table1 = "<table><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";

for (var i = 0; i < 6; i++) {
    number = i + 1;
    square = Math.pow(number, 2)
    cube = Math.pow(number, 3)

    table1 += "<tr><td>" + number + "</td><td>" + square + "</td><td>" + cube + "</td></tr>";
}

table1 += "</table>";


document.write(table1);



function displayTable2() {
    table2 = "<table><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";

    for (var i = 0; i < 4; i++) {
        number = i + 7;
        square = Math.pow(number, 2)
        cube = Math.pow(number, 3)

        table2 += "<tr><td>" + number + "</td><td>" + square + "</td><td>" + cube + "</td></tr>";
    }

    table2 += "</table>";

    document.getElementById("table2").innerHTML = table2;

}
