var centralTendency = function(numbers){
  var mean, median, mode, mid;
  var arguments = numbers.split(" ");
  var total = 0;
  var count = 1;
  var tempCount = 1;

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  var compare = function(a, b){
    return (a - b)
  }

  arguments = arguments.map(function(num){
    return parseInt(num)
  });
  arguments.sort(compare);

  // Find the mean
  for (i = 0; i < arguments.length; i++){
    total = total + arguments[i];
  }
  mean = total / arguments.length;

  // Find the median
  mid = arguments.length / 2;
  if (mid % 1 !== 0){
    median = arguments[Math.floor(mid)]
  } else {
    median = (arguments[Math.floor(mid)] + arguments[Math.floor(mid) - 1]) / 2
  }

  // Find the mode (can only return one mode right now)
  for (i = 0; i < arguments.length - 1; i++){
    
    if (arguments[i] === arguments[i + 1]){
      tempCount++;
      if (tempCount > count){
        mode = arguments[i];
        count = tempCount;
      }
    } else {
      tempCount = 1;
    }
  }
  
  if(!mode){mode = "There is no mode."};

  return [mean, median, mode];
};

module.exports = centralTendency;