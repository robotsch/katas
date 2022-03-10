const repeatNumbers = function(data) {
  let str = '';
  for (let d of data) {
    for (let i = 0; i < d[1]; i++) {
      str += d[0];
    }
    str += ', ';
  }
  return str.slice(0, str.length - 2);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
