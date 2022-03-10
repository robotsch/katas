const sumLargestNumbers = function(data) {
  let top = 0;
  let second = 0;
  
  for (let n of data) {
    if (n > top) {
      second = top;
      top = n;
    }
  }
  return top + second;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));