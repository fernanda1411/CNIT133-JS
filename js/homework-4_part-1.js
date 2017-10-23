function productAndSumOfRangeWithForLoop(start,end,inc, operation, loopType='for') {
  console.log(loopType);
  var sum = 0;
  var pro = 1;

  if (loopType === 'for') {
    for(var i = start; i <= end; i = i + inc) {
      sum += i;
      pro *= i;
    }
  } else if(loopType === 'while') {
    var i = start;
    while (i <= end) {
      sum += i;
      pro *= i;
      i = i + inc;
    }
  }

  var result;
  if (operation === 'sum') {
    result = `The sum is ${sum}`;
  } else if (operation = 'pro') {
    result = `The pro is ${pro}`;
  }
  return result;
}
