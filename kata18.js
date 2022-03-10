const squareCode = function(message) {
  const msg = message.split(' ').join('');
  const numChars = Math.ceil(Math.sqrt(msg.length));
  let tmp = '';
  const result = [];
  let encoded = '';

  // Build squared array
  for (let i = 0; i < msg.length; i += 1) {
    tmp += msg[i];
    if (tmp.length % numChars === 0 || i === msg.length - 1) {
      result.push(tmp);
      tmp = '';
    }
  }

  // Reconstruct encoded string
  for (let i = 0; i < numChars; i += 1) {
    result.forEach((element) => {
      if (element[i] !== undefined) {
        encoded += element[i];
      }
    });
    encoded += ' ';
  }
  return encoded.trim();
};

console.log(squareCode('chill out'));
console.log(squareCode('feed the dog'));
console.log(squareCode('have a nice day'));
console.log(squareCode('if man was meant to stay on the ground god would have given us roots'));
