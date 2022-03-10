const multiplicationTable = function(maxValue) {
  let line = '';
  for (let i = 1; i <= maxValue; i += 1) {
    for (let j = i; j <= maxValue * i; j += i) {
      line += j + ' ';
    }
    line += '\n';
  }
  return line.trim();
};

console.log(multiplicationTable(1));

console.log(multiplicationTable(5));

console.log(multiplicationTable(10));
