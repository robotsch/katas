const urlEncode = function(text) {
  let str = '';
  text = text.trim();
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === ' ') {
      str += '%20';
    } else {
      str += text[i];
    }
  }
  return str;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));