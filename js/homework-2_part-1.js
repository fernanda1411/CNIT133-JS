console.log("cnit133_hw2_part-1");

var container = document.createElement("p");
var string_1 = document.createElement("span");
var string_2 = document.createElement("span");
var string_3 = document.createElement("span");

string_1.innerHTML = 'ab';
string_2.innerHTML = ' 12 ';
string_3.innerHTML = '34';

string_1.style.color = 'red';
string_1.style.fontFamily = 'Times New Roman';

string_2.style.color = 'blue';
string_2.style.fontFamily = 'Arial';

string_3.style.color = 'green';
string_3.style.fontFamily = 'Impact';
string_3.style.fontStyle = 'italic';

container.appendChild(string_1);
container.appendChild(string_2);
container.appendChild(string_3);


document.getElementById("main-content").appendChild(container);

