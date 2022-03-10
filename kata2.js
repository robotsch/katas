const numberOfVowels = function(data) {
  let sum = 0;
  for (let l of data) {
    if (['a', 'e', 'i', 'o', 'u'].includes(l)) {
      sum += 1;
    }
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));