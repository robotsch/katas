const camelCase = function(input) {
  input = input.split(' ');
  let res = input[0];
  for (let i = 1; i < input.length; i += 1) {
    res += input[i][0].toUpperCase() + input[i].slice(1);
  }
  return res;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
