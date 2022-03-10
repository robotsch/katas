const startCasing = (input, index) => {
  const tmp = input.split(' ');
  for (let i = index; i < tmp.length; i += 1) {
    tmp[i] = tmp[i].charAt(0).toUpperCase() + tmp[i].substring(1);
  }
  return tmp;
};

const letterCasing = (input, letterType) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const tmp = input.split('');
  if (letterType === 'v') {
    for (let i = 0; i < tmp.length; i += 1) {
      if (vowels.includes(tmp[i])) {
        tmp[i] = tmp[i].toUpperCase();
      }
    }
  } else {
    for (let i = 0; i < tmp.length; i += 1) {
      if (!vowels.includes(tmp[i])) {
        tmp[i] = tmp[i].toUpperCase();
      }
    }
  }
  return tmp;
};

const makeCase = (input, casing) => {
  let result = input;
  if (casing instanceof Array) {
    for (let i = 0; i < casing.length; i += 1) {
      result = makeCase(result, casing[i]);
    }
  } else {
    // Strings are not mutable, tell me about it
    switch (casing) {
    case 'snake':
      result = result.split(' ').join('_');
      break;
    case 'kebab':
      result = result.split(' ').join('-');
      break;
    case 'camel':
      result = startCasing(result, 1).join('');
      break;
    case 'pascal':
      result = startCasing(result, 0).join('');
      break;
    case 'title':
      result = startCasing(result, 0).join(' ');
      break;
    case 'vowel':
      result = letterCasing(result, 'v').join('');
      break;
    case 'consonant':
      result = letterCasing(result, 'c').join('');
      break;
    case 'upper':
      result = result.trim().split(' ').map((x) => x.toUpperCase()).join(' ');
      break;
    case 'lower':
      result = result.trim().split(' ').map((x) => x.toLowerCase()).join(' ');
      break;
    default:
      break;
    }
  }
  return result;
};

console.log(makeCase('this is a string', 'camel'));
console.log(makeCase('this is a string', 'pascal'));
console.log(makeCase('this is a string', 'snake'));
console.log(makeCase('this is a string', 'kebab'));
console.log(makeCase('this is a string', 'title'));
console.log(makeCase('this is a string', 'vowel'));
console.log(makeCase('this is a string', 'consonant'));
console.log(makeCase('this is a string', ['camel', 'vowel']));
