function blockHeader(day){
  var ordinalDay;
  switch (day) {
    case 1:
      ordinalDay = 'first';
      break;
    case 2:
      ordinalDay = 'second';
      break;
    case 3:
      ordinalDay = 'third';
      break;
    case 4:
      ordinalDay = 'fourth';
      break;
    case 5:
      ordinalDay = 'fifth';
      break;
    case 6:
      ordinalDay = 'sixth';
      break;
    case 7:
      ordinalDay = 'seventh';
      break;
    case 8:
      ordinalDay = 'eighth';
      break;
    case 9:
      ordinalDay = 'ninth';
      break;
    case 10:
      ordinalDay = 'tenth';
      break;
    case 11:
      ordinalDay = 'eleventh';
      break;
    case 12:
      ordinalDay = 'twelfth';
      break;
    default:
      ordinalDay = 'error'
  }
  var sentence = `On the ${ordinalDay} day of Christmas \nmy true love sent to me:`;
  return sentence;
}


function blockBody(item){
  var itemString;
  switch (item) {
    case 0:
      itemString = 'A Partridge in a Pear Tree';
      break;
    case 1:
      itemString = 'and a Partridge in a Pear Tree';
      break;
    case 2:
      itemString = 'Two Turtle Doves';
      break;
    case 3:
      itemString = 'Three French Hens';
      break;
    case 4:
      itemString = 'Four Calling Birds';
      break;
    case 5:
      itemString = 'Five Golden Rings';
      break;
    case 6:
      itemString = 'Six Geese a Laying';
      break;
    case 7:
      itemString = 'Seven Swans a Swimming';
      break;
    case 8:
      itemString = 'Eight Maids a Milking';
      break;
    case 9:
      itemString = 'Nine Ladies Dancing';
      break;
    case 10:
      itemString = 'Ten Lords a Leaping';
      break;
    case 11:
      itemString = 'Eleven Pipers Piping';
      break;
    case 12:
      itemString = '12 Drummers Drumming';
      break;
    default:
      itemString = 'error'
  }
  return itemString;
}

var song = '';
for (var i = 0; i <= 12; i++) {
  console.log('i: ', i);
  song += blockHeader(i) + '\n';
  for(var j = 0; j <= i; j++) {
    console.log('j: ', j);
    if (i === 0) {
      song += blockBody(0) + '\n';
    } else {
      song += blockBody(i - j + 1) + '\n';
    }
  }
  song += '\n';
}

var songBox = document.createElement('pre');
songBox.append(song);
$('#main-content').append(songBox);


$( document ).ready( function() {
  $('body').flurry({
    character: '❄❅❆*⛄☃',
    height: 240,
    speed: 1400,
    wind: 200,
    windVariance: 220,
    frequency: 10,
    large: 40,
    small: 4
  });
});
