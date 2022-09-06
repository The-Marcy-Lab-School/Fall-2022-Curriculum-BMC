// Option 1
function persistence(num) {
  let times = 0;
   
  num = num.toString();
   
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
   
  return times;
}

// Option 2
function persistence(num) {
  if (num < 10) return 0

  let count = 1;
  while (multiplyDigits(num) > 9) {
    num = multiplyDigits(num);
    count += 1;
  }
  
  return count;
}

function multiplyDigits(num) {
  return String(num).split('').reduce((digit1, digit2) => digit1 * digit2);
}
