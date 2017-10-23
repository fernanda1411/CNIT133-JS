console.log("hello");

$('#drawSquare').on('click', function(e){
  e.preventDefault();
  document.getElementById('result').innerHTML = '';
  var size = $('#size').val();

  if(size < 2 || size > 10) {
    $('#errorMessage').show();
  } else {
    $('#errorMessage').hide();
    var row;
    var space = ' ';
    var asterisks = '*';
    var rowContent;
    for(var i = 0; i < size; i++){
      rowContent = '';
      for(var j = 0; j < size; j++){
        console.log(`i: ${i} - j: ${j}`);
        if (i === 0 || i === size - 1) {
          rowContent += asterisks;
        } else {
          if (j === 0 || j === size - 1) {
            rowContent += asterisks;
          } else {
            rowContent += space;
          }
        }
      }
      row = document.createElement('pre');
      row.appendChild(document.createTextNode(rowContent));
      row.style.fontFamily = 'monospace';
      $('#result').append(row);
    }
  }
});
