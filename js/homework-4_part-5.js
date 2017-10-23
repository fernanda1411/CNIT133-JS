$( "#toogleIntructionsBtn" ).click(function() {
  $( "#instructions" ).toggle( "slow" );
});


$( "#listTypeBtn" ).click(function(e) {
  e.preventDefault();
  var listType = parseInt($("#listType").val());
  var list;
  var error = false;

  switch (listType) {
    case 1:
      var list = document.createElement('ul');
      list.style.listStyleType =  'square';
      break;
    case 2:
      var list = document.createElement('ol');
      break;
    case 3:
      var list = document.createElement('ol');
      list.style.listStyleType =  'upper-alpha';
      break;
    default:
      error = true;
  }
  if(error) {
    $("#errorMessage").show();
  } else {
    $("#errorMessage").hide();
    var li;
    for (var i =0; i < 3; i++){
      li = document.createElement('li');
      li.appendChild(document.createTextNode('List item 1'));
      list.appendChild(li)
    }


    document.getElementById('displayResult').innerHTML = '';
    document.getElementById('displayResult').appendChild(list);
  }

});
